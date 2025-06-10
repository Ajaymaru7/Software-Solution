"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useAnimation, Variant } from "framer-motion";
import { useInView } from "framer-motion";

interface ScrollAnimationProps {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  className?: string;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const defaultVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export function ScrollAnimation({
  children,
  variants = defaultVariants,
  className = "",
  delay = 0,
  threshold = 0.1,
  once = true
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, isInView, once]);
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn(props: Omit<ScrollAnimationProps, "variants">) {
  return <ScrollAnimation {...props} variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }} />;
}

export function FadeInLeft(props: Omit<ScrollAnimationProps, "variants">) {
  return <ScrollAnimation {...props} variants={{
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }} />;
}

export function FadeInRight(props: Omit<ScrollAnimationProps, "variants">) {
  return <ScrollAnimation {...props} variants={{
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  }} />;
}

export function ZoomIn(props: Omit<ScrollAnimationProps, "variants">) {
  return <ScrollAnimation {...props} variants={{
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }} />;
}

export function FadeInStagger({ children, ...props }: ScrollAnimationProps) {
  return (
    <ScrollAnimation
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      {...props}
    >
      {children}
    </ScrollAnimation>
  );
} 