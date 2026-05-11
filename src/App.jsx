import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoaderScreen from './components/layout/LoaderScreen';
import ScrollProgress from './components/layout/ScrollProgress';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ProcessSection from './components/sections/ProcessSection';
import TechStackSection from './components/sections/TechStackSection';
import PricingSection from './components/sections/PricingSection';
import WhyChooseSection from './components/sections/WhyChooseSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import LeadCaptureSection from './components/sections/LeadCaptureSection';
import {
  audienceHighlights,
  footerLinks,
  packages,
  portfolioItems,
  problemCards,
  processSteps,
  serviceCards,
  techStack,
  testimonials,
} from './data/siteData';

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ note: '', error: false, whatsappHref: '' });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const projectType = String(data.get('projectType') || '').trim();
    const budget = String(data.get('budget') || '').trim();
    const message = String(data.get('message') || '').trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !phone || !projectType || !budget || !message) {
      setFormState({ note: 'Please complete all fields before sending your inquiry.', error: true, whatsappHref: '' });
      return;
    }

    if (!emailPattern.test(email)) {
      setFormState({ note: 'Please enter a valid email address.', error: true, whatsappHref: '' });
      return;
    }

    const plainMessage = `Name: ${name}\nEmail: ${email}\nPhone/WhatsApp: ${phone}\nProject Type: ${projectType}\nBudget Range: ${budget}\n\nMessage:\n${message}`;
    const whatsappHref = `https://wa.me/918077176860?text=${encodeURIComponent(
      `Hello Ritesh, here is my project inquiry:\n\n${plainMessage}`
    )}`;

    setFormState({
      note: 'Opening WhatsApp with your project inquiry.',
      error: false,
      whatsappHref,
    });
    window.open(whatsappHref, '_blank', 'noopener,noreferrer');
    form.reset();
  };

  return (
    <>
      <ScrollProgress />
      <AnimatePresence>{loading ? <LoaderScreen key="loader" /> : null}</AnimatePresence>
      <div className="min-h-screen bg-[#070b16] text-white selection:bg-cyan-300/30 selection:text-white">
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(74,116,255,0.20),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(143,92,255,0.18),_transparent_26%),linear-gradient(180deg,_#070b16_0%,_#09101f_48%,_#05070e_100%)]" />
        <div className="grid-surface pointer-events-none fixed inset-0 -z-10 opacity-40" />

        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main>
          <HeroSection />
          <ProblemSection items={problemCards} />
          <ServicesSection items={serviceCards} />
          <PortfolioSection items={portfolioItems} />
          <ProcessSection items={processSteps} />
          <TechStackSection items={techStack} />
          <PricingSection items={packages} />
          <WhyChooseSection items={audienceHighlights} />
          <TestimonialsSection items={testimonials} />
          <LeadCaptureSection formState={formState} onSubmit={handleFormSubmit} />
        </main>

        <Footer links={footerLinks} />

        <motion.a
          href="https://wa.me/918077176860?text=Hello%20Ritesh%2C%20I%20want%20to%20discuss%20my%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-400/90 text-lg font-black text-emerald-950 shadow-[0_18px_40px_rgba(22,163,74,0.38)] backdrop-blur"
          whileHover={{ y: -4, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Discuss on WhatsApp"
        >
          WA
        </motion.a>
      </div>
    </>
  );
}

export default App;
