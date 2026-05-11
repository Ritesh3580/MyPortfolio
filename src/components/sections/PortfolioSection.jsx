import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';
import SectionIntro from '../ui/SectionIntro';

function PortfolioSection({ items }) {
  return (
    <section className="section-shell py-14 sm:py-20 lg:py-24" id="portfolio">
      <SectionIntro eyebrow="Portfolio" title="Case Studies Designed Around Business Problems and Operational Outcomes" description="Each project demonstrates product thinking, implementation depth, and a direct link between software decisions and business value." />
      <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <GlassCard key={item.title} className="flex flex-col overflow-hidden">
            {/* Image Banner */}
            <div className="relative aspect-[5/6] sm:aspect-[4/5] lg:aspect-[5/6] w-full shrink-0 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.98),_rgba(241,245,249,0.96)_56%,_rgba(226,232,240,0.92)_100%)]">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain object-center p-1 sm:p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#122444_0%,#4d70ff_54%,#8658ff_100%)]">
                  <span className="text-3xl font-bold text-white/80 tracking-tight">{item.title}</span>
                </div>
              )}
              {/* bottom fade into card body */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0d1426] to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 pt-4 sm:p-7 sm:pt-5">
              <h3 className="text-xl font-semibold leading-snug text-white">{item.title}</h3>

              <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-400">
                <p>
                  <span className="font-semibold text-slate-200">Problem — </span>
                  {item.problem}
                </p>
                <p>
                  <span className="font-semibold text-slate-200">Solution — </span>
                  {item.solution}
                </p>
                <p>
                  <span className="font-semibold text-cyan-300">Business Value — </span>
                  {item.value}
                </p>
              </div>

              {/* Tech stack */}
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions — pushed to bottom */}
              <div className="mt-auto pt-5 sm:pt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={item.link || `https://wa.me/918077176860?text=${encodeURIComponent(`Hello Ritesh, I want the case study for ${item.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Case Study
                </Button>
                <Button
                  href={`https://wa.me/918077176860?text=${encodeURIComponent(`Hello Ritesh, I want a project similar to ${item.title}.`)}`}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuss Similar Build
                </Button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
