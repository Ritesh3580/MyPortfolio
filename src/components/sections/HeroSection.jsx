import { Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroScene = lazy(() => import('../three/HeroScene'));

function SceneFallback() {
  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-[32px] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(13,20,38,0.92),rgba(8,12,24,0.75))] p-8 sm:h-[440px] lg:h-[500px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(108,145,255,0.22),_transparent_40%)]" />
      <div className="glass-panel absolute left-8 top-10 h-36 w-24 rotate-[-10deg] rounded-[24px] border-cyan-300/20 sm:h-48 sm:w-28" />
      <div className="glass-panel absolute right-6 top-14 h-32 w-44 rotate-[8deg] rounded-[24px] border-fuchsia-300/18 sm:h-40 sm:w-52" />
      <div className="glass-panel absolute bottom-6 left-1/2 h-20 w-48 -translate-x-1/2 rounded-[20px] border-white/12 sm:h-24 sm:w-60" />
      <div className="glass-panel absolute left-4 top-1/2 rounded-2xl px-3 py-2 text-xs text-cyan-100 sm:px-4 sm:py-3 sm:text-sm">API Hub</div>
      <div className="glass-panel absolute bottom-16 right-6 rounded-2xl px-3 py-2 text-xs text-fuchsia-100 sm:px-4 sm:py-3 sm:text-sm">Firebase</div>
      <div className="glass-panel absolute right-20 top-6 rounded-2xl px-3 py-2 text-xs text-emerald-100 sm:px-4 sm:py-3 sm:text-sm">Payments</div>
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
    <section id="top" className="section-shell relative py-20 sm:py-24 lg:py-28">
      {/* blur orbs — isolated so they never clip card shadows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-10 h-72 w-72 rounded-full bg-blue-500/16 blur-3xl" />
        <div className="absolute right-[-8%] top-28 h-80 w-80 rounded-full bg-fuchsia-500/14 blur-3xl" />
      </div>

      <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Mobile · Web · SaaS · Full-Stack Engineering
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08 }} className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.96] tracking-tight sm:text-5xl lg:text-7xl">
            <span className="text-gradient">Build Mobile Apps, SaaS Dashboards &amp; Full-Stack Products</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.16 }} className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I help startups and businesses build React Native mobile apps, SaaS dashboards, Node.js backends, Firebase systems, and full-stack digital products — from idea to launch.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }} className="mt-10 flex flex-wrap gap-4">
            <Button href="https://wa.me/918077176860?text=Hello%20Ritesh%2C%20I%20want%20to%20start%20a%20project." target="_blank" rel="noopener noreferrer">Start Your Project</Button>
            <Button href="https://wa.me/918077176860?text=Hello%20Ritesh%2C%20I%20want%20a%20free%20estimate%20for%20my%20project." variant="secondary" target="_blank" rel="noopener noreferrer">Get Free Estimate</Button>
          </motion.div>
          <div className="mt-8 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-200">{badge}</span>
            ))}
          </div>
        </div>

        <motion.div ref={sceneRef} initial={{ opacity: 0, scale: 0.96, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.12 }} className="relative">
          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/4 p-3 hero-shadow">
            {reducedScene || !loadScene ? <SceneFallback /> : <Suspense fallback={<SceneFallback />}><HeroScene /></Suspense>}
            {/* metrics overlay — sits inside overflow-hidden so it's clipped to card */}
            <div className="absolute left-5 top-5 z-10 flex flex-col gap-2.5">
              {['30% Faster Delivery', '95% Client Satisfaction', 'Production-Ready Code'].map((metric) => (
                <div key={metric} className="glass-panel rounded-2xl px-4 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-md">{metric}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
