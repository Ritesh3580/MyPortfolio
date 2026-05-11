import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';
import SectionIntro from '../ui/SectionIntro';

function LeadCaptureSection({ formState, onSubmit }) {
  return (
    <section className="section-shell py-14 sm:py-20 lg:py-24" id="contact">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionIntro eyebrow="Lead Capture" title="Tell Me What You Want to Build" description="Whether you need a startup MVP, a dashboard, Firebase support, deployment help, or urgent bug fixing, this is the fastest way to start the conversation." align="left" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="https://wa.me/918077176860?text=Hello%20Ritesh%2C%20I%20want%20to%20discuss%20my%20project%20on%20WhatsApp." target="_blank" rel="noopener noreferrer">Discuss on WhatsApp</Button>
            <Button href="mailto:riteshsharma395@gmail.com" variant="secondary">Email Instead</Button>
          </div>
        </div>
        <GlassCard className="p-7 sm:p-8">
          <form className="grid gap-5" onSubmit={onSubmit} noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-300"><span>Name</span><input name="name" type="text" required className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40" placeholder="Your full name" /></label>
              <label className="grid gap-2 text-sm text-slate-300"><span>Email</span><input name="email" type="email" required className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40" placeholder="you@example.com" /></label>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-300"><span>Phone / WhatsApp</span><input name="phone" type="text" required className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40" placeholder="+91 98765 43210" /></label>
              <label className="grid gap-2 text-sm text-slate-300"><span>Project Type</span><select name="projectType" defaultValue="" required className="rounded-2xl border border-white/10 bg-[#0d1322] px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"><option value="" disabled>Select project type</option><option>React Native Mobile App</option><option>Web App / Dashboard</option><option>SaaS Dashboard Development</option><option>Node.js / Backend API</option><option>Full-Stack Product</option><option>Firebase / Backend Integration</option><option>Payment Gateway</option><option>Deployment / Build Fix</option><option>Production Bug Fixing</option><option>Full MVP Development</option></select></label>
            </div>
            <label className="grid gap-2 text-sm text-slate-300"><span>Budget Range</span><select name="budget" defaultValue="" required className="rounded-2xl border border-white/10 bg-[#0d1322] px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"><option value="" disabled>Select budget range</option><option>Bug fix / small engagement</option><option>Starter MVP scope</option><option>Growth-stage build</option><option>Custom business system</option></select></label>
            <label className="grid gap-2 text-sm text-slate-300"><span>Message</span><textarea name="message" required rows="6" className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40" placeholder="Describe your app idea, dashboard requirement, API issue, bug, or business workflow." /></label>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="royal-gradient inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-wide text-white shadow-[0_16px_40px_rgba(95,126,255,0.35)] transition hover:translate-y-[-2px]">Send Project Inquiry</button>
              <p className={`text-sm ${formState.error ? 'text-rose-300' : 'text-cyan-200'}`}>{formState.note}</p>
            </div>
            {formState.whatsappHref ? (
              <div className="pt-2">
                <Button href={formState.whatsappHref} target="_blank" rel="noopener noreferrer" variant="secondary">
                  Send Same Inquiry on WhatsApp
                </Button>
              </div>
            ) : null}
          </form>
        </GlassCard>
      </div>
    </section>
  );
}

export default LeadCaptureSection;
