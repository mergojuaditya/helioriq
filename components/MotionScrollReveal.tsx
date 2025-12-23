"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function MotionScrollReveal({
  children,
  delay = 0,
  direction = "up",
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Directional offset
  const getOffset = () => {
    switch (direction) {
      case "left":
        return { x: -40, y: 0 };
      case "right":
        return { x: 40, y: 0 };
      case "down":
        return { x: 0, y: 40 };
      default:
        return { x: 0, y: -40 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getOffset() }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getOffset() }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
