"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/logo-asset/credicorp-logo.png";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // loader duration
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      {/* Ping Animation Behind Logo */}
      <span className="absolute inline-flex h-32 w-32 rounded-full bg-green-600 opacity-75 animate-ping"></span>

      {/* Logo with Glow */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10"
      >
        <Image
          src={logo}
          alt="Credicorp Logo"
          width={120}
          height={120}
          priority
          className="drop-shadow-[0_0_20px_rgba(0,255,140,0.5)]"
        />
      </motion.div>
    </motion.div>
  );
}
