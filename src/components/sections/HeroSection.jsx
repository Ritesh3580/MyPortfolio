import { Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroScene = lazy(() => import('../three/HeroScene'));

function SceneFallback() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-[34px] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(13,20,38,0.92),rgba(8,12,24,0.75))] p-8 hero-shadow">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(108,145,255,0.22),_transparent_40%)]" />
      <div className="glass-panel absolute left-10 top-12 h-56 w-32 rotate-[-10deg] rounded-[32px] border-cyan-300/20" />
      <div className="glass-panel absolute right-10 top-20 h-48 w-56 rotate-[8deg] rounded-[32px] border-fuchsia-300/18" />
      <div className="glass-panel absolute bottom-8 left-1/2 h-28 w-64 -translate-x-1/2 rounded-[28px] border-white/12" />
      <div className="glass-panel absolute left-6 top-1/2 rounded-3xl px-4 py-3 text-sm text-cyan-100">API Hub</div>
      <div className="glass-panel absolute right-8 bottom-20 rounded-3xl px-4 py-3 text-sm text-fuchsia-100">Firebase</div>
      <div className="glass-panel absolute right-28 top-8 rounded-3xl px-4 py-3 text-sm text-emerald-100">Payments</div>
    </div>
  );
}

function HeroSection() {
  const [reducedScene, setReducedScene] = useState(false);
  const [loadScene, setLoadScene] = useState(false);
  const sceneRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const evaluate = () => setReducedScene(media.matches || window.innerWidth < 768);
    evaluate();
    media.addEventListener('change', evaluate);
    window.addEventListener('resize', evaluate);
    return () => {
      media.removeEventListener('change', evaluate);
      window.removeEventListener('resize', evaluate);
    };
  }, []);

  useEffect(() => {
    if (reducedScene || !sceneRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoadScene(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '240px 0px' }
    );

    observer.observe(sceneRef.current);
    return () => observer.disconnect();
  }, [reducedScene]);

  const trustBadges = useMemo(
    () => ['4+ Years Experience', 'React Native Expert', 'Full-Stack Development', 'Firebase & API Integration', 'Play Store / App Store Support'],
    []
  );

  return (
    <section id="top" className="section-shell relative overflow-hidden py-20 sm:py-24 lg:py-30">
      <div className="pointer-events-none absolute left-[-8%] top-10 h-72 w-72 rounded-full bg-blue-500/16 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8%] top-28 h-80 w-80 rounded-full bg-fuchsia-500/14 blur-3xl" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Premium mobile product engineering
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08 }} className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Build Powerful Mobile Apps, Web Apps &amp; Business Dashboards</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.16 }} className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I help startups and businesses turn ideas into scalable React Native apps, React JS dashboards, Firebase systems, API integrations, and production-ready digital products.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }} className="mt-10 flex flex-wrap gap-4">
            <Button href="https://wa.me/918077176860?text=Hello%20Ritesh%2C%20I%20want%20to%20start%20a%20project." target="_blank" rel="noopener noreferrer">Start Your Project</Button>
            <Button href="#portfolio" variant="secondary">View Portfolio</Button>
          </motion.div>
          <div className="mt-8 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-200">{badge}</span>
            ))}
          </div>
        </div>

        <motion.div ref={sceneRef} initial={{ opacity: 0, scale: 0.96, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.12 }} className="relative">
          <div className="relative rounded-[38px] border border-white/10 bg-white/4 p-3 hero-shadow">
            <div className="absolute left-6 top-6 z-10 flex flex-col gap-3">
              {['30% Faster Delivery', '95% Client Satisfaction', 'Production-Ready Code'].map((metric) => (
                <div key={metric} className="glass-panel rounded-2xl px-4 py-3 text-sm font-semibold text-white/90">{metric}</div>
              ))}
            </div>
            {reducedScene || !loadScene ? <SceneFallback /> : <Suspense fallback={<SceneFallback />}><HeroScene /></Suspense>}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
