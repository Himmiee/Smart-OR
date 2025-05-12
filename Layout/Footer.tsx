"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // updated X logo
import FooterImg from "@/public/logo-asset/footer-logo.png";
import { footerData } from "@/Providers/data/data";

const iconClasses = "text-white text-base";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0E875B] text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {/* Logo */}
          <div className="col-span-1">
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
              <h4 className="font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar with Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-white/20">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} CREDICORP. All Rights Reserved.
          </p>

          <div className="flex space-x-4">
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
    </footer>
  );
};

export default Footer;
