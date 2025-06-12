// src/types/global.d.ts
// Global type definitions for PT Vian Nusa Mandiri website

declare global {
  // Google Analytics gtag function
  interface Window {
    gtag: (
      command: "event" | "config" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

// Component Props Types (used throughout the app)
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

// Analytics Types (used in tracking functions)
export interface TrackEventParameters {
  event_category?: string;
  event_label?: string;
  value?: number;
  non_interaction?: boolean;
  [key: string]: string | number | boolean | undefined;
}

// Business Types (used in components)
export interface ServiceType {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  year: string;
  client?: string;
  location?: string;
}

// API Response Types (used in API routes)
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormResponse {
  success: boolean;
  submissionId?: string;
  message: string;
}

// Environment Variables Types
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly NEXT_PUBLIC_SITE_URL: string;
    readonly NEXT_PUBLIC_GA_MEASUREMENT_ID: string;
    readonly COMPANY_NAME: string;
    readonly COMPANY_PHONE: string;
    readonly COMPANY_EMAIL: string;
    readonly COMPANY_ADDRESS: string;
    readonly COMPANY_WHATSAPP: string;
    readonly SENDGRID_API_KEY?: string;
    readonly RESEND_API_KEY?: string;
    readonly WEBHOOK_URL?: string;
    readonly GOOGLE_SITE_VERIFICATION?: string;
    readonly BING_VERIFICATION?: string;
  }
}
