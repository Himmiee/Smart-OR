"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterImg from "@/public/logo-asset/footer-logo.png";
import { footerData } from "@/Providers/data/data";
import { CardContainer } from "./cards/CardContainer";
import footerBg from "@/public/impact/bg-grad.png";
import footerPrintLogoBg from "@/public/logo-asset/footer-print-logo.png";
import { useRouter } from "next/navigation";

const iconClasses = "text-white text-base";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  return (
    <footer className="relative overflow-hidden">
      {/* Watermark Background Image */}

      {/* Actual Content on Top */}
      <CardContainer bgImage={footerBg}>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
            {/* Logo */}
            <div
              onClick={() => router.push("/")}
              className="col-span-1 cursor-pointer"
            >
              <Image
                src={FooterImg}
                alt="Credicorp Logo"
                width={200}
                height={50}
              />
            </div>

            {/* Footer Sections */}
            {footerData.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-3 text-white">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm text-white">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:underline cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="hidden md:flex space-x-4 ">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 cursor-pointer rounded-full bg-black flex items-center justify-center"
              >
                <FaXTwitter className={iconClasses} />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 cursor-pointer rounded-full bg-[#3b5998] flex items-center justify-center"
              >
                <FaFacebookF className={iconClasses} />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 cursor-pointer rounded-full bg-[#0077b5] flex items-center justify-center"
              >
                <FaLinkedinIn className={iconClasses} />
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar with Social Icons */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t md:border-0 border-white/20 text-white">
            <p className="text-sm mb-4 md:mb-0 md:opacity-40">
              © {currentYear} CREDICORP. All Rights Reserved.
            </p>

            <div className="flex space-x-4 md:hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 cursor-pointer rounded-full bg-black flex items-center justify-center"
              >
                <FaXTwitter className={iconClasses} />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 cursor-pointer rounded-full bg-[#3b5998] flex items-center justify-center"
              >
                <FaFacebookF className={iconClasses} />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 cursor-pointer rounded-full bg-[#0077b5] flex items-center justify-center"
              >
                <FaLinkedinIn className={iconClasses} />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="pt-12 px-6 lg:px-0  flex items-center justify-center z-0 opacity-70 pointer-events-none select-none">
          <Image
            src={footerPrintLogoBg}
            alt="Footer Watermark"
            className="w-full max-w-screen-xl object-contain"
          />
        </div>
      </CardContainer>
    </footer>
  );
};

export default Footer;
