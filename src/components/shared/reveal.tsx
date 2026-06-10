"use client";

import type { HTMLMotionProps, Variants } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] }
  }
};

export function Reveal({ delay = 0, className, children, ...props }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? { opacity: 0 } : "hidden"}
      whileInView={shouldReduceMotion ? { opacity: 1 } : "visible"}
      viewport={{ once: true, amount: 0.22 }}
      variants={revealVariants}
      transition={
        shouldReduceMotion
          ? { duration: 0.2, delay }
          : { duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
