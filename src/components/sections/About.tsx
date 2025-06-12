// components/sections/About.tsx - For New Company
import { Target, Users, Award, Zap } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Perkasa",
      description: "Berani mengambil tantangan dengan solusi inovatif dan pendekatan yang kuat dalam setiap proyek"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sejahtera", 
      description: "Membangun hubungan jangka panjang yang saling menguntungkan dengan klien dan mitra bisnis"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Berani",
      description: "Menghadapi setiap proyek dengan keberanian dan komitmen untuk memberikan hasil terbaik"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Mandiri",
      description: "Mengandalkan kemampuan internal yang kuat dengan dukungan teknologi dan SDM berkualitas"
    }
  ]

  return (
    <section id="tentang" className="bg-white section-padding">
      <div className="mx-auto px-6 container">
        <div className="items-center gap-16 grid lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="mb-6 text-left section-title">
              Tentang PT Vian Nusa Mandiri
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>PT Vian Nusa Mandiri</strong> adalah perusahaan konstruksi dan jasa perawatan gedung yang berdiri pada tahun 2024 
                dengan visi menjadi mitra terpercaya dalam pembangunan infrastruktur Indonesia.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Meskipun baru memulai perjalanan, kami didukung oleh tim profesional berpengalaman dan komitmen tinggi 
                untuk memberikan layanan berkualitas. Setiap proyek adalah kesempatan untuk membuktikan dedikasi kami 
                pada excellence dan kepuasan klien.
              </p>

              <div className="bg-blue-50 p-6 border-blue-600 border-l-4 rounded-r-lg">
                <h3 className="mb-2 font-bold text-blue-900">Visi Kami</h3>
                <p className="text-blue-800">
                  Menjadi perusahaan konstruksi dan building service terdepan yang dipercaya oleh korporasi dan 
                  instansi pemerintah di Indonesia.
                </p>
              </div>

              <div className="bg-green-50 p-6 border-green-600 border-l-4 rounded-r-lg">
                <h3 className="mb-2 font-bold text-green-900">Misi Kami</h3>
                <p className="text-green-800">
                  Memberikan solusi konstruksi dan perawatan gedung yang inovatif, berkualitas tinggi, 
                  dan tepat waktu dengan standar profesional internasional.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Company Values */}
          <div>
            <h3 className="mb-8 font-bold text-gray-900 text-2xl text-center">
              Nilai-Nilai Perusahaan
            </h3>
            <div className="gap-6 grid">
              {values.map((value, index) => (
                <div key={index} className="bg-white hover:shadow-lg p-6 border border-gray-200 rounded-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold text-gray-900 text-xl">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats - Realistic for New Company */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 mt-16 p-8 rounded-2xl text-white">
          <div className="mb-8 text-center">
            <h3 className="mb-4 font-bold text-2xl">Komitmen Kualitas Sejak Hari Pertama</h3>
            <p className="mx-auto max-w-2xl text-blue-100">
              Sebagai perusahaan baru, kami fokus pada membangun reputasi yang solid melalui kualitas kerja yang konsisten
            </p>
          </div>
          
          <div className="gap-8 grid md:grid-cols-4 text-center">
            <div>
              <div className="mb-2 font-bold text-3xl">2024</div>
              <div className="text-blue-200">Tahun Pendirian</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-3xl">15+</div>
              <div className="text-blue-200">Tim Profesional</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-3xl">100%</div>
              <div className="text-blue-200">Fokus pada Kualitas</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-3xl">24/7</div>
              <div className="text-blue-200">Customer Support</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us - New Company Angle */}
        <div className="mt-16 text-center">
          <h3 className="mb-8 font-bold text-gray-900 text-2xl">
            Mengapa Memilih Perusahaan Baru?
          </h3>
          <div className="gap-8 grid md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center items-center bg-green-100 mx-auto mb-4 rounded-full w-16 h-16">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="mb-2 font-bold text-gray-900">Energi & Motivasi Tinggi</h4>
              <p className="text-gray-600">
                Semangat dan dedikasi penuh untuk membuktikan kemampuan dan membangun reputasi yang solid
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center bg-blue-100 mx-auto mb-4 rounded-full w-16 h-16">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="mb-2 font-bold text-gray-900">Perhatian Personal</h4>
              <p className="text-gray-600">
                Setiap klien mendapat perhatian penuh dan layanan yang dipersonalisasi sesuai kebutuhan spesifik
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center bg-purple-100 mx-auto mb-4 rounded-full w-16 h-16">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="mb-2 font-bold text-gray-900">Harga Kompetitif</h4>
              <p className="text-gray-600">
                Penawaran harga yang sangat kompetitif tanpa mengorbankan kualitas pekerjaan dan material
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}