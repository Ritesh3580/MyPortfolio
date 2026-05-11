import GlassCard from '../ui/GlassCard';
import SectionIntro from '../ui/SectionIntro';

function ProcessSection({ items }) {
  return (
    <section className="section-shell py-24" id="process">
      <SectionIntro eyebrow="Execution Process" title="A Structured Delivery Flow That Reduces Risk and Launch Friction" description="From requirement clarity to deployment and support, every stage is designed to protect quality while keeping momentum high." />
      <div className="relative mt-14">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(90,142,255,0.0),rgba(90,142,255,0.55),rgba(173,102,255,0.0))] md:block" />
        <div className="grid gap-6">
          {items.map((item, index) => (
            <GlassCard key={item.step} className="relative overflow-hidden p-7 md:ml-16">
              <div className="absolute -left-3 top-8 hidden h-6 w-6 rounded-full royal-gradient shadow-[0_0_0_6px_rgba(9,15,30,0.95)] md:block" />
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <div className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200">{item.step}</div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.detail}</p>
                </div>
                <div className="text-7xl font-black text-white/6">{index + 1}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
