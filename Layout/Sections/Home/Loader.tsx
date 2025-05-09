"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { loaderVariants } from "@/Layout/variants/LoaderVariant";
import logo from "@/public/logo-asset/footer-logo.png";

export default function Loader() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <motion.div
        className="relative w-full h-full"
        variants={loaderVariants.container}
        initial="hidden"
        animate="visible"
      >
        {/* Vertical White Columns (background) */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`v-box-${i}`}
            className="absolute h-full"
            style={{
              left: `${i * 20}%`,
              width: "20%",
              backgroundColor: "#ffffff",
              opacity: 1,
            }}
            variants={loaderVariants.crossLine}
            transition={{ delay: i * 0.1, duration: 1 }}
          />
        ))}

        {/* Horizontal Green Boxes (foreground) */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`h-box-${i}`}
            className="absolute w-full"
            style={{
              top: `${i * 20}%`,
              height: "20%",
              backgroundColor: "#008751",
            }}
            variants={loaderVariants.line}
            transition={{
              delay: i * 0.1 + 0.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Expanding Pulse Circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full"
          style={{
            backgroundColor: "#008751",
            marginTop: "-1rem",
            marginLeft: "-1rem",
            originX: 0.5,
            originY: 0.5,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glowing Logo */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          variants={loaderVariants.text}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.05 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={logo}
            alt="Credicorp Logo"
            width={250}
            height={250}
            priority
            className="drop-shadow-xl animate-pulse"
          />
        </motion.div>

        {/* Loader Percentage */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold tracking-widest z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {percentage}%
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
