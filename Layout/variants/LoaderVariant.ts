// lib/animations/loaderVariants.ts
export const loaderVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  },
  line: {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  crossLine: {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  circle: {
    hidden: { scale: 0 },
    visible: {
      scale: [0, 1, 50],
      opacity: [0, 0.6, 0],
      transition: {
        duration: 2.5,
        times: [0, 0.3, 1],
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  },
  text: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.8,
        duration: 0.8,
      },
    },
  },
};
