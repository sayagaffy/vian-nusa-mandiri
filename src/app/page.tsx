// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Main Content */}
      <div className="">
        {" "}
        {/* Account for fixed header */}
        <section id="home" className="section">
          <Hero />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="services" className="section">
          <Services />
        </section>
        <section id="portfolio" className="section">
          <Portfolio />
        </section>
        <section id="whychooseus" className="section">
          <WhyChooseUs />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </div>

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:top-4 focus:left-4 z-50 focus:absolute bg-blue-600 px-4 py-2 rounded-md text-white"
      >
        Skip to main content
      </a>
    </main>
  );
}
