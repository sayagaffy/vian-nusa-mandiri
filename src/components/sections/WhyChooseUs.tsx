// components/sections/WhyChooseUs.tsx - Much Better Design
"use client";

import {
  Shield,
  Clock,
  Users,
  Zap,
  Award,
  HeartHandshake,
  CheckCircle,
  FileText,
} from "lucide-react";

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tim Profesional Berpengalaman",
      description:
        "Didukung oleh tim ahli dengan pengalaman bertahun-tahun di industri konstruksi dan building maintenance",
      highlight: "15+ Profesional",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Komitmen Kualitas Tinggi",
      description:
        "Setiap proyek dikerjakan dengan standar kualitas tertinggi dan pengawasan ketat di setiap tahapan",
      highlight: "Quality First",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Responsif & Tepat Waktu",
      description:
        "Respon cepat 24 jam dan komitmen menyelesaikan proyek sesuai timeline yang disepakati",
      highlight: "24/7 Support",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Layanan Personal",
      description:
        "Setiap klien mendapat perhatian khusus dengan project manager dedicated untuk setiap proyek",
      highlight: "Dedicated PM",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Harga Transparan",
      description:
        "Tidak ada biaya tersembunyi dengan penawaran harga yang kompetitif dan transparan",
      highlight: "No Hidden Cost",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Garansi Pekerjaan",
      description:
        "Memberikan garansi pekerjaan dan layanan purna jual untuk memastikan kepuasan jangka panjang",
      highlight: "1 Year Warranty",
    },
  ];

  const legalDocs = [
    { name: "SIUP", status: "active", color: "green" },
    { name: "NIB", status: "active", color: "green" },
    { name: "NPWP", status: "active", color: "green" },
    { name: "Akta Pendirian", status: "active", color: "green" },
  ];

  const certifications = [
    { name: "LPJK", status: "process", timeline: "Q2 2024" },
    { name: "ISO 9001", status: "process", timeline: "Q3 2024" },
    { name: "SMK3", status: "process", timeline: "Q3 2024" },
  ];

  return (
    <section
      id="keunggulan"
      className="bg-gradient-to-br from-gray-50 to-white section-padding"
    >
      <div className="mx-auto px-6 container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="section-title">
            Mengapa Memilih PT Vian Nusa Mandiri?
          </h2>
          <p className="mx-auto max-w-3xl section-subtitle">
            Komitmen profesionalisme dan kualitas tinggi dalam setiap proyek
            yang kami tangani
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-white shadow-sm hover:shadow-xl p-8 border border-gray-100 rounded-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-blue-50 group-hover:bg-blue-600 p-4 rounded-xl text-blue-600 group-hover:text-white transition-colors">
                  {advantage.icon}
                </div>
                <span className="bg-blue-100 px-3 py-1 rounded-full font-semibold text-blue-800 text-xs">
                  {advantage.highlight}
                </span>
              </div>
              <h3 className="mb-4 font-bold text-gray-900 group-hover:text-blue-600 text-xl transition-colors">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Legal & Certification Section - Better Design */}
        <div className="gap-8 grid lg:grid-cols-2 mb-16">
          {/* Legal Documents */}
          <div className="bg-white shadow-sm p-8 border border-gray-100 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 mr-4 p-3 rounded-lg">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl">
                  Legalitas Perusahaan
                </h3>
                <p className="text-gray-600">
                  Dokumen legal lengkap dan terkini
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {legalDocs.map((doc, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 w-5 h-5 text-green-500" />
                    <span className="font-medium text-gray-900">
                      {doc.name}
                    </span>
                  </div>
                  <span className="bg-green-100 px-3 py-1 rounded-full font-medium text-green-800 text-sm">
                    Aktif
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white shadow-sm p-8 border border-gray-100 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 mr-4 p-3 rounded-lg">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl">
                  Sertifikasi Industri
                </h3>
                <p className="text-gray-600">
                  Proses sertifikasi berkelanjutan
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex items-center">
                    <Clock className="mr-3 w-5 h-5 text-orange-500" />
                    <div>
                      <span className="block font-medium text-gray-900">
                        {cert.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        Target: {cert.timeline}
                      </span>
                    </div>
                  </div>
                  <span className="bg-orange-100 px-3 py-1 rounded-full font-medium text-orange-800 text-sm">
                    Proses
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 mt-6 p-4 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Update:</strong> Semua sertifikasi dalam tahap
                penyelesaian untuk memastikan compliance penuh dengan standar
                industri konstruksi Indonesia.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 mb-16 p-8 rounded-2xl text-white">
          <h3 className="mb-12 font-bold text-2xl text-center">
            Proses Kerja Profesional Kami
          </h3>

          <div className="gap-8 grid md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Konsultasi Gratis",
                description: "Survey lokasi dan analisis kebutuhan tanpa biaya",
              },
              {
                step: "2",
                title: "Proposal Detail",
                description: "RAB lengkap dengan timeline dan spesifikasi",
              },
              {
                step: "3",
                title: "Eksekusi Profesional",
                description: "Pelaksanaan dengan monitoring ketat",
              },
              {
                step: "4",
                title: "Serah Terima",
                description: "Dokumentasi lengkap dengan garansi resmi",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center items-center bg-white shadow-lg mx-auto mb-4 rounded-full w-16 h-16 font-bold text-blue-600 text-xl">
                  {process.step}
                </div>
                <h4 className="mb-3 font-bold text-lg">{process.title}</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white shadow-sm p-12 border border-gray-100 rounded-2xl text-center">
          <h3 className="mb-4 font-bold text-gray-900 text-3xl">
            Siap Memulai Proyek Anda?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600 text-lg">
            Konsultasi gratis untuk memahami kebutuhan spesifik proyek Anda. Tim
            profesional kami siap memberikan solusi terbaik.
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 shadow-lg px-8 py-4 rounded-lg font-semibold text-white transition-colors">
              Konsultasi Gratis Sekarang
            </button>
            <button className="hover:bg-blue-600 px-8 py-4 border-2 border-blue-600 rounded-lg font-semibold text-blue-600 hover:text-white transition-colors">
              Lihat Portfolio Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
