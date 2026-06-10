"use client";

import type { RefObject } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollProgressLineProps {
  targetRef: RefObject<HTMLElement | null>;
  className?: string;
  orientation?: "vertical" | "horizontal";
}

export function ScrollProgressLine({
  targetRef,
  className,
  orientation = "vertical"
}: ScrollProgressLineProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"]
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3
  });
  const scale = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <motion.span
      aria-hidden="true"
      className={cn(
        "absolute origin-top-left rounded-full bg-lilac-dark motion-reduce:hidden",
        orientation === "vertical" ? "left-0 top-0 w-px" : "left-0 top-0 h-px",
        className
      )}
      style={orientation === "vertical" ? { scaleY: scale } : { scaleX: scale }}
    />
  );
}
