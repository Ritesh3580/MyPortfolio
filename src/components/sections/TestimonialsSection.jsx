import GlassCard from '../ui/GlassCard';
import SectionIntro from '../ui/SectionIntro';

function TestimonialsSection({ items }) {
  return (
    <section className="section-shell py-24">
      <SectionIntro eyebrow="Testimonials" title="Professional Feedback Framed Around Delivery Quality and Product Thinking" description="Representative placeholder testimonials for a premium service brand presentation." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <GlassCard key={item.quote} className="p-8">
            <div className="text-4xl text-cyan-200">“</div>
            <p className="mt-3 text-sm leading-8 text-slate-300">{item.quote}</p>
            <div className="mt-8 border-t border-white/8 pt-5">
              <div className="text-base font-semibold text-white">{item.author}</div>
              <div className="text-sm text-slate-500">Client-side stakeholder</div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
