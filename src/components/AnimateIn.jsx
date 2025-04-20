"use client";
import { motion } from "framer-motion";

const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  // add more presets here…
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
    <motion.div
      initial={v.initial}
      animate={v.animate}
      transition={{ duration, delay, type: "spring" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
