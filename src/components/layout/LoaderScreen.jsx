import { motion } from 'framer-motion';

function LoaderScreen() {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.4 } }} className="fixed inset-0 z-[80] flex items-center justify-center bg-[#050812]">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-[30px] border border-cyan-300/25 bg-white/6 text-3xl font-black text-cyan-200 shadow-[0_0_60px_rgba(82,144,255,0.2)]"
        >
          RD
        </motion.div>
        <div className="mt-6 text-sm uppercase tracking-[0.44em] text-slate-400">RiteshDev Studio</div>
      </div>
    </motion.div>
  );
}

export default LoaderScreen;
