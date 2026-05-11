import GlassCard from '../ui/GlassCard';
import SectionIntro from '../ui/SectionIntro';

function WhyChooseSection({ items }) {
  return (
    <section className="section-shell py-24">
      <SectionIntro eyebrow="Why Choose Me" title="Built for Businesses That Need Practical Execution, Not Just Visual Design" description="The work is optimized for product reliability, launch speed, long-term maintainability, and smoother client communication." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <GlassCard key={item} className="p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/8 text-xl text-cyan-200">✦</div>
            <h3 className="mt-5 text-lg font-semibold text-white">{item}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">A delivery approach shaped around launch confidence, supportability, and better business decision-making.</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseSection;
