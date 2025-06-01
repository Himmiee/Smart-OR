"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export const AnimatedSection = ({ children, animation }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0, once: true }); 
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={hasAnimated ? animation.animate : animation.initial}
      transition={animation.transition}
      className="overflow-hidden"
      style={{
        backgroundColor: "transparent", 
        minHeight: "fit-content",
      }}
    >
      {children}
    </motion.div>
  );
};
