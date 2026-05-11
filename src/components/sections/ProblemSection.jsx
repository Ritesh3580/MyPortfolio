import GlassCard from '../ui/GlassCard';
import SectionIntro from '../ui/SectionIntro';

function ProblemSection({ items }) {
  return (
    <section className="section-shell py-24">
      <SectionIntro eyebrow="Business Pain Points" title="Your Business Needs More Than Just a Website" description="The real blockers are workflow gaps, mobile friction, missing visibility, broken integrations, and poor release stability." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <GlassCard key={item} className="p-6">
            <div className="flex items-start gap-4">
              <div className="royal-gradient flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black text-white">0{index + 1}</div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">I help replace this bottleneck with a more scalable mobile, dashboard, or automation-driven solution.</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default ProblemSection;
