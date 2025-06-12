// components/analytics/WebVitals.tsx
"use client";

import { useReportWebVitals } from "next/web-vitals";

// Define gtag types for better TypeScript support
declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export default function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("Web Vitals:", metric);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === "production") {
      // Google Analytics 4
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", metric.name, {
          event_category: "Web Vitals",
          event_label: metric.id,
          value: Math.round(
            metric.name === "CLS" ? metric.value * 1000 : metric.value
          ),
          non_interaction: true,
        });
      }

      // Optional: Send to your own analytics endpoint
      /*
      fetch('/api/analytics/web-vitals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metric),
      }).catch(console.error)
      */
    }
  });

  return null;
}
