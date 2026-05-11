import GlassCard from '../ui/GlassCard';
import SectionIntro from '../ui/SectionIntro';

function TestimonialsSection({ items }) {
  return (
    <section className="section-shell py-14 sm:py-20 lg:py-24">
      <SectionIntro eyebrow="Testimonials" title="What Clients Say About Working With RiteshDev Studio" description="Feedback from founders, product managers, and operations leads who have worked with us on mobile apps, dashboards, and full-stack builds." />
      <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <GlassCard key={item.quote} className="p-8">
            <div className="text-4xl text-cyan-200">“</div>
            <p className="mt-3 text-sm leading-8 text-slate-300">{item.quote}</p>
            <div className="mt-8 border-t border-white/8 pt-5">
              <div className="text-base font-semibold text-white">{item.author}</div>
              {item.role ? <div className="text-sm text-slate-500">{item.role}</div> : null}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
