"use client"
import { useInView,motion} from "framer-motion";
import { useRef } from "react";



export const AnimatedSection = ({ children, animation }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: false });

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={isInView ? animation.animate : animation.initial}
      transition={animation.transition}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};
