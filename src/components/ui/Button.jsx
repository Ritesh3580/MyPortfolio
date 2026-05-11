import { motion } from 'framer-motion';

function Button({ href, children, variant = 'primary', className = '', ...props }) {
  const styles = {
    primary: 'royal-gradient text-white shadow-[0_16px_40px_rgba(95,126,255,0.35)] hover:shadow-[0_24px_50px_rgba(127,102,255,0.35)]',
    secondary: 'border border-white/14 bg-white/6 text-white/90 hover:border-cyan-300/40 hover:bg-white/10',
  };

  return (
    <motion.a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${styles[variant]} ${className}`}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export default Button;
