// Enhanced interactive animations for Mission section
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
  active: {
    scale: 1.03,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.08,
    filter: "brightness(1.05)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const notificationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    y: -10,
    scale: 1.12,
    filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const mainImageHover = {
  initial: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.04,
    boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
    transition: { duration: 0.5 },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

export const overlayHover = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.15,
    rotate: 5,
    filter: "brightness(1.1)",
    transition: { duration: 0.4, type: "spring", stiffness: 300 },
  },
  tap: {
    scale: 0.95,
    rotate: -2,
    transition: { duration: 0.2 },
  },
};

export const serviceCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.05)",
    transition: {
      duration: 0.2,
    },
  },
};

export const missionTextVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -5, 0],
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
export const cardVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hover: {
    y: -10,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.12)",
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
    },
  },
};
