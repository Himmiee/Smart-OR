"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import topRightMissionImgOnClick from "@/public/sub/top-right-mission-img.png";
import tbottomLeftMissionImgOnClick from "@/public/sub/bottom-left-footer.png";
import stackedOnImageCenter from "@/public/sub/Notification.png";
import StackOnImageCenterBelow from "@/public/sub/Notification Container.png";
import rightImg from "@/public/sub/mission.png";
import { MissionSubComponent } from "@/Layout/comp/mission/MissionComponent";
import {
  containerVariants,
  imageVariants,
  mainImageHover,
  notificationVariants,
} from "@/Layout/variants/MissionVariants";

export default function MissionPage() {
  return (
    <div className="relative py-16 md:py-24 px-6 bg-[#F6F2DA] overflow-hidden flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center z-10 relative max-w-screen-xl mx-auto">
        <motion.div className="pt">
          <MissionSubComponent />
        </motion.div>

        {/* Right Image + Relative Container - More space with ml-8 */}
        <motion.div
          className="hidden lg:flex justify-end relative w-full max-w-md ml-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main Mission Image */}
          <motion.div
            className="w-full cursor-pointer"
            whileHover="hover"
            variants={mainImageHover}
          >
            <Image
              src={rightImg}
              alt="Mission"
              className="w-full object-contain"
            />
          </motion.div>

          {/* Top Right Overlay - Added delay */}
          <motion.div
            whileHover={{
              scale: 1.15,
              rotate: 5,
              filter: "brightness(1.1)",
            }}
            className="absolute -top-22 -right-12 w-64 h-64 cursor-pointer"
            variants={imageVariants}
            transition={{ delay: 0.8 }}
          >
            <Image
              src={topRightMissionImgOnClick}
              alt="Top Right Overlay"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Bottom Left Overlay - Added delay */}
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: -10,
              y: -5,
              filter: "brightness(1.05)",
            }}
            className="absolute -bottom-32 -left-12 w-64 h-64 cursor-pointer"
            variants={imageVariants}
            transition={{ delay: 1.1 }}
          >
            <Image
              src={tbottomLeftMissionImgOnClick}
              alt="Bottom Left Overlay"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Stacked Notification Center — Vertical - Added delay */}
          <motion.div
            className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-40"
            variants={containerVariants}
            transition={{ delay: 1.4 }}
          >
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.12,
                filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
              }}
              className="relative w-full h-12 cursor-pointer z-10"
              variants={notificationVariants}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={stackedOnImageCenter}
                alt="Notification Top"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              whileHover={{
                y: 8,
                scale: 1.12,
                filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
              }}
              className="relative w-full h-12 mt-1 cursor-pointer"
              variants={notificationVariants}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={StackOnImageCenterBelow}
                alt="Notification Bottom"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
