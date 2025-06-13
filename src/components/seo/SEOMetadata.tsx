import { Metadata } from "next";

export const baseMetadata: Metadata = {
  title: {
    default: "PT Vian Nusa Mandiri - Solusi Konstruksi & Perawatan Gedung",
    template: "%s | PT Vian Nusa Mandiri",
  },
  description:
    "PT Vian Nusa Mandiri menyediakan solusi komprehensif untuk konstruksi, perawatan gedung, dan pengadaan barang. Layanan profesional dengan komitmen kualitas tinggi.",
  keywords: [
    "konstruksi",
    "perawatan gedung",
    "facility management",
    "pengadaan barang",
    "renovasi kantor",
    "maintenance",
    "konsultasi desain",
  ],
  authors: [{ name: "PT Vian Nusa Mandiri" }],
  creator: "PT Vian Nusa Mandiri",
  publisher: "PT Vian Nusa Mandiri",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://viannusamandiri.com",
    siteName: "PT Vian Nusa Mandiri",
    title: "PT Vian Nusa Mandiri - Solusi Konstruksi & Perawatan Gedung",
    description:
      "PT Vian Nusa Mandiri menyediakan solusi komprehensif untuk konstruksi, perawatan gedung, dan pengadaan barang. Layanan profesional dengan komitmen kualitas tinggi.",
    images: [
      {
        url: "/images/IMG-20250612-WA0013.jpg",
        width: 1200,
        height: 630,
        alt: "PT Vian Nusa Mandiri - Solusi Konstruksi & Perawatan Gedung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Vian Nusa Mandiri - Solusi Konstruksi & Perawatan Gedung",
    description:
      "PT Vian Nusa Mandiri menyediakan solusi komprehensif untuk konstruksi, perawatan gedung, dan pengadaan barang. Layanan profesional dengan komitmen kualitas tinggi.",
    images: ["/images/IMG-20250612-WA0013.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
  alternates: {
    canonical: "https://viannusamandiri.com",
  },
};

export function generatePageMetadata(
  overrides: Partial<Metadata> = {}
): Metadata {
  return {
    ...baseMetadata,
    ...overrides,
    openGraph: {
      ...baseMetadata.openGraph,
      ...overrides.openGraph,
    },
    twitter: {
      ...baseMetadata.twitter,
      ...overrides.twitter,
    },
  };
}

// Default export for layout
export default function SEOMetadata() {
  return null;
}
