import SectionIntro from '../ui/SectionIntro';

function TechStackSection({ items }) {
  return (
    <section className="section-shell py-14 sm:py-20 lg:py-24" id="stack">
      <SectionIntro eyebrow="Tech Stack" title="A Modern Product Stack for App Delivery, APIs, Releases, and Maintenance" description="Every project is built with proven, production-grade technologies chosen for performance, scalability, and long-term maintainability." />
      <div className="glass-panel relative mt-8 sm:mt-14 overflow-hidden rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(102,137,255,0.18),_transparent_48%)]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="grid gap-3 lg:hidden">
            <div className="mb-4 flex items-center justify-center rounded-[28px] border border-cyan-300/15 bg-white/5 px-6 py-8 text-center text-lg font-semibold text-white shadow-[0_0_80px_rgba(90,142,255,0.16)]">
              RiteshDev Stack
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {items.map((item) => (
                <div key={item} className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[560px] lg:block">
            <div className="absolute left-1/2 top-1/2 z-10 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/15 bg-white/5 text-center text-xl font-semibold text-white shadow-[0_0_80px_rgba(90,142,255,0.16)]">
              RiteshDev
              <br />
              Stack
            </div>

            {items.map((item, index) => {
              const angle = (index / items.length) * Math.PI * 2;
              const radius = index % 2 === 0 ? 180 : 235;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const duration = `${18 + (index % 5)}s`;

              return (
                <div
                  key={item}
                  className="orbit-wrapper absolute left-1/2 top-1/2"
                  style={{ animationDuration: duration }}
                >
                  <div
                    className="orbit-badge rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur"
                    style={{
                      '--tx': `${x}px`,
                      '--ty': `${y}px`,
                      '--orbit-duration': duration,
                    }}
                  >
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
