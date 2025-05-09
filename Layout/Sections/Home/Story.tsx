"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Ellipse } from "@/Providers/data/data";
import Image, { StaticImageData } from "next/image";

const avatarPlaceholder = Ellipse[2];

interface AvatarProps {
  src: string | StaticImageData;
  index: number;
  total: number;
  radius: number;
  size: number;
}

interface AvatarCircleProps {}

const Avatar = ({ src, index, total, radius, size }: AvatarProps) => {
  // Calculate position on circle with added randomness to the angle
  const randomOffset = Math.random() * 0.2 - 0.1; // Random offset between -0.1 and 0.1 (about 10% variance)
  const angle = (index / total) * Math.PI * 2 + randomOffset; // Adjusted angle with randomness
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute"
      style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <div
        className="rounded-full overflow-hidden border-2 border-white bg-gray-200 shadow-lg"
        style={{ width: size, height: size }}
      >
        <Image
          src={src || avatarPlaceholder}
          alt={`Team member ${index + 1}`}
          className="w-full h-full object-cover opacity-15 "
          width={size}
          height={size}
        />
      </div>
    </motion.div>
  );
};

// Main component
export const AvatarCircle = ({}: AvatarCircleProps) => {
  const [showAll, setShowAll] = useState(false);
  const [isInitialState, setIsInitialState] = useState(true);
  const [dimensions, setDimensions] = useState({
    circleRadiusInner: 120,
    circleRadiusOuter: 250,
    avatarSize: 80,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({
          circleRadiusInner: 100,
          circleRadiusOuter: 180,
          avatarSize: 48,
        });
      } else if (width < 1024) {
        setDimensions({
          circleRadiusInner: 140,
          circleRadiusOuter: 220,
          avatarSize: 64,
        });
      } else {
        setDimensions({
          circleRadiusInner: 250,
          circleRadiusOuter: 350,
          avatarSize: 80,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAll(true);
      setIsInitialState(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const totalAvatars = Ellipse.length;
  const { circleRadiusInner, circleRadiusOuter, avatarSize } = dimensions;

  return (
    <div className="w-full lg:min-h-screen bg-[#F1F5F9] flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-4xl h-screen max-h-[600px] flex items-center justify-center">
        {/* Initial center avatar */}
        {isInitialState && (
          <motion.div
            className="absolute z-10"
            animate={showAll ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="rounded-full overflow-hidden border-2 border-white bg-gray-200 shadow-lg"
              style={{ width: avatarSize + 16, height: avatarSize + 16 }}
            >
              <Image
                src={Ellipse[0]}
                alt="Team member"
                className="w-full h-full object-cover"
                width={avatarSize + 16}
                height={avatarSize + 16}
              />
            </div>
          </motion.div>
        )}

        {/* Inner Circle */}
        <motion.div
          className="absolute"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{
            rotate: [0, 180, 0], // Move back and forth between 0 and 180 degrees
            opacity: isInitialState ? 0 : 1,
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 6, // Duration for oscillation
              ease: "easeInOut", // Smooth oscillation
            },
            opacity: { duration: 1 },
          }}
        >
          {/* Inner circle avatars */}
          {Ellipse.map((avatar, index) => (
            <Avatar
              key={`inner-${index}`}
              src={avatar}
              index={index}
              total={totalAvatars}
              radius={circleRadiusInner}
              size={avatarSize}
            />
          ))}
        </motion.div>

        {/* Outer Circle */}
        <motion.div
          className="absolute"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{
            rotate: [0, 180, 0], // Move back and forth between 0 and 180 degrees
            opacity: isInitialState ? 0 : 1,
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 8, // Duration for oscillation
              ease: "easeInOut", // Smooth oscillation
            },
            opacity: { duration: 1 },
          }}
        >
          {/* Outer circle avatars */}
          {Ellipse.map((avatar, index) => (
            <Avatar
              key={`outer-${index}`}
              src={avatar}
              index={index + 2} // Offset positioning
              total={totalAvatars}
              radius={circleRadiusOuter}
              size={avatarSize}
            />
          ))}
        </motion.div>

        {/* Center content (text and button) */}
        <motion.div
          className="text-center z-20 px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            showAll ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="bg-green-100 text-green-800 rounded-full px-4 py-1 text-sm mb-4 inline-block">
            OUR PEOPLE
          </div>
          <h1 className="text-4xl md:text-3xl font-bold mb-2">
            We are a force for change,
          </h1>
          <h2 className="text-3xl md:text-3xl font-bold mb-8">
            united by a shared vision
          </h2>

          <motion.button
            className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-[#008751] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Story
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
