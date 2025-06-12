import {
  Building,
  Wrench,
  Package,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Building,
      title: "Jasa Konstruksi",
      subtitle: "Kontraktor Profesional",
      description:
        "Layanan konstruksi lengkap dari perencanaan hingga finishing untuk gedung perkantoran, fasilitas komersial, dan bangunan institusi.",
      features: [
        "Konstruksi gedung baru",
        "Renovasi & ekspansi",
        "Sistem mekanikal & elektrikal",
        "Interior & eksterior",
        "Project management profesional",
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: Wrench,
      title: "Perawatan Gedung",
      subtitle: "Facility Management",
      description:
        "Layanan perawatan dan pemeliharaan gedung komprehensif untuk memastikan operasional yang optimal dan efisien sepanjang waktu.",
      features: [
        "Perawatan AC & HVAC",
        "Cleaning service profesional",
        "Maintenance preventif",
        "Perbaikan & troubleshooting",
        "Layanan 24/7 emergency",
      ],
      color: "green",
      gradient: "from-green-500 to-green-700",
    },
    {
      icon: Package,
      title: "Pengadaan Barang",
      subtitle: "Supply & Procurement",
      description:
        "Pengadaan peralatan, material konstruksi, dan supplies operasional berkualitas tinggi dengan harga kompetitif dan delivery tepat waktu.",
      features: [
        "Material konstruksi",
        "Peralatan kantor",
        "Supplies operasional",
        "Vendor management",
        "Quality assurance",
      ],
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto px-4 container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 mb-4 px-4 py-2 rounded-full font-medium text-blue-700 text-sm">
            <CheckCircle className="w-4 h-4" />
            Layanan Terintegrasi
          </div>
          <h2 className="section-title">
            Solusi Lengkap untuk Kebutuhan{" "}
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 text-transparent">
              Konstruksi & Operasional
            </span>
          </h2>
          <p className="mt-4 section-subtitle">
            Dengan pengalaman lebih dari 15 tahun, PT Vian Nusa Mandiri
            menyediakan layanan one-stop solution yang dapat diandalkan untuk
            semua kebutuhan konstruksi dan operasional perusahaan Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="gap-8 grid md:grid-cols-3 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white hover:shadow-2xl p-8 border border-gray-200 hover:border-transparent rounded-2xl transition-all hover:-translate-y-2 duration-300"
            >
              {/* Service Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Header */}
              <div className="mb-6">
                <div
                  className={`text-sm font-medium text-${service.color}-600 mb-2`}
                >
                  {service.subtitle}
                </div>
                <h3 className="mb-3 font-bold text-gray-900 text-2xl">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 bg-${service.color}-500 rounded-full`}
                    ></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transition-all duration-300 group-hover:shadow-xl flex items-center justify-center gap-2`}
              >
                Pelajari Lebih Lanjut
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 font-bold text-gray-900 text-2xl">
              Butuh Kombinasi Layanan?
            </h3>
            <p className="mb-6 text-gray-700">
              Kami menyediakan paket layanan terintegrasi yang dapat disesuaikan
              dengan kebutuhan spesifik perusahaan Anda. Konsultasikan kebutuhan
              Anda dengan tim ahli kami.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <button className="btn-primary">Konsultasi Gratis</button>
              <button className="btn-secondary">Request Quotation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
