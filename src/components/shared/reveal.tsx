"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

const revealVariants: Variants = {
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  delay = 0,
  className,
  children,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      data-motion
      data-reveal
      className={cn(className)}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={revealVariants}
      transition={
        shouldReduceMotion
          ? { duration: 0.01, delay: 0 }
          : { duration: 0.35, delay }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
