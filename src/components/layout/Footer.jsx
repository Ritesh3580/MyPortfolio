function Footer({ links }) {
  return (
    <footer className="border-t border-white/8 py-12">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h3 className="text-xl font-semibold text-white">RiteshDev Studio</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Premium product engineering for startups, travel operators, SaaS teams, local businesses, and service companies that need mobile apps, dashboards, integrations, and reliable production support.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Services</div>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <div>Mobile Apps</div>
            <div>Web Dashboards</div>
            <div>Firebase Integration</div>
            <div>Deployment Support</div>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Contact</div>
          <div className="mt-4 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/35 hover:text-white"
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-shell mt-10 border-t border-white/8 pt-6 text-sm text-slate-500">
        © 2026 RiteshDev Studio. Premium mobile app, dashboard, and MVP development.
      </div>
    </footer>
  );
}

export default Footer;
