import { motion } from 'framer-motion';

function SectionIntro({ eyebrow, title, description, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl text-left'}`}
    >
      <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-200">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-300">{description}</p> : null}
    </motion.div>
  );
}

export default SectionIntro;
