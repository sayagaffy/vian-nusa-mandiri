import { Metadata } from "next";
import { Building2, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import OptimizedImage from "@/components/ui/OptimizedImage";

const portfolioItems = [
  {
    id: 1,
    title: "Renovasi Kantor Modern",
    category: "Renovasi Interior",
    image: "/images/portfolio/office-renovation.jpg",
    description:
      "Renovasi lengkap ruang kantor dengan konsep modern dan ergonomis",
    status: "Selesai",
    year: "2024",
    fullDescription: `
      Proyek renovasi kantor ini mencakup transformasi menyeluruh ruang kerja dengan pendekatan modern dan ergonomis. 
      Kami melakukan redesain tata letak, pemilihan furniture yang fungsional, dan pengoptimalan pencahayaan untuk 
      meningkatkan produktivitas dan kenyamanan kerja.

      Lingkup pekerjaan meliputi:
      - Redesain interior dengan konsep open space
      - Instalasi sistem pencahayaan modern
      - Pengadaan furniture ergonomis
      - Optimasi tata letak ruang kerja
      - Perbaikan sistem elektrikal dan pendingin ruangan
    `,
    challenges: [
      "Meminimalkan gangguan aktivitas kantor selama renovasi",
      "Mengintegrasikan desain modern tanpa mengurangi fungsionalitas",
      "Memastikan kualitas pekerjaan sesuai standar internasional",
    ],
    results: [
      "Peningkatan produktivitas karyawan",
      "Penurunan biaya operasional",
      "Lingkungan kerja yang lebih nyaman dan inspiratif",
    ],
  },
  {
    id: 2,
    title: "Perawatan AC Gedung Perkantoran",
    category: "Building Maintenance",
    image: "/images/portfolio/ac-maintenance.jpg",
    description:
      "Program maintenance rutin sistem AC untuk gedung perkantoran 10 lantai",
    status: "Berlangsung",
    year: "2024",
    fullDescription: `
      Proyek maintenance sistem AC untuk gedung perkantoran 10 lantai merupakan layanan komprehensif 
      yang mencakup pemeliharaan, perbaikan, dan optimasi sistem pendingin untuk memastikan kinerja 
      optimal dan efisiensi energi.

      Lingkup pekerjaan meliputi:
      - Pemeriksaan berkala seluruh unit AC
      - Pembersihan dan penggantian filter
      - Kalibrasi sistem kontrol temperatur
      - Pengecekan kebocoran dan sistem refrigeran
      - Optimasi kinerja sistem pendingin
    `,
    challenges: [
      "Menjaga kontinuitas operasional gedung",
      "Meminimalkan downtime sistem AC",
      "Memastikan kualitas udara interior tetap prima",
    ],
    results: [
      "Peningkatan efisiensi energi 25%",
      "Penurunan biaya maintenance",
      "Kualitas udara dan kenyamanan optimal",
    ],
  },
  {
    id: 3,
    title: "Pengadaan Furniture Kantor",
    category: "Pengadaan Barang",
    image: "/images/portfolio/furniture-supply.jpg",
    description: "Pengadaan furniture kantor modern untuk startup technology",
    status: "Selesai",
    year: "2024",
    fullDescription: `
      Proyek pengadaan furniture kantor untuk startup teknologi ini mencakup seleksi, pengadaan, 
      dan instalasi furniture modern yang mendukung budaya kerja dinamis dan kolaboratif.

      Lingkup pekerjaan meliputi:
      - Konsultasi kebutuhan furniture
      - Seleksi vendor dan produk berkualitas
      - Pengadaan meja kerja ergonomis
      - Kursi kerja dengan desain modern
      - Furniture pendukung ruang kolaborasi
    `,
    challenges: [
      "Memenuhi kebutuhan spesifik startup teknologi",
      "Menyeimbangkan estetika dan fungsionalitas",
      "Pengiriman tepat waktu dengan kualitas terjamin",
    ],
    results: [
      "Peningkatan produktivitas karyawan",
      "Lingkungan kerja yang inspiratif",
      "Dukungan budaya kerja modern",
    ],
  },
  {
    id: 4,
    title: "Konsultasi Desain Interior",
    category: "Konsultasi",
    image: "/images/portfolio/design-consultation.jpg",
    description:
      "Konsultasi dan perencanaan desain interior untuk co-working space",
    status: "Dalam Perencanaan",
    year: "2024",
    fullDescription: `
      Proyek konsultasi desain interior untuk co-working space ini melibatkan analisis mendalam 
      kebutuhan ruang, pengembangan konsep desain, dan perencanaan implementasi yang komprehensif.

      Lingkup pekerjaan meliputi:
      - Analisis kebutuhan ruang
      - Pengembangan konsep desain
      - Pemilihan warna dan material
      - Perencanaan tata letak
      - Rekomendasi furniture dan aksesori
    `,
    challenges: [
      "Menciptakan ruang multifungsi",
      "Mengakomodasi berbagai gaya kerja",
      "Memaksimalkan fleksibilitas ruang",
    ],
    results: [
      "Desain inovatif dan fungsional",
      "Ruang yang mendukung kreativitas",
      "Solusi desain yang berkelanjutan",
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const item = portfolioItems.find((p) => p.id === parseInt(params.id));

  return {
    title: `${item?.title} - PT Vian Nusa Mandiri`,
    description: item?.description,
    openGraph: {
      title: `${item?.title} - PT Vian Nusa Mandiri`,
      description: item?.description,
      images: [{ url: item?.image || "" }],
    },
  };
}

export default function PortfolioDetail({
  params,
}: {
  params: { id: string };
}) {
  const item = portfolioItems.find((p) => p.id === parseInt(params.id));

  if (!item) {
    return <div>Proyek tidak ditemukan</div>;
  }

  return (
    <div className="bg-gray-50 py-20 min-h-screen">
      <div className="mx-auto px-6 container">
        <div className="bg-white shadow-lg mx-auto rounded-2xl max-w-4xl overflow-hidden">
          {/* Header */}
          <div className="relative">
            <div className="flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 aspect-video">
              <OptimizedImage
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                width={1200}
                height={600}
              />
            </div>

            <div className="top-6 right-6 absolute flex space-x-3">
              <span
                className={`px-4 py-2 rounded-full text-xs font-medium ${
                  item.status === "Selesai"
                    ? "bg-green-100 text-green-800"
                    : item.status === "Berlangsung"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {item.status}
              </span>
              <span className="bg-white px-4 py-2 rounded-full font-medium text-gray-800 text-xs">
                {item.year}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-12">
            <div className="mb-8">
              <h1 className="mb-4 font-bold text-gray-900 text-3xl">
                {item.title}
              </h1>
              <p className="text-gray-600 text-lg">{item.description}</p>
            </div>

            <div className="gap-8 grid md:grid-cols-2 mb-12">
              <div>
                <h2 className="mb-4 font-semibold text-gray-900 text-xl">
                  Lingkup Pekerjaan
                </h2>
                <div className="space-y-3">
                  {item.fullDescription
                    .split("\n")
                    .filter((line) => line.trim().startsWith("-"))
                    .map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">
                          {feature.replace("-", "").trim()}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 font-semibold text-gray-900 text-xl">
                  Tantangan
                </h2>
                <div className="space-y-3">
                  {item.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 font-semibold text-gray-900 text-2xl">
                Hasil
              </h2>
              <div className="gap-6 grid md:grid-cols-3">
                {item.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 p-6 rounded-lg text-center"
                  >
                    <Building2 className="mx-auto mb-4 w-12 h-12 text-blue-600" />
                    <p className="font-medium text-gray-800">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 p-8 text-center">
            <Link href="/portfolio" className="btn-primary">
              Kembali ke Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: item.id.toString(),
  }));
}
