// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SEOMetadata from '@/components/seo/SEOMetadata'
import Analytics from '@/components/analytics/Analytics'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: {
    default: 'PT Vian Nusa Mandiri - Kontraktor Konstruksi & Perawatan Gedung Profesional Jakarta',
    template: '%s | PT Vian Nusa Mandiri'
  },
  description: 'PT Vian Nusa Mandiri adalah perusahaan konstruksi dan jasa perawatan gedung terpercaya di Jakarta. Melayani konstruksi, building maintenance, dan pengadaan barang untuk korporasi dan instansi pemerintah dengan standar profesional.',
  keywords: [
    'kontraktor Jakarta',
    'jasa konstruksi Jakarta', 
    'perawatan gedung Jakarta',
    'building maintenance Jakarta',
    'kontraktor bangunan',
    'jasa renovasi kantor',
    'konstruksi gedung kantor',
    'perawatan AC gedung',
    'cleaning service korporat',
    'pengadaan barang kantor',
    'facility management',
    'maintenance gedung',
    'kontraktor pemerintah',
    'kontraktor korporasi',
    'jasa konstruksi profesional',
    'kontraktor bersertifikat',
    'kontraktor DKI Jakarta',
    'jasa konstruksi Indonesia',
    'building contractor Jakarta'
  ],
  authors: [{ name: 'PT Vian Nusa Mandiri' }],
  creator: 'PT Vian Nusa Mandiri',
  publisher: 'PT Vian Nusa Mandiri',
  category: 'Construction & Building Services',
  
  openGraph: {
    title: 'PT Vian Nusa Mandiri - Kontraktor Konstruksi & Perawatan Gedung Profesional',
    description: 'Perusahaan konstruksi dan jasa perawatan gedung terpercaya. Melayani korporasi dan instansi pemerintah dengan standar profesional tinggi.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://viannusamandiri.com',
    siteName: 'PT Vian Nusa Mandiri',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PT Vian Nusa Mandiri - Konstruksi & Perawatan Gedung Profesional'
      }
    ]
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'PT Vian Nusa Mandiri - Kontraktor Profesional Jakarta',
    description: 'Jasa konstruksi, perawatan gedung, dan pengadaan barang untuk korporasi dan pemerintah.',
    images: ['/twitter-card.jpg'],
    creator: '@viannusamandiri'
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    ...(process.env.BING_VERIFICATION ? {
      other: {
        'msvalidate.01': process.env.BING_VERIFICATION
      }
    } : {})
  },
  
  other: {
    'business:contact_data:street_address': process.env.COMPANY_ADDRESS || 'Jalan Raya Jakarta',
    'business:contact_data:locality': 'Jakarta',
    'business:contact_data:region': 'DKI Jakarta', 
    'business:contact_data:postal_code': '12345',
    'business:contact_data:country_name': 'Indonesia',
    'business:contact_data:phone_number': process.env.COMPANY_PHONE || '+62-21-XXXX-XXXX',
    'business:contact_data:website': process.env.NEXT_PUBLIC_SITE_URL || 'https://viannusamandiri.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.2088;106.8456" />
        <meta name="ICBM" content="-6.2088, 106.8456" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vian Nusa Mandiri" />
        
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-navbutton-color" content="#3b82f6" />
        
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://viannusamandiri.com'} />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        <SEOMetadata />
        <Analytics />
      </head>
      <body className={`${inter.className} antialiased`}>
        <noscript>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            background: '#f59e0b',
            color: 'white',
            padding: '10px',
            textAlign: 'center',
            zIndex: 9999
          }}>
            Untuk pengalaman terbaik, mohon aktifkan JavaScript di browser Anda.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  )
}