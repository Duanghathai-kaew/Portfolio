"use client";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion-preference";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import type { PointerEvent } from "react";
import { useEffect, useState } from "react";

interface MagneticButtonProps extends HTMLMotionProps<"a"> {
  strength?: number;
}

export function MagneticButton({
  className,
  children,
  strength = 10,
  onPointerMove,
  onPointerLeave,
  ...props
}: MagneticButtonProps) {
  const prefersReducedMotion = useReducedMotionPreference();
  const [supportsFinePointer, setSupportsFinePointer] = useState(false);
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 22 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 22 });

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
    );
    const updatePointer = () => {
      setSupportsFinePointer(query.matches);
    };

    updatePointer();
    query.addEventListener("change", updatePointer);

    return () => {
      query.removeEventListener("change", updatePointer);
    };
  }, []);

  const canMagnetize = supportsFinePointer && !prefersReducedMotion;

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    onPointerMove?.(event);

    if (!canMagnetize) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLAnchorElement>) => {
    onPointerLeave?.(event);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      className={cn(className)}
      style={canMagnetize ? { x, y } : undefined}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {children}
    </motion.a>
  );
}
