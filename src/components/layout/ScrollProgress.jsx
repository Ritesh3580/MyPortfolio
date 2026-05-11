import { motion, useScroll, useSpring } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.25 });

  return <motion.div className="fixed inset-x-0 top-0 z-[60] h-1 origin-left royal-gradient" style={{ scaleX }} />;
}

export default ScrollProgress;
