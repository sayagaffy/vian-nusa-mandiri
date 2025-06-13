"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building,
  Wrench,
  Package,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { name: "Jasa Konstruksi", icon: Building, href: "#konstruksi" },
    { name: "Perawatan Gedung", icon: Wrench, href: "#maintenance" },
    { name: "Pengadaan Barang", icon: Package, href: "#supply" },
  ];

  const quickLinks = [
    { name: "Tentang Kami", href: "#about" },
    { name: "Portfolio Proyek", href: "#portfolio" },
    { name: "Testimoni Klien", href: "#testimonials" },
    { name: "Sertifikasi", href: "#certifications" },
    { name: "Karir", href: "#careers" },
    { name: "Blog", href: "#blog" },
  ];

  const legalLinks = [
    { name: "Syarat & Ketentuan", href: "#terms" },
    { name: "Kebijakan Privasi", href: "#privacy" },
    { name: "SIUJK", href: "#license" },
    { name: "ISO Certification", href: "#iso" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="top-20 left-10 absolute bg-blue-500 blur-3xl rounded-full w-64 h-64"></div>
        <div className="right-10 bottom-20 absolute bg-blue-400 blur-3xl rounded-full w-80 h-80"></div>
      </div>

      <div className="z-10 relative mx-auto px-4 container">
        {/* Main Footer Content */}
        <div className="gap-12 grid md:grid-cols-2 lg:grid-cols-4 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <OptimizedImage
                src="/logo-white.svg"
                alt="PT Vian Nusa Mandiri Logo"
                width={80}
                height={80}
                className="mr-3"
              />
              <div>
                <div className="font-bold text-xl">PT Vian Nusa Mandiri</div>
                <div className="text-blue-400 text-sm">Building Excellence</div>
              </div>
            </div>

            <p className="mb-6 text-gray-300 leading-relaxed">
              Mitra terpercaya untuk solusi konstruksi dan building services
              terintegrasi. Melayani kebutuhan korporat dan pemerintahan dengan
              standar kualitas internasional.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="flex flex-shrink-0 justify-center items-center bg-blue-600/20 rounded-full w-8 h-8">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="font-medium">+62 21 XXXX-XXXX</div>
                  <div className="text-gray-400 text-sm">
                    24/7 Customer Support
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="flex flex-shrink-0 justify-center items-center bg-green-600/20 rounded-full w-8 h-8">
                  <Mail className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="font-medium">info@viannusamandiri.com</div>
                  <div className="text-gray-400 text-sm">Email Resmi</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="flex items-center gap-2 mb-6 font-bold text-xl">
              <Building className="w-5 h-5 text-blue-400" />
              Layanan Kami
            </h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="group flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <service.icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                  <span className="transition-transform group-hover:translate-x-1 duration-200">
                    {service.name}
                  </span>
                </a>
              ))}
            </div>

            <div className="bg-blue-900/20 mt-8 p-4 border border-blue-800/30 rounded-xl">
              <h4 className="mb-2 font-bold text-blue-400">Emergency 24/7</h4>
              <p className="mb-3 text-gray-300 text-sm">
                Layanan darurat untuk maintenance dan perbaikan mendesak
              </p>
              <div className="font-bold text-red-400 text-lg">
                +62 811-XXXX-XXXX
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-bold text-xl">Link Cepat</h3>
            <div className="gap-3 grid grid-cols-1">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <ExternalLink className="opacity-0 group-hover:opacity-100 w-3 h-3 transition-opacity duration-200" />
                  <span className="transition-transform group-hover:translate-x-1 duration-200">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Office Hours */}
          <div>
            <h3 className="mb-6 font-bold text-xl">Informasi Kontak</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex flex-shrink-0 justify-center items-center bg-purple-600/20 mt-1 rounded-full w-8 h-8">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-gray-300">
                  <div className="mb-1 font-medium">Alamat Kantor</div>
                  <div className="text-sm leading-relaxed">
                    Jl. Contoh Alamat No. 123
                    <br />
                    Jakarta Selatan 12345
                    <br />
                    Indonesia
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex flex-shrink-0 justify-center items-center bg-orange-600/20 mt-1 rounded-full w-8 h-8">
                  <Clock className="w-4 h-4 text-orange-400" />
                </div>
                <div className="text-gray-300">
                  <div className="mb-1 font-medium">Jam Operasional</div>
                  <div className="space-y-1 text-sm">
                    <div>Senin - Jumat: 08:00 - 17:00</div>
                    <div>Sabtu: 08:00 - 12:00</div>
                    <div>Minggu: Tutup</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() =>
                window.open("http://wa.me/6281312800025", "_blank")
              }
              className="group flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 hover:from-blue-600 to-blue-700 hover:to-blue-800 px-4 py-3 rounded-xl w-full font-medium text-white transition-all duration-300"
            >
              Konsultasi Gratis
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
            </button>
          </div>
        </div>

        {/* Certifications & Awards Section */}
        <div className="py-8 border-gray-700 border-t">
          <div className="mb-6 text-center">
            <h3 className="mb-2 font-bold text-gray-300 text-lg">
              Sertifikasi & Penghargaan
            </h3>
            <p className="text-gray-400 text-sm">
              Memiliki sertifikasi resmi dan penghargaan dari berbagai institusi
            </p>
          </div>

          <div className="gap-6 grid grid-cols-2 md:grid-cols-4 text-center">
            <div className="group">
              <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-2 rounded-xl w-16 h-16 group-hover:scale-105 transition-transform duration-200">
                <span className="font-bold text-white text-sm">ISO</span>
              </div>
              <div className="text-gray-300 text-sm">ISO 9001:2015</div>
            </div>
            <div className="group">
              <div className="flex justify-center items-center bg-gradient-to-r from-green-500 to-green-700 mx-auto mb-2 rounded-xl w-16 h-16 group-hover:scale-105 transition-transform duration-200">
                <span className="font-bold text-white text-sm">ENV</span>
              </div>
              <div className="text-gray-300 text-sm">ISO 14001:2015</div>
            </div>
            <div className="group">
              <div className="flex justify-center items-center bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-2 rounded-xl w-16 h-16 group-hover:scale-105 transition-transform duration-200">
                <span className="font-bold text-white text-sm">SIUJK</span>
              </div>
              <div className="text-gray-300 text-sm">Konstruksi</div>
            </div>
            <div className="group">
              <div className="flex justify-center items-center bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-2 rounded-xl w-16 h-16 group-hover:scale-105 transition-transform duration-200">
                <span className="font-bold text-white text-sm">OHSAS</span>
              </div>
              <div className="text-gray-300 text-sm">18001</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-gray-700 border-t">
          <div className="flex md:flex-row flex-col justify-between items-center gap-4">
            <div className="md:text-left text-center">
              <div className="text-gray-300 text-sm">
                © 2024 PT Vian Nusa Mandiri. All rights reserved.
              </div>
              <div className="mt-1 text-gray-400 text-xs">
                Designed with excellence for building the future
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex justify-center items-center bg-blue-600 hover:bg-blue-700 rounded-full w-10 h-10 hover:scale-110 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5 text-white transition-transform group-hover:-translate-y-0.5 duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
