import { WHATSAPP_URL } from "@/lib/constants";

export default function Whatsapp() {
    return (
        <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-[60] md:hidden inline-flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg ring-1 ring-black/10 hover:scale-105 active:scale-95 transition"
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden>
          <path d="M19.11 17.13c-.29-.14-1.7-.84-1.97-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.4-.85-.76-1.42-1.7-1.59-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.49.14-.16.19-.26.29-.45.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.42s1.02 2.8 1.16 2.99c.14.19 2.01 3.08 4.85 4.31.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.33z" />
          <path d="M16 3c-7.18 0-13 5.82-13 13 0 2.3.61 4.45 1.67 6.32L3 29l6.83-1.79C11.62 28.39 13.74 29 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23c-2.03 0-3.92-.59-5.51-1.61l-.39-.25-4.03 1.06 1.07-3.94-.26-.41C6.58 19.23 6 17.67 6 16c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
        </svg>
        <span className="sr-only">WhatsApp</span>
      </a>
    )
}