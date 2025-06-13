import { Metadata } from "next";
import Link from "next/link";
import {
  Building,
  Wrench,
  Package,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Clock,
  Briefcase,
} from "lucide-react";

const services = [
  {
    id: 1,
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
    fullDescription: `
      PT Vian Nusa Mandiri menyediakan layanan konstruksi komprehensif yang mencakup seluruh tahapan pembangunan. 
      Dengan tim profesional berpengalaman, kami mampu menangani proyek konstruksi dari skala kecil hingga besar 
      dengan standar kualitas internasional.

      Lingkup layanan konstruksi kami meliputi:
      - Konsultasi dan perencanaan awal
      - Desain arsitektur dan teknik
      - Perizinan dan dokumen legal
      - Konstruksi struktural
      - Finishing dan interior
      - Manajemen proyek profesional
    `,
    challenges: [
      "Kompleksitas desain dan teknis",
      "Kepatuhan standar bangunan",
      "Manajemen waktu dan biaya",
      "Koordinasi multi-disiplin",
    ],
    benefits: [
      "Desain inovatif dan fungsional",
      "Kualitas konstruksi tinggi",
      "Efisiensi biaya dan waktu",
      "Solusi terintegrasi",
    ],
  },
  {
    id: 2,
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
    fullDescription: `
      Layanan facility management kami dirancang untuk menjaga gedung Anda tetap prima, 
      aman, dan beroperasi secara maksimal. Dengan pendekatan proaktif, kami memastikan 
      setiap aspek gedung dirawat dengan standar tertinggi.

      Ruang lingkup perawatan gedung:
      - Pemeliharaan sistem pendingin (AC & HVAC)
      - Pembersihan dan sanitasi rutin
      - Perawatan preventif infrastruktur
      - Perbaikan dan penggantian komponen
      - Manajemen keamanan dan keselamatan
      - Layanan darurat 24/7
    `,
    challenges: [
      "Meminimalkan downtime operasional",
      "Memastikan kualitas udara interior",
      "Efisiensi energi",
      "Kepatuhan standar keselamatan",
    ],
    benefits: [
      "Operasional gedung optimal",
      "Biaya perawatan lebih efisien",
      "Lingkungan kerja nyaman",
      "Perpanjangan umur infrastruktur",
    ],
  },
  {
    id: 3,
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
    fullDescription: `
      Layanan pengadaan barang kami menawarkan solusi komprehensif untuk memenuhi kebutuhan 
      material dan perlengkapan perusahaan Anda. Kami fokus pada kualitas, efisiensi, dan 
      ketersediaan tepat waktu.

      Lingkup layanan pengadaan:
      - Konsultasi kebutuhan material
      - Seleksi vendor berkualitas
      - Pengadaan material konstruksi
      - Perlengkapan kantor dan operasional
      - Manajemen inventaris
      - Jaminan kualitas produk
    `,
    challenges: [
      "Memastikan kualitas material",
      "Ketepatan waktu pengiriman",
      "Harga kompetitif",
      "Manajemen vendor",
    ],
    benefits: [
      "Material berkualitas tinggi",
      "Proses pengadaan transparan",
      "Efisiensi biaya",
      "Dukungan berkelanjutan",
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const service = services.find((s) => s.id === parseInt(params.id));

  return {
    title: `${service?.title} - PT Vian Nusa Mandiri`,
    description: service?.description,
    openGraph: {
      title: `${service?.title} - PT Vian Nusa Mandiri`,
      description: service?.description,
    },
  };
}

export default function ServiceDetail({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === parseInt(params.id));

  if (!service) {
    return <div>Layanan tidak ditemukan</div>;
  }

  return (
    <div className="bg-gray-50 py-20 min-h-screen">
      <div className="mx-auto px-6 container">
        <div className="bg-white shadow-lg mx-auto rounded-2xl max-w-4xl overflow-hidden">
          {/* Header */}
          <div
            className="bg-gradient-to-r p-12"
            style={{
              backgroundImage: `linear-gradient(to right, ${service.gradient.replace("from-", "").replace(" to-", ", ")})`,
              color: "white",
            }}
          >
            <div className="flex items-center space-x-6">
              <div className="bg-white p-4 rounded-xl">
                <service.icon
                  className="w-12 h-12"
                  style={{
                    color:
                      service.color === "blue"
                        ? "#3B82F6"
                        : service.color === "green"
                          ? "#10B981"
                          : "#8B5CF6",
                  }}
                />
              </div>
              <div>
                <div className="opacity-80 mb-2 font-medium text-sm">
                  {service.subtitle}
                </div>
                <h1 className="font-bold text-3xl">{service.title}</h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-12">
            <div className="mb-8">
              <p className="text-gray-600 text-xl leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="gap-8 grid md:grid-cols-2 mb-12">
              <div>
                <h2 className="flex items-center mb-4 font-semibold text-gray-900 text-xl">
                  <CheckCircle className="mr-3 w-6 h-6 text-blue-600" />
                  Lingkup Layanan
                </h2>
                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 bg-${service.color}-500 rounded-full`}
                      ></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="flex items-center mb-4 font-semibold text-gray-900 text-xl">
                  <Briefcase className="mr-3 w-6 h-6 text-blue-600" />
                  Tantangan Utama
                </h2>
                <div className="space-y-3">
                  {service.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="flex items-center mb-6 font-semibold text-gray-900 text-2xl">
                <ShieldCheck className="mr-3 w-8 h-8 text-blue-600" />
                Manfaat Layanan
              </h2>
              <div className="gap-6 grid md:grid-cols-2">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`bg-${service.color}-50 p-6 rounded-lg text-center`}
                  >
                    <div
                      className={`mx-auto mb-4 w-12 h-12 bg-${service.color}-100 rounded-full flex items-center justify-center`}
                    >
                      <ArrowRight
                        className={`w-6 h-6 text-${service.color}-600`}
                      />
                    </div>
                    <p className={`text-${service.color}-800 font-medium`}>
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 p-8 text-center">
            <Link href="/services" className="btn-primary">
              Kembali ke Layanan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id.toString(),
  }));
}
