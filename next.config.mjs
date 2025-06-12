/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_FROM: process.env.SMTP_FROM,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  },
};

export default nextConfig;
