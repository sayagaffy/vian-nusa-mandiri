// utils/trackEvent.ts - Custom Event Tracking with proper types

interface TrackEventParameters {
  event_category?: string;
  event_label?: string;
  value?: number;
  non_interaction?: boolean;
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(
  eventName: string,
  parameters: TrackEventParameters = {}
): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: "business_interaction",
      ...parameters,
    });
  }
}

// Business-specific tracking functions with proper typing
export const businessTracking = {
  contactFormSubmit: (): void =>
    trackEvent("contact_form_submit", {
      event_category: "lead_generation",
      event_label: "main_contact_form",
      value: 1,
    }),

  contactFormStart: (): void =>
    trackEvent("contact_form_start", {
      event_category: "form_interaction",
      event_label: "form_focus",
    }),

  phoneClick: (): void =>
    trackEvent("phone_click", {
      event_category: "lead_generation",
      event_label: "header_phone_number",
      value: 1,
    }),

  portfolioView: (projectName: string): void =>
    trackEvent("portfolio_view", {
      event_category: "content_engagement",
      event_label: projectName,
      value: 1,
    }),

  serviceInquiry: (serviceName: string): void =>
    trackEvent("service_inquiry", {
      event_category: "content_engagement",
      event_label: serviceName,
      value: 1,
    }),

  whatsappClick: (): void =>
    trackEvent("whatsapp_click", {
      event_category: "lead_generation",
      event_label: "contact_whatsapp",
      value: 1,
    }),

  emailClick: (): void =>
    trackEvent("email_click", {
      event_category: "lead_generation",
      event_label: "contact_email",
      value: 1,
    }),

  downloadBrochure: (): void =>
    trackEvent("brochure_download", {
      event_category: "content_engagement",
      event_label: "company_profile",
      value: 1,
    }),

  scrollDepth: (depth: string): void =>
    trackEvent("scroll_depth", {
      event_category: "user_engagement",
      event_label: depth,
      value: parseInt(depth.replace("%", "")),
    }),

  sectionView: (sectionName: string): void =>
    trackEvent("section_view", {
      event_category: "content_engagement",
      event_label: sectionName,
      value: 1,
    }),
};

// Hook for easy tracking in components
import { useCallback } from "react";

export function useBusinessTracking() {
  const trackContactFormStart = useCallback(() => {
    businessTracking.contactFormStart();
  }, []);

  const trackContactFormSubmit = useCallback(() => {
    businessTracking.contactFormSubmit();
  }, []);

  const trackPhoneClick = useCallback(() => {
    businessTracking.phoneClick();
  }, []);

  const trackWhatsAppClick = useCallback(() => {
    businessTracking.whatsappClick();
  }, []);

  const trackEmailClick = useCallback(() => {
    businessTracking.emailClick();
  }, []);

  const trackPortfolioView = useCallback((projectName: string) => {
    businessTracking.portfolioView(projectName);
  }, []);

  const trackServiceInquiry = useCallback((serviceName: string) => {
    businessTracking.serviceInquiry(serviceName);
  }, []);

  return {
    trackContactFormStart,
    trackContactFormSubmit,
    trackPhoneClick,
    trackWhatsAppClick,
    trackEmailClick,
    trackPortfolioView,
    trackServiceInquiry,
  };
}