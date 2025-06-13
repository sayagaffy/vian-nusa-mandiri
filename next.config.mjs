/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: "export",

  // Fix untuk path issues di static hosting
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // Asset prefix untuk hosting static
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",

  // Image optimization disabled untuk static export
  images: {
    unoptimized: true,
  },

  // Environment variables
  env: {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_FROM: process.env.SMTP_FROM,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  },

  // Disable server-side features untuk static
  experimental: {
    // Disable features yang tidak compatible dengan static export
  },
};

export default nextConfig;
