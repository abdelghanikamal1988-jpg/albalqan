"use client";

import { ui } from "@/data/ui";
import { useLang } from "@/components/I18nProvider";

export default function WhatsAppButton() {
  const t = ui[useLang()];
  return (
    <a
      href="https://wa.me/97167494905"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappAria}
      data-cursor
      className="group fixed bottom-5 right-5 z-30 rounded-lg bg-ink px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_8px_24px_-14px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black"
    >
      {t.chatWithUs}
    </a>
  );
}
