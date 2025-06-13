"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
} from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ScrollButton } from "@/components/ui/ScrollButton";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Pesan berhasil dikirim!");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 21 XXXX-XXXX",
      subValue: "+62 812-XXXX-XXXX (WA)",
      color: "blue",
      action: "Hubungi Sekarang",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@viannusamandiri.com",
      subValue: "admin@viannusamandiri.com",
      color: "green",
      action: "Kirim Email",
    },
    {
      icon: MapPin,
      label: "Alamat Kantor",
      value: "Jl. Contoh Alamat No. 123",
      subValue: "Jakarta Selatan 12345",
      color: "purple",
      action: "Lihat Lokasi",
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "Senin - Jumat: 08:00 - 17:00",
      subValue: "Sabtu: 08:00 - 12:00 WIB",
      color: "orange",
      action: "Jadwalkan Kunjungan",
    },
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      description: "Chat langsung dengan tim kami",
      action: "Chat WhatsApp",
      color: "green",
      gradient: "from-green-500 to-green-600",
      link: "http://wa.me/6281312800025",
    },
    {
      icon: Phone,
      title: "Konsultasi Gratis",
      description: "Diskusi kebutuhan proyek Anda",
      action: "Telepon Sekarang",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      link: "http://wa.me/6281312800025",
    },
    {
      icon: Send,
      title: "Request Quotation",
      description: "Dapatkan penawaran harga",
      action: "Kirim Permintaan",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      link: "#contact",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="mx-auto px-4 container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 mb-4 px-4 py-2 rounded-full font-medium text-blue-700 text-sm">
            <MessageCircle className="w-4 h-4" />
            Hubungi Kami
          </div>
          <h2 className="section-title">
            Mari Diskusikan{" "}
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 text-transparent">
              Proyek Anda
            </span>
          </h2>
          <p className="mt-4 section-subtitle">
            Tim profesional kami siap membantu mewujudkan kebutuhan konstruksi
            dan operasional perusahaan Anda. Hubungi kami untuk konsultasi
            gratis dan penawaran terbaik.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="gap-6 grid md:grid-cols-3 mb-16">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg hover:shadow-xl p-6 rounded-2xl transition-all hover:-translate-y-1 duration-300"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-r ${action.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <action.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-2 font-bold text-gray-900 text-xl">
                {action.title}
              </h3>
              <p className="mb-4 text-gray-600">{action.description}</p>
              {action.link.startsWith("http") ? (
                <WhatsAppButton
                  link={action.link}
                  className={`w-full bg-gradient-to-r ${action.gradient} text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-xl`}
                >
                  {action.action}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </WhatsAppButton>
              ) : (
                <ScrollButton
                  targetId={action.link.replace("#", "")}
                  className={`w-full bg-gradient-to-r ${action.gradient} text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-xl`}
                >
                  {action.action}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </ScrollButton>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information Grid */}
        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg hover:shadow-xl p-6 rounded-2xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r from-${info.color}-500 to-${info.color}-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2 font-bold text-gray-900">{info.label}</h3>
              <div className="space-y-1 mb-4">
                <div className="font-medium text-gray-800 text-sm">
                  {info.value}
                </div>
                <div className="text-gray-600 text-sm">{info.subValue}</div>
              </div>
              <button
                className={`text-${info.color}-600 hover:text-${info.color}-800 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all`}
              >
                {info.action}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="bg-white shadow-xl p-8 lg:p-12 rounded-2xl">
          <div className="gap-12 grid lg:grid-cols-2">
            {/* Form */}
            <div>
              <h3 className="mb-6 font-bold text-gray-900 text-2xl">
                Kirim Pesan Kepada Kami
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="gap-4 grid md:grid-cols-2">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700 text-sm">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-xl focus:ring-2 focus:ring-blue-500 w-full transition-all"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700 text-sm">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-xl focus:ring-2 focus:ring-blue-500 w-full transition-all"
                      placeholder="Nama perusahaan"
                    />
                  </div>
                </div>

                <div className="gap-4 grid md:grid-cols-2">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-xl focus:ring-2 focus:ring-blue-500 w-full transition-all"
                      placeholder="email@perusahaan.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700 text-sm">
                      Telepon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-xl focus:ring-2 focus:ring-blue-500 w-full transition-all"
                      placeholder="+62 XXX-XXXX-XXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700 text-sm">
                    Jenis Layanan
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-xl focus:ring-2 focus:ring-blue-500 w-full transition-all"
                    required
                  >
                    <option value="">Pilih layanan yang dibutuhkan</option>
                    <option value="konstruksi">Jasa Konstruksi</option>
                    <option value="maintenance">Perawatan Gedung</option>
                    <option value="supply">Pengadaan Barang</option>
                    <option value="kombinasi">Kombinasi Layanan</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700 text-sm">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-xl focus:ring-2 focus:ring-blue-500 w-full transition-all resize-none"
                    placeholder="Jelaskan kebutuhan proyek atau pertanyaan Anda..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="group w-full btn-primary">
                  Kirim Pesan
                  <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 font-bold text-gray-900 text-2xl">
                  Informasi Kontak
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-10 h-10">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Alamat Kantor
                      </div>
                      <div className="text-gray-600">
                        Jl. Contoh Alamat No. 123
                        <br />
                        Jakarta Selatan 12345
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex flex-shrink-0 justify-center items-center bg-green-100 rounded-full w-10 h-10">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Telepon & WhatsApp
                      </div>
                      <div className="text-gray-600">
                        +62 21 XXXX-XXXX
                        <br />
                        +62 812-XXXX-XXXX
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-10 h-10">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">
                        info@viannusamandiri.com
                        <br />
                        admin@viannusamandiri.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="flex justify-center items-center bg-gray-100 rounded-xl h-64">
                <div className="space-y-2 text-center">
                  <MapPin className="mx-auto w-12 h-12 text-gray-400" />
                  <div className="font-medium text-gray-600">
                    Peta Lokasi Kantor
                  </div>
                  <div className="text-gray-500 text-sm">
                    Google Maps Integration
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 border border-red-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex justify-center items-center bg-red-500 rounded-full w-8 h-8">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900">Emergency 24/7</h4>
                </div>
                <p className="mb-3 text-gray-700 text-sm">
                  Untuk emergency maintenance dan kebutuhan mendesak
                </p>
                <div className="font-bold text-red-600 text-lg">
                  +62 811-XXXX-XXXX
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 font-bold text-gray-900 text-2xl">
              Siap Memulai Proyek Bersama Kami?
            </h3>
            <p className="mb-6 text-gray-600">
              Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan
              konstruksi dan operasional perusahaan Anda.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <WhatsAppButton className="btn-primary">
                Konsultasi Sekarang
              </WhatsAppButton>
              <ScrollButton className="btn-secondary">
                Kirim Permintaan
              </ScrollButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
