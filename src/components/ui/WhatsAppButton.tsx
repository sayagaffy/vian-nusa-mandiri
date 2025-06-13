"use client";

import { ReactNode, useEffect } from "react";

interface WhatsAppButtonProps {
  children: ReactNode;
  className?: string;
  link?: string;
}

export function WhatsAppButton({
  children,
  className = "",
  link = "http://wa.me/6281312800025",
}: WhatsAppButtonProps) {
  useEffect(() => {
    const handleWhatsAppClick = (event: Event) => {
      const target = event.currentTarget as HTMLButtonElement;
      if (target.dataset.whatsappLink) {
        window.open(target.dataset.whatsappLink, "_blank");
      }
    };

    const buttons = document.querySelectorAll("[data-whatsapp-link]");
    buttons.forEach((button) => {
      button.addEventListener("click", handleWhatsAppClick);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleWhatsAppClick);
      });
    };
  }, []);

  return (
    <button data-whatsapp-link={link} className={className}>
      {children}
    </button>
  );
}
