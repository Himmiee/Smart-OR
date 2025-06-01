import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: StaticImageData;
  bgColor?: string;
  borderColor?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.15, ease: "easeOut" }, 
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  bgColor,
  borderColor,
}) => {
  const hasStyleWrapper = !!borderColor;

  return (
    <motion.div
      className="rounded-xl h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="mb-4" variants={fadeInUp}>
        {hasStyleWrapper ? (
          <div
            className={`w-16 h-16 flex items-center justify-center border rounded-full ${bgColor} border-${borderColor}`}
          >
            <Image src={icon} alt={title} className="w-8 h-8 object-contain" />
          </div>
        ) : (
          <Image src={icon} alt={title} className="w-12 h-12 object-contain" />
        )}
      </motion.div>

      <motion.h3
        className="text-xl text-[#2D2F31] font-semibold mb-2"
        variants={fadeInUp}
      >
        {title}
      </motion.h3>

      <motion.p className="text-[#2D2F31] leading-relaxed" variants={fadeInUp}>
        {description}
      </motion.p>
    </motion.div>
  );
};

export default ServiceCard;
