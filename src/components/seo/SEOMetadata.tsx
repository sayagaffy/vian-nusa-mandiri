// components/seo/SEOMetadata.tsx
import Script from "next/script";

export default function SEOMetadata() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Vian Nusa Mandiri",
    description:
      "Perusahaan konstruksi dan jasa perawatan gedung terpercaya di Indonesia. Menyediakan layanan konstruksi, perawatan gedung, dan pengadaan barang dengan standar profesional.",
    url: "https://viannusamandiri.id",
    logo: "https://viannusamandiri.id/logo.png",
    foundingDate: "2020",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-21-XXXX-XXXX",
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jalan Raya Jakarta",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      postalCode: "12345",
      addressCountry: "ID",
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Jakarta",
      },
      {
        "@type": "Place",
        name: "Indonesia",
      },
    ],
    serviceArea: {
      "@type": "Place",
      name: "Indonesia",
    },
    knowsAbout: [
      "Konstruksi Gedung",
      "Perawatan Gedung",
      "Pengadaan Barang",
      "Jasa Kontraktor",
      "Building Maintenance",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PT Vian Nusa Mandiri",
    description:
      "Kontraktor dan jasa perawatan gedung profesional di Jakarta. Melayani konstruksi, maintenance, dan supply barang untuk korporasi dan instansi pemerintah.",
    image: "https://viannusamandiri.id/hero-image.jpg",
    telephone: "+62-21-XXXX-XXXX",
    email: "info@viannusamandiri.com",
    url: "https://viannusamandiri.id",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jalan Raya Jakarta",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      postalCode: "12345",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-6.2088",
      longitude: "106.8456",
    },
    openingHours: ["Mo-Fr 08:00-17:00", "Sa 08:00-12:00"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "PT Megacorp Indonesia",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Pelayanan konstruksi yang sangat profesional. Tim PT Vian Nusa Mandiri menyelesaikan proyek kantor kami tepat waktu dengan kualitas excellent.",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jasa Konstruksi dan Perawatan Gedung",
    description:
      "Layanan lengkap konstruksi, perawatan gedung, dan pengadaan barang untuk kebutuhan korporasi dan pemerintah.",
    provider: {
      "@type": "Organization",
      name: "PT Vian Nusa Mandiri",
    },
    serviceType: [
      "Konstruksi Gedung",
      "Renovasi Bangunan",
      "Perawatan AC",
      "Cleaning Service",
      "Pengadaan Barang",
      "Facility Management",
    ],
    areaServed: {
      "@type": "Place",
      name: "Indonesia",
    },
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}
