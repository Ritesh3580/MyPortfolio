import GlassCard from '../ui/GlassCard';
import SectionIntro from '../ui/SectionIntro';

function ServicesSection({ items }) {
  return (
    <section className="section-shell py-24" id="services">
      <SectionIntro eyebrow="Services" title="Conversion-Focused Development Services for Real Business Use Cases" description="Built for startup launches, internal tools, customer-facing products, production rescue, and growth-stage business systems." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <GlassCard key={item.title} className="flex h-full flex-col p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/8 text-sm font-black tracking-[0.22em] text-cyan-200">{item.icon}</div>
            <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
