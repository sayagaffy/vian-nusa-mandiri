"use client";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Debug all IDs in the document
    console.log("All IDs in document:");
    document.querySelectorAll("[id]").forEach((el) => {
      console.log(`- ${el.id}`);
    });

    const targetId = href.replace("#", "");
    console.log("Scrolling to:", targetId);

    const element = document.getElementById(targetId);
    if (element) {
      console.log("Element found, scrolling to:", element.offsetTop);

      // Use setTimeout to ensure the scroll happens after any rendering
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 100, // Offset for header height
          behavior: "smooth",
        });
      }, 100);
    } else {
      console.log("Element not found for ID:", targetId);
    }

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Mengapa Kami", href: "#whychooseus" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-blue-600 to-blue-800 py-2 text-white">
        <div className="mx-auto px-4 container">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+62 21 XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@viannusamandiri.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-100">Konsultasi Gratis:</span>
              <button
                onClick={() =>
                  window.open("http://wa.me/6281312800025", "_blank")
                }
                className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full font-medium text-xs transition-colors duration-200"
              >
                Hubungi Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="top-0 z-50 fixed bg-white/95 shadow-lg backdrop-blur-lg border-gray-200 border-b w-full">
        <div className="mx-auto px-4 container">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <OptimizedImage
                src="/logo.svg"
                alt="PT Vian Nusa Mandiri Logo"
                width={48}
                height={48}
                className="hover:scale-105 transition-transform duration-300"
              />
              <div>
                <div className="font-bold text-gray-900 text-xl">
                  PT Vian Nusa Mandiri
                </div>
                <div className="font-medium text-blue-600 text-sm">
                  Building Excellence
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="py-2 font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => {
                  const contactElement = document.querySelector("#contact");
                  contactElement?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                Request Quote
              </button>
              <button
                onClick={() =>
                  window.open("http://wa.me/6281312800025", "_blank")
                }
                className="btn-primary"
              >
                <Phone className="w-4 h-4" />
                Hubungi Kami
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden hover:bg-gray-100 p-2 rounded-xl transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen
              ? "max-h-screen bg-white border-t border-gray-200"
              : "max-h-0"
          }`}
        >
          <div className="mx-auto px-4 py-6 container">
            <nav className="space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block py-2 font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Contact Info */}
            <div className="space-y-4 mt-6 pt-6 border-gray-200 border-t">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+62 21 XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>info@viannusamandiri.com</span>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => {
                    const contactElement = document.querySelector("#contact");
                    contactElement?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 text-sm btn-secondary"
                >
                  Request Quote
                </button>
                <button
                  onClick={() =>
                    window.open("http://wa.me/6281312800025", "_blank")
                  }
                  className="flex-1 text-sm btn-primary"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
