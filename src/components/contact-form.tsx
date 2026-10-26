"use client";

import { useRef, useState, type FormEvent } from "react";
import { contactPage } from "@/data/contact";
import { Icon } from "@/components/icons";

type FieldName = "fullName" | "email" | "phone" | "message";
type FormErrors = Partial<Record<FieldName, string>>;

function validate(formData: FormData): FormErrors {
  const errors: FormErrors = {};
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const phoneDigits = phone.replace(/\D/g, "");
  const validPhone = /^\+?[0-9][0-9\s().-]*[0-9]$/.test(phone)
    && phoneDigits.length >= 7
    && phoneDigits.length <= 15;

  if (!fullName) errors.fullName = contactPage.messageForm.fields.fullName.required;
  if (!email) errors.email = contactPage.messageForm.fields.email.required;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = contactPage.messageForm.fields.email.invalid;
  }
  if (!phone) errors.phone = contactPage.messageForm.fields.phone.required;
  else if (!validPhone) errors.phone = contactPage.messageForm.fields.phone.invalid;
  if (!message) errors.message = contactPage.messageForm.fields.message.required;
  else if (message.length > contactPage.messageForm.maxMessageLength) {
    errors.message = contactPage.messageForm.fields.message.tooLong;
  }
  return errors;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "failure">("idle");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setSubmitError("");
    setWhatsAppUrl("");
    const formData = new FormData(event.currentTarget);
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const subject = String(formData.get("subject") ?? "").trim() || "Not specified";
    const messageText = [
      "New message from Beyond the Beauty website",
      `Name: ${String(formData.get("fullName") ?? "").trim()}`,
      `Email: ${String(formData.get("email") ?? "").trim()}`,
      `Phone: ${String(formData.get("phone") ?? "").trim()}`,
      `Subject: ${subject}`,
      `Message: ${String(formData.get("message") ?? "").trim()}`,
    ].join("\n");
    const url = `https://wa.me/${contactPage.contactDetails.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    let openedWindow: Window | null = null;
    try {
      openedWindow = window.open(url, "_blank");
      if (openedWindow) openedWindow.opener = null;
    } catch {
      openedWindow = null;
    }
    if (!openedWindow) setWhatsAppUrl(url);

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        setSubmitError(typeof result?.error === "string" ? result.error : contactPage.messageForm.failure);
        setStatus("failure");
        return;
      }
      formRef.current?.reset();
      setErrors({});
      setStatus("success");
    } catch {
      setSubmitError(contactPage.messageForm.failure);
      setStatus("failure");
    }
  }

  const fields = contactPage.messageForm.fields;

  return (
    <form className="contact-form" id="contact-message-form" onSubmit={handleSubmit} noValidate ref={formRef}>
      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="contact-full-name">{fields.fullName.label} <span>*</span></label>
          <input autoComplete="name" aria-describedby={errors.fullName ? "contact-full-name-error" : undefined} aria-invalid={Boolean(errors.fullName)} id="contact-full-name" name="fullName" placeholder={fields.fullName.placeholder} required />
          {errors.fullName && <p className="contact-field-error" id="contact-full-name-error">{errors.fullName}</p>}
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">{fields.email.label} <span>*</span></label>
          <input autoComplete="email" aria-describedby={errors.email ? "contact-email-error" : undefined} aria-invalid={Boolean(errors.email)} id="contact-email" name="email" placeholder={fields.email.placeholder} required type="email" />
          {errors.email && <p className="contact-field-error" id="contact-email-error">{errors.email}</p>}
        </div>
        <div className="contact-field">
          <label htmlFor="contact-phone">{fields.phone.label} <span>*</span></label>
          <input autoComplete="tel" aria-describedby={errors.phone ? "contact-phone-error" : undefined} aria-invalid={Boolean(errors.phone)} id="contact-phone" name="phone" placeholder={fields.phone.placeholder} required type="tel" />
          {errors.phone && <p className="contact-field-error" id="contact-phone-error">{errors.phone}</p>}
        </div>
        <div className="contact-field">
          <label htmlFor="contact-subject">{fields.subject.label}</label>
          <select defaultValue="" id="contact-subject" name="subject">
            <option disabled value="">{fields.subject.placeholder}</option>
            {contactPage.messageForm.subjects.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
          </select>
        </div>
        <div className="contact-field contact-message-field">
          <label htmlFor="contact-message">{fields.message.label} <span>*</span></label>
          <textarea aria-describedby={errors.message ? "contact-message-error" : undefined} aria-invalid={Boolean(errors.message)} id="contact-message" maxLength={contactPage.messageForm.maxMessageLength} name="message" placeholder={fields.message.placeholder} required rows={5} />
          {errors.message && <p className="contact-field-error" id="contact-message-error">{errors.message}</p>}
        </div>
        <div aria-hidden="true" className="contact-honeypot">
          <label htmlFor="contact-website">Leave this field empty</label>
          <input autoComplete="off" id="contact-website" name="website" tabIndex={-1} />
        </div>
      </div>
      <button aria-busy={status === "sending"} className="button button-gold contact-submit" disabled={status === "sending"} type="submit">
        <Icon name="send" />
        {status === "sending" ? contactPage.messageForm.sending : contactPage.messageForm.submit}
      </button>
      <p aria-live="polite" className={`contact-form-status ${status}`} role={status === "failure" ? "alert" : "status"}>
        {status === "success" && contactPage.messageForm.success}
        {status === "failure" && (submitError || contactPage.messageForm.failure)}
      </p>
      {whatsAppUrl && (
        <a className="button button-outline contact-whatsapp-fallback" href={whatsAppUrl} rel="noreferrer" target="_blank">
          {contactPage.messageForm.openWhatsApp}
        </a>
      )}
    </form>
  );
}
