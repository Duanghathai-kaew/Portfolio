"use client";

import type { HTMLMotionProps, Variants } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";

interface StaggerGroupProps extends HTMLMotionProps<"div"> {
  delayChildren?: number;
  staggerChildren?: number;
}

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] }
  }
};

export function StaggerGroup({
  delayChildren = 0,
  staggerChildren = 0.08,
  children,
  ...props
}: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        visible: {
          transition: shouldReduceMotion
            ? { staggerChildren: 0, delayChildren: 0 }
            : { staggerChildren, delayChildren }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
