const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_IPS = 5000;
const MAX_MESSAGE_LENGTH = 3000;
const requestsByIp = new Map();
const META_GRAPH_VERSION = "v23.0";

function json(body, status) {
  return Response.json(body, { status });
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return "Please check your details and try again.";
  }

  const fullName = typeof payload.fullName === "string" ? payload.fullName.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const phoneDigits = phone.replace(/\D/g, "");
  const validPhone = /^\+?[0-9][0-9\s().-]*[0-9]$/.test(phone)
    && phoneDigits.length >= 7
    && phoneDigits.length <= 15;

  if (!fullName || fullName.length > 100) return "Please enter a valid name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
  if (!validPhone) return "Please enter a valid phone number.";
  if (!message || message.length > MAX_MESSAGE_LENGTH) return "Please enter a message of 3,000 characters or fewer.";
  if (payload.subject !== undefined && (typeof payload.subject !== "string" || payload.subject.length > 100)) {
    return "Please select a valid subject.";
  }
  return null;
}

function isRateLimited(ip, now) {
  for (const [trackedIp, record] of requestsByIp) {
    if (now - record.startedAt >= WINDOW_MS) requestsByIp.delete(trackedIp);
  }

  const current = requestsByIp.get(ip);
  if (!current || now - current.startedAt >= WINDOW_MS) {
    if (requestsByIp.size >= MAX_TRACKED_IPS) {
      const oldestIp = requestsByIp.keys().next().value;
      if (oldestIp) requestsByIp.delete(oldestIp);
    }
    requestsByIp.set(ip, { startedAt: now, count: 1 });
    return false;
  }

  if (current.count >= MAX_REQUESTS) return true;
  current.count += 1;
  return false;
}

async function sendWhatsAppMessage(message) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const recipient = process.env.WHATSAPP_TO;
  if (!token || !phoneNumberId || !recipient) return;

  const response = await fetch(
    `https://graph.facebook.com/${META_GRAPH_VERSION}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: recipient,
        type: "text",
        text: { body: message },
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`WhatsApp Business Cloud API returned status ${response.status}.`);
  }
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Please send a valid message." }, 400);
  }

  if (typeof payload?.website === "string" && payload.website.trim()) {
    return json({ error: "Unable to send this message." }, 400);
  }

  const validationError = validatePayload(payload);
  if (validationError) return json({ error: validationError }, 400);

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = request.headers.get("x-real-ip")
    || forwardedFor?.split(",").at(-1)?.trim()
    || "unknown";
  if (isRateLimited(ip, Date.now())) {
    return json({ error: "Too many messages were sent. Please wait a little and try again." }, 429);
  }

  const message = {
    fullName: payload.fullName.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    subject: typeof payload.subject === "string" ? payload.subject.trim() : "",
    message: payload.message.trim(),
  };

  console.info("Contact form submission received:", message);
  const whatsappMessage = [
    "New message from Beyond the Beauty website",
    `Name: ${message.fullName}`,
    `Email: ${message.email}`,
    `Phone: ${message.phone}`,
    `Subject: ${message.subject || "Not specified"}`,
    `Message: ${message.message}`,
  ].join("\n");

  // Set the three WhatsApp values and WHATSAPP_AUTO_SEND=true in .env.local to enable server delivery.
  if (
    process.env.WHATSAPP_AUTO_SEND === "true"
    && process.env.WHATSAPP_TOKEN
    && process.env.WHATSAPP_PHONE_NUMBER_ID
    && process.env.WHATSAPP_TO
  ) {
    await sendWhatsAppMessage(whatsappMessage);
  }

  // TODO: Connect an email service or persist this message to a database.
  return json({ success: true }, 200);
}
