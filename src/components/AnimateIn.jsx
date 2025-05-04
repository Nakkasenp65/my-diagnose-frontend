"use client";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  // add more presets with exit states as needed...
};

export default function AnimateIn({
  children,
  variant = "slideUp",
  duration = 0.8,
  delay = 0,
  className,
  style,
}) {
  const v = variants[variant] || variants.fadeIn;

  return (
    <AnimatePresence>
      <motion.div
        initial={v.initial}
        animate={v.animate}
        exit={v.exit}
        transition={{ duration, delay, type: "spring" }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
