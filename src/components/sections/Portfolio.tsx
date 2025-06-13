// components/sections/Portfolio.tsx - For New Company
"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Users, Award, Clock } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";

const portfolioItems = [
  {
    id: 1,
    title: "Renovasi Kantor Modern",
    category: "Renovasi Interior",
    image: "/images/IMG-20250612-WA0013.jpg",
    description:
      "Renovasi lengkap ruang kantor dengan konsep modern dan ergonomis",
    status: "Selesai",
    year: "2024",
  },
  {
    id: 2,
    title: "Perawatan AC Gedung Perkantoran",
    category: "Building Maintenance",
    image: "/images/IMG-20250612-WA0015.jpg",
    description:
      "Program maintenance rutin sistem AC untuk gedung perkantoran 10 lantai",
    status: "Berlangsung",
    year: "2024",
  },
  {
    id: 3,
    title: "Pengadaan Furniture Kantor",
    category: "Pengadaan Barang",
    image: "/images/IMG-20250612-WA0016.jpg",
    description: "Pengadaan furniture kantor modern untuk startup technology",
    status: "Selesai",
    year: "2024",
  },
  {
    id: 4,
    title: "Konsultasi Desain Interior",
    category: "Konsultasi",
    image: "/images/IMG-20250612-WA0018.jpg",
    description:
      "Konsultasi dan perencanaan desain interior untuk co-working space",
    status: "Dalam Perencanaan",
    year: "2024",
  },
];

const categories = [
  "Semua",
  "Renovasi Interior",
  "Building Maintenance",
  "Pengadaan Barang",
  "Konsultasi",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredItems =
    activeCategory === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Selesai":
        return "bg-green-100 text-green-800";
      case "Berlangsung":
        return "bg-blue-100 text-blue-800";
      case "Dalam Perencanaan":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="portfolio" className="bg-gray-50 section-padding">
      <div className="mx-auto px-6 container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="section-title">Portfolio & Proyek Terkini</h2>
          <p className="mx-auto max-w-3xl section-subtitle">
            Meskipun baru memulai, kami telah dipercaya menangani berbagai
            proyek dengan komitmen kualitas tinggi
          </p>
        </div>

        {/* Stats Cards - Realistic for New Company */}
        <div className="gap-6 grid md:grid-cols-4 mb-12">
          <div className="bg-white shadow-sm p-6 rounded-lg text-center">
            <Building2 className="mx-auto mb-3 w-8 h-8 text-blue-600" />
            <div className="mb-1 font-bold text-gray-900 text-2xl">4+</div>
            <div className="text-gray-600 text-sm">Proyek Aktif</div>
          </div>
          <div className="bg-white shadow-sm p-6 rounded-lg text-center">
            <Users className="mx-auto mb-3 w-8 h-8 text-blue-600" />
            <div className="mb-1 font-bold text-gray-900 text-2xl">8+</div>
            <div className="text-gray-600 text-sm">Klien Terpuaskan</div>
          </div>
          <div className="bg-white shadow-sm p-6 rounded-lg text-center">
            <Award className="mx-auto mb-3 w-8 h-8 text-blue-600" />
            <div className="mb-1 font-bold text-gray-900 text-2xl">100%</div>
            <div className="text-gray-600 text-sm">Tingkat Kepuasan</div>
          </div>
          <div className="bg-white shadow-sm p-6 rounded-lg text-center">
            <Clock className="mx-auto mb-3 w-8 h-8 text-blue-600" />
            <div className="mb-1 font-bold text-gray-900 text-2xl">2024</div>
            <div className="text-gray-600 text-sm">Tahun Berdiri</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-2">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-medium text-blue-600 text-sm">
                    {item.category}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="mb-3 font-bold text-gray-900 text-xl">
                  {item.title}
                </h3>
                <p className="mb-4 text-gray-600">{item.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{item.year}</span>
                  <Link
                    href={`/portfolio/${item.id}`}
                    className="font-medium text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Detail Proyek →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white shadow-sm mx-auto p-8 rounded-lg max-w-2xl">
            <h3 className="mb-4 font-bold text-gray-900 text-2xl">
              Bergabunglah dengan Klien yang Puas
            </h3>
            <p className="mb-6 text-gray-600">
              Meskipun baru memulai, komitmen kami pada kualitas dan kepuasan
              klien tidak pernah berkompromi. Setiap proyek adalah kesempatan
              untuk membuktikan dedikasi kami.
            </p>
            <button className="btn-primary">Konsultasi Proyek Anda</button>
          </div>
        </div>
      </div>
    </section>
  );
}
