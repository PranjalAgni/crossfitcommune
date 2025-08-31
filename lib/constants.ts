export const PHONE = "918121145533";

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I’m interested in learning more about your CrossFit classes, schedule, and membership options. Could you please share the details?"
);

export const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${WHATSAPP_MESSAGE}`;

export const INSTAGRAM_URL =
  "https://www.instagram.com/crossfitcommune?igsh=aGNheWplODRjdnVo";

export const STANDARD = [
  { plan: "Monthly", price: 10000 },
  { plan: "3 Months", price: 25000 },
  { plan: "6 Months", price: 45000 },
  { plan: "1 Year", price: 78000 },
] as const;

export const EARLY = [
  { plan: "Monthly", price: 8500, save: 1500 },
  { plan: "3 Months", price: 21000, save: 4000 },
  { plan: "6 Months", price: 38000, save: 7000 },
  { plan: "1 Year", price: 65000, save: 13000 },
] as const;
