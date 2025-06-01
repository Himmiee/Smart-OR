export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const cardPop = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const leftContentVariants = {
  hidden: {
    opacity: 0,
    x: -60,
    scale: 0.95,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.23, 1, 0.32, 1],
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

export const rightContainerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    rotateY: 15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1.4,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

export const mainImageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 30,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.34, 1.56, 0.64, 1],
      type: "spring",
      stiffness: 60,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    filter: "brightness(1.1) saturate(1.2)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const overlayVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotate: -20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const topRightVariants = {
  ...overlayVariants,
  visible: {
    ...overlayVariants.visible,
    transition: {
      ...overlayVariants.visible.transition,
      delay: 0.8,
    },
  },
};

export const bottomLeftVariants = {
  ...overlayVariants,
  visible: {
    ...overlayVariants.visible,
    transition: {
      ...overlayVariants.visible.transition,
      delay: 1.1,
    },
  },
};

export const notificationContainerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 1.4,
      staggerChildren: 0.1,
    },
  },
};

export const notificationItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Reusable Animation Objects
export const floatingAnimation = {
  y: [0, -10, 0],
  rotate: [0, 2, 0],
  transition: {
    duration: 6,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
  },
};

export const pulseAnimation = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 4,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
  },
};

// Background Ambient Animations
export const backgroundOrbAnimation1 = {
  scale: [1, 1.3, 1],
  opacity: [0.3, 0.6, 0.3],
  x: [0, 50, 0],
  y: [0, -30, 0],
  transition: {
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const backgroundOrbAnimation2 = {
  scale: [1, 1.2, 1],
  opacity: [0.2, 0.5, 0.2],
  x: [0, -40, 0],
  y: [0, 20, 0],
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 3,
  },
};

// Hover Effects
export const topRightHoverEffect = {
  scale: 1.15,
  rotate: 5,
  filter: "brightness(1.1) drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
  y: -5,
};

export const bottomLeftHoverEffect = {
  scale: 1.08,
  rotate: -10,
  y: -5,
  filter: "brightness(1.05) drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
};

export const notificationTopHoverEffect = {
  y: -8,
  scale: 1.12,
  filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.15)) brightness(1.1)",
  rotate: 2,
};

export const notificationBottomHoverEffect = {
  y: 8,
  scale: 1.12,
  filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.15)) brightness(1.1)",
  rotate: -2,
};
