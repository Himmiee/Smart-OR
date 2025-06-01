"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import topRightMissionImgOnClick from "@/public/sub/Item.png";
import tbottomLeftMissionImgOnClick from "@/public/sub/Footer.png";
import stackedOnImageCenter from "@/public/sub/Notification.png";
import StackOnImageCenterBelow from "@/public/sub/Notification Container.png";
import rightImg from "@/public/sub/mission.png";
import { MissionSubComponent } from "@/Layout/comp/mission/MissionComponent";
import {
  containerVariants,
  leftContentVariants,
  rightContainerVariants,
  mainImageVariants,
  topRightVariants,
  bottomLeftVariants,
  notificationContainerVariants,
  notificationItemVariants,
  floatingAnimation,
  pulseAnimation,
  backgroundOrbAnimation1,
  backgroundOrbAnimation2,
  bottomLeftHoverEffect,
  notificationTopHoverEffect,
  notificationBottomHoverEffect,
} from "@/Layout/variants/MissionVariants";

export default function MissionPage() {
  return (
    <motion.div
      className="relative py-16 md:py-24 px-6 bg-[#F6F2DA] overflow-hidden flex flex-col justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Ambient Background Elements */}
      <motion.div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-[#E0F8DE]/10 to-[#004642]/5 rounded-full blur-3xl"
          animate={backgroundOrbAnimation1}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-gradient-to-l from-[#F6F2DA]/20 to-[#004642]/10 rounded-full blur-2xl"
          animate={backgroundOrbAnimation2}
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center z-10 relative max-w-screen-xl mx-auto">
        {/* Left Content */}
        <motion.div className="pt" variants={leftContentVariants}>
          <MissionSubComponent />
        </motion.div>

        {/* Right Image Container */}
        <motion.div
          className="hidden lg:flex justify-end relative w-full"
          variants={rightContainerVariants}
        >
          {/* Main Mission Image */}
          <motion.div
            className="cursor-pointer w-4/5 relative z-10"
            variants={mainImageVariants}
            whileHover="hover"
            animate={pulseAnimation as any}
          >
            <motion.div
              className="relative"
              whileHover={{
                filter: "drop-shadow(0 20px 40px rgba(0, 70, 66, 0.15))",
              }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={rightImg}
                alt="Mission"
                className="w-full object-contain"
              />
              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#E0F8DE]/0 via-[#E0F8DE]/10 to-[#E0F8DE]/0 rounded-lg opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Top Right Overlay */}
          <motion.div
            className="absolute -top-36 -right-16 w-64 h-64 cursor-pointer z-20"
            variants={topRightVariants}
            animate={floatingAnimation as any}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={topRightMissionImgOnClick}
              alt="Top Right Overlay"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Bottom Left Overlay */}
          <motion.div
            className="absolute -bottom-32 -left-6 w-64 h-64 cursor-pointer z-20"
            variants={bottomLeftVariants}
            whileHover={bottomLeftHoverEffect}
            animate={floatingAnimation as any}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={tbottomLeftMissionImgOnClick}
              alt="Bottom Left Overlay"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Notification Stack Center */}
          <motion.div
            className="absolute top-1/2 left-4/5 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-40 z-30"
            variants={notificationContainerVariants}
          >
            {/* Top Notification */}
            <motion.div
              className="relative w-full h-12 cursor-pointer z-10"
              variants={notificationItemVariants}
              whileHover={notificationTopHoverEffect}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src={stackedOnImageCenter}
                alt="Notification Top"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Bottom Notification */}
            <motion.div
              className="relative w-full h-12 mt-1 cursor-pointer"
              variants={notificationItemVariants}
              whileHover={notificationBottomHoverEffect}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src={StackOnImageCenterBelow}
                alt="Notification Bottom"
                fill
                className="object-contain"
              />
              {/* Connection line between notifications */}
              <motion.div
                className="absolute top-0 left-1/2 w-0.5 h-2 bg-[#004642]/30 -translate-x-0.5"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
