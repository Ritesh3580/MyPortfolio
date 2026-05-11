import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';
import SectionIntro from '../ui/SectionIntro';

function PortfolioSection({ items }) {
  return (
    <section className="section-shell py-24" id="portfolio">
      <SectionIntro eyebrow="Portfolio" title="Case Studies Designed Around Business Problems and Operational Outcomes" description="Each project demonstrates product thinking, implementation depth, and a direct link between software decisions and business value." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <GlassCard key={item.title} className="overflow-hidden">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[280px] overflow-hidden border-b border-white/8 lg:border-b-0 lg:border-r">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover object-top" loading="lazy" />
                ) : (
                  <div className="flex h-full min-h-[280px] items-end bg-[linear-gradient(135deg,#122444_0%,#4d70ff_54%,#8658ff_100%)] p-6">
                    <span className="text-2xl font-semibold text-white">{item.title}</span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07101f] to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                  <p><span className="font-semibold text-white">Problem:</span> {item.problem}</p>
                  <p><span className="font-semibold text-white">Solution:</span> {item.solution}</p>
                  <p><span className="font-semibold text-white">Business Value:</span> {item.value}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-3 py-1.5 text-xs font-semibold text-cyan-100">{tech}</span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={item.link || `https://wa.me/918077176860?text=${encodeURIComponent(`Hello Ritesh, I want the case study for ${item.title}.`)}`} target="_blank" rel="noopener noreferrer">View Case Study</Button>
                  <Button href={`https://wa.me/918077176860?text=${encodeURIComponent(`Hello Ritesh, I want a project similar to ${item.title}.`)}`} variant="secondary" target="_blank" rel="noopener noreferrer">Discuss Similar Build</Button>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
