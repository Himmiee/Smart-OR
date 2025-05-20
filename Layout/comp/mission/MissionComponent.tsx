"use client";
import { motion } from "framer-motion";
import ServiceCard from "@/Layout/cards/ServiceCard";
import { defaultServiceItems } from "@/Providers/data/data";
import {
  missionTextVariants,
  staggerChildren,
  serviceCardVariants,
} from "@/Layout/variants/MissionVariants";

export const MissionSubComponent = () => {
  return (
    <motion.section
      className="space-y-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerChildren}
    >
      <div className="space-y-2">
        <motion.p
          className="p-2 bg-[#E0F8DE] text-[#004642] rounded-full w-36 text-center font-medium"
          variants={missionTextVariants}
          whileHover={{ scale: 1.05, backgroundColor: "#d5f5d3" }}
          whileTap={{ scale: 0.98 }}
        >
          OUR MISSION
        </motion.p>
        <div className="text-[#2D2F31] max-w-2xl">
          <motion.p
            className="text-4xl md:text-[50px] font-bold leading-snug"
            variants={missionTextVariants}
          >
            Leading the Charge for Economic Inclusion
          </motion.p>
          <motion.p className="mt-4 text-lg" variants={missionTextVariants}>
            The Nigerian Consumer Credit Corporation (CREDICORP) is a
            Development Finance Institution (DFI) of the Federal Government of
            Nigeria, established with one mandate: To democratise access to
            consumer credit for Nigeria’s working population. We achieve our
            mandate via three pillars:
          </motion.p>
        </div>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        variants={staggerChildren}
      >
        {defaultServiceItems.map((item, index) => (
          <motion.div
            key={item.id}
            whileHover="hover"
            whileTap="tap"
            transition={{ delay: index * 0.1 }}
          >
            <ServiceCard
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default MissionSubComponent;
