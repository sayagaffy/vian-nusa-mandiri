# PT Vian Nusa Mandiri - Corporate Website

![PT Vian Nusa Mandiri](https://img.shields.io/badge/Status-Active-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-blue)

## 🏗️ **About**

Professional corporate website for **PT Vian Nusa Mandiri** - a construction and building services company based in Jakarta, Indonesia. The website showcases the company's services, portfolio, and professional capabilities to corporate and government clients.

## ✨ **Features**

- 🎨 **Modern Design** - Clean, professional interface optimized for corporate clients
- 📱 **Mobile-First** - Fully responsive design for all devices
- ⚡ **High Performance** - Optimized for speed and SEO
- 🔍 **SEO Optimized** - Indonesian market targeting with proper meta tags
- 📊 **Analytics Ready** - Google Analytics 4 integration
- 📞 **Lead Generation** - Multiple contact methods and forms
- 🛡️ **Security Hardened** - Production-ready security headers

## 🚀 **Tech Stack**

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel/Netlify ready

## 📁 **Project Structure**

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with SEO
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles
│   │   └── api/
│   │       └── contact/       # Contact form API
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Homepage sections
│   │   ├── forms/             # Contact forms
│   │   ├── seo/               # SEO components
│   │   ├── analytics/         # Analytics tracking
│   │   └── ui/                # Reusable UI components
│   ├── types/                 # TypeScript definitions
│   └── utils/                 # Utility functions
├── public/                    # Static assets
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

## 🛠️ **Installation & Setup**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **1. Clone Repository**
```bash
git clone https://github.com/yourusername/pt-vian-nusa-mandiri.git
cd pt-vian-nusa-mandiri
```

### **2. Install Dependencies**
```bash
npm install
# or
yarn install
```

### **3. Environment Setup**
Create `.env.local` file:
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Company Information
COMPANY_NAME="PT Vian Nusa Mandiri"
COMPANY_PHONE="+62-21-XXXX-XXXX"
COMPANY_EMAIL="info@viannusamandiri.com"
COMPANY_ADDRESS="Jakarta, Indonesia"
COMPANY_WHATSAPP="+62812XXXXXXXX"

# Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# Email Service (Choose one)
SENDGRID_API_KEY="SG.XXXXXX"
# or
RESEND_API_KEY="re_XXXXXX"
# or
WEBHOOK_URL="https://hooks.zapier.com/hooks/catch/XXXXX"
```

### **4. Development Server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript
npm run analyze      # Analyze bundle size
```

## 🚀 **Deployment**

### **Vercel (Recommended)**
```bash
npm install -g vercel
vercel login
vercel --prod
```

### **Netlify**
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=.next
```

### **Environment Variables for Production**
Set these in your hosting platform:
- `NEXT_PUBLIC_SITE_URL`: Your domain (e.g., https://viannusamandiri.com)
- `COMPANY_*`: Real company information
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics ID
- Email service API keys

## 📊 **Performance**

- ⚡ **Page Speed**: < 2 seconds load time
- 📱 **Mobile Performance**: 90+ Lighthouse score
- 🔍 **SEO Score**: 95+ Lighthouse score
- ♿ **Accessibility**: WCAG 2.1 AA compliance

## 🎯 **SEO Features**

- **Indonesian Market Targeting**: Keywords optimized for "kontraktor Jakarta", "jasa konstruksi"
- **Structured Data**: Organization, LocalBusiness, Service schemas
- **Meta Tags**: Comprehensive meta tags for social sharing
- **Sitemap**: Auto-generated sitemap for search engines
- **Local SEO**: Jakarta-focused local search optimization

## 📞 **Contact Integration**

- **Contact Form**: Server-side validation with email delivery
- **Multiple Channels**: Phone, email, WhatsApp integration
- **Analytics Tracking**: Lead generation event tracking
- **Mobile Optimized**: Touch-friendly contact methods

## 🔧 **Customization**

### **Content Updates**
1. Update company information in `.env.local`
2. Replace placeholder images in `/public/images/`
3. Modify content in section components
4. Update contact information in contact form

### **Styling**
- Tailwind CSS classes for quick styling changes
- Custom CSS in `globals.css` for advanced styling
- Color scheme defined in Tailwind config

### **Analytics**
- Google Analytics 4 events for business tracking
- Custom event tracking for lead generation
- Performance monitoring integration

## 📝 **License**

This project is proprietary software for PT Vian Nusa Mandiri.

## 👥 **Contributing**

This is a private corporate website. For internal development only.

## 📞 **Support**

For technical support or questions:
- **Email**: developer@viannusamandiri.com
- **Phone**: +62-21-XXXX-XXXX

---

**© 2024 PT Vian Nusa Mandiri. All rights reserved.**