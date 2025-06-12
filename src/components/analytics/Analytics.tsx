// components/analytics/Analytics.tsx - Main Analytics Component
"use client";

import { GoogleAnalytics } from "./GoogleAnalytics";
import WebVitals from "./WebVitals";

export default function Analytics() {
  // Get GA4 Measurement ID from environment variables
  const GA_MEASUREMENT_ID =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      )}
      <WebVitals />
    </>
  );
}