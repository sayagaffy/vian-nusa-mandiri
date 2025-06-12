// components/analytics/GoogleAnalytics.tsx
"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: 'PT Vian Nusa Mandiri - Kontraktor Konstruksi Jakarta',
            custom_map: {
              'custom_parameter_1': 'construction_company',
              'custom_parameter_2': 'jakarta_contractor'
            }
          });
          
          // Track business-relevant events
          gtag('event', 'page_view', {
            event_category: 'engagement',
            event_label: 'homepage_view'
          });
        `}
      </Script>
    </>
  );
}