import type { SVGProps } from "react";

type IconName =
  | "search"
  | "user"
  | "heart"
  | "bag"
  | "menu"
  | "close"
  | "chevron"
  | "eye"
  | "shield"
  | "payment"
  | "delivery"
  | "headphones"
  | "return"
  | "instagram"
  | "facebook"
  | "pinterest"
  | "tiktok"
  | "arrow"
  | "phone"
  | "mail"
  | "whatsapp"
  | "pin"
  | "send";

const paths: Record<IconName, React.ReactNode> = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
  heart: <path d="M20.8 8.7c0 5.5-8.8 11-8.8 11s-8.8-5.5-8.8-11A4.7 4.7 0 0 1 12 6a4.7 4.7 0 0 1 8.8 2.7Z" />,
  bag: <><path d="M4 8h16l-1 13H5L4 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  chevron: <path d="m7 10 5 5 5-5" />,
  eye: <><path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
  payment: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></>,
  delivery: <><path d="M3 6h11v12H3zM14 10h4l3 3v5h-7z" /><circle cx="7.5" cy="19" r="1.5" /><circle cx="17.5" cy="19" r="1.5" /></>,
  headphones: <><path d="M3 13v-2a9 9 0 0 1 18 0v2" /><path d="M3 13h4v7H5a2 2 0 0 1-2-2v-5ZM21 13h-4v7h2a2 2 0 0 0 2-2v-5Z" /></>,
  return: <><path d="M3 11a9 9 0 1 0 2.6-6.4L3 7" /><path d="M3 3v4h4" /><path d="M12 7v5l3 2" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  facebook: <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z" />,
  pinterest: <><circle cx="12" cy="12" r="9" /><path d="m10 17 2-8c.4-1.5 3-1.5 3 0 0 3-4 4-5 2-1-2 1-4 3-4" /></>,
  tiktok: <path d="M14 4v10a4 4 0 1 1-4-4M14 4c.5 3 2.5 4.5 5 5" />,
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  phone: <path d="M6.6 3.8 9 3l2 4.5-2 1.8a14.6 14.6 0 0 0 5.7 5.7l1.8-2 4.5 2-.8 2.4a2 2 0 0 1-2 1.4A16.5 16.5 0 0 1 5.2 5.8a2 2 0 0 1 1.4-2Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" /><path d="M9 8.5c.5 2 2 3.5 4.5 4.5l1-1 2 1-.5 2c-4.5.5-8.5-3.5-8-8l2-.5 1 2-1 1Z" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
};

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
