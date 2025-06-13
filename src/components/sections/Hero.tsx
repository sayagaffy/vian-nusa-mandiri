// components/sections/Hero.tsx - Realistic for New Company
"use client";

import { ArrowRight, Shield, Clock, Award, Users } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function Hero() {
  return (
    <section className="relative flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">
      <div className="items-center gap-12 grid lg:grid-cols-2 mx-auto px-6 container">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full font-medium text-blue-800 text-sm">
            <Award className="mr-2 w-4 h-4" />
            Perusahaan Konstruksi Terpercaya 2024
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="font-bold text-gray-900 text-4xl lg:text-6xl leading-tight">
              Mitra Profesional untuk{" "}
              <span className="text-blue-600">Konstruksi &</span>{" "}
              <span className="text-blue-600">Perawatan Gedung</span>
            </h1>
            <p className="max-w-2xl text-gray-600 text-xl leading-relaxed">
              PT Vian Nusa Mandiri hadir dengan semangat baru dan komitmen
              tinggi untuk memberikan solusi konstruksi dan building maintenance
              berkualitas internasional.
            </p>
          </div>

          {/* Trust Badges - Realistic */}
          <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
            <div className="bg-white shadow-sm p-4 border border-gray-100 rounded-lg text-center">
              <div className="mb-1 font-bold text-blue-600 text-2xl">2024</div>
              <div className="text-gray-600 text-sm">Berdiri</div>
            </div>
            <div className="bg-white shadow-sm p-4 border border-gray-100 rounded-lg text-center">
              <div className="mb-1 font-bold text-blue-600 text-2xl">15+</div>
              <div className="text-gray-600 text-sm">Tim Ahli</div>
            </div>
            <div className="bg-white shadow-sm p-4 border border-gray-100 rounded-lg text-center">
              <div className="mb-1 font-bold text-blue-600 text-2xl">100%</div>
              <div className="text-gray-600 text-sm">Komitmen</div>
            </div>
            <div className="bg-white shadow-sm p-4 border border-gray-100 rounded-lg text-center">
              <div className="mb-1 font-bold text-blue-600 text-2xl">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>

          {/* Value Propositions */}
          <div className="gap-6 grid md:grid-cols-2">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Legalitas Lengkap
                </h3>
                <p className="text-gray-600 text-sm">
                  SIUP, NIB, dan dokumen legal terkini
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Tepat Waktu</h3>
                <p className="text-gray-600 text-sm">
                  Komitmen timeline yang disepakati
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Tim Berpengalaman
                </h3>
                <p className="text-gray-600 text-sm">
                  Profesional dengan track record solid
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Award className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Harga Kompetitif
                </h3>
                <p className="text-gray-600 text-sm">
                  Kualitas premium dengan budget efisien
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex sm:flex-row flex-col gap-4">
            <button
              onClick={() =>
                window.open("http://wa.me/6281312800025", "_blank")
              }
              className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 shadow-lg px-8 py-4 rounded-lg font-semibold text-white transition-colors"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => {
                const servicesElement = document.querySelector("#services");
                servicesElement?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:bg-blue-600 px-8 py-4 border-2 border-blue-600 rounded-lg font-semibold text-blue-600 hover:text-white transition-colors"
            >
              Lihat Layanan Kami
            </button>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center space-x-4 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex justify-center items-center bg-blue-100 border-2 border-white rounded-full w-10 h-10"
                >
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
              ))}
            </div>
            <div>
              <div className="font-medium text-gray-900 text-sm">
                Dipercaya Klien Korporasi
              </div>
              <div className="text-gray-600 text-xs">
                Startup hingga Enterprise
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative">
          {/* Main Visual Card */}
          <div className="z-10 relative bg-white shadow-2xl p-8 rounded-2xl">
            <div className="mb-6 rounded-lg aspect-video overflow-hidden">
              <OptimizedImage
                src="/images/IMG-20250612-WA0013.jpg"
                alt="Proyek Unggulan"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Stats */}
            <div className="gap-4 grid grid-cols-3 text-center">
              <div>
                <div className="font-bold text-gray-900 text-2xl">4+</div>
                <div className="text-gray-600 text-sm">Proyek Aktif</div>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-2xl">8+</div>
                <div className="text-gray-600 text-sm">Klien Puas</div>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-2xl">100%</div>
                <div className="text-gray-600 text-sm">On Time</div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="-top-6 -right-6 z-20 absolute bg-green-500 shadow-lg p-4 rounded-xl text-white">
            <div className="font-bold text-sm">Kepuasan Klien</div>
            <div className="font-bold text-2xl">100%</div>
          </div>

          <div className="-bottom-6 -left-6 z-20 absolute bg-orange-500 shadow-lg p-4 rounded-xl text-white">
            <div className="font-bold text-sm">Fast Response Time</div>
          </div>

          {/* Background Decoration */}
          <div className="-z-10 absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl rotate-6 scale-105 transform"></div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="bottom-0 left-0 absolute w-full">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-24">
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,85.3L1200,85.3L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
