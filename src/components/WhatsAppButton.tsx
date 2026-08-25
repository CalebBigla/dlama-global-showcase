import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348060774472?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20estate%20plots"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_0_rgba(37,211,102,0.4)] transition-all hover:scale-110 hover:shadow-[0_6px_30px_0_rgba(37,211,102,0.5)] md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" />
    </a>
  );
}
