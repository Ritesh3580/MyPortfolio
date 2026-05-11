import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';
import SectionIntro from '../ui/SectionIntro';

function PricingSection({ items }) {
  return (
    <section className="section-shell py-24" id="pricing">
      <SectionIntro eyebrow="Pricing Packages" title="Clear Engagement Paths for Fixes, MVP Launches, and Full Product Delivery" description="No rigid one-size-fits-all pricing. Every package starts with a practical scope conversation and a realistic quote." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <GlassCard key={item.name} className={`relative flex h-full flex-col p-8 ${item.featured ? 'border border-cyan-300/28 shadow-[0_0_80px_rgba(100,144,255,0.16)]' : ''}`}>
            {item.featured ? <div className="absolute right-6 top-6 rounded-full border border-cyan-300/24 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">Most Popular</div> : null}
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">{item.label}</div>
            <h3 className="mt-5 text-2xl font-semibold text-white">{item.name}</h3>
            <p className="mt-5 text-sm leading-7 text-slate-400">{item.audience}</p>
            <div className="mt-7 space-y-3">
              {item.points.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-3xl font-semibold text-white">Contact for quote</div>
            <Button href="https://wa.me/918077176860?text=Hello%20Ritesh%2C%20I%20want%20a%20quote%20for%20my%20project." target="_blank" rel="noopener noreferrer" variant={item.featured ? 'primary' : 'secondary'} className="mt-8">
              Discuss Package
            </Button>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
