"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { BenefitsHeroSlideShowItems } from "@/Providers/data/data";
import { CardContainer } from "@/Layout/cards/CardContainer";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export const BenefitSubComponent: any = () => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  const delay = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevious(current);
      setCurrent((prev) => (prev + 1) % BenefitsHeroSlideShowItems.length);
    }, delay);
    return () => clearInterval(interval);
  }, [current]);

  const handleArrowClick = (direction: "left" | "right") => {
    setPrevious(current);
    if (direction === "left") {
      setCurrent(
        (prev) =>
          (prev - 1 + BenefitsHeroSlideShowItems.length) %
          BenefitsHeroSlideShowItems.length
      );
    } else {
      setCurrent((prev) => (prev + 1) % BenefitsHeroSlideShowItems.length);
    }
  };

  return (
    <div className="relative h-96 md:h-[650px] w-full overflow-hidden flex justify-center items-center">
      {/* Keep previous slide visible underneath */}
      <div className="absolute top-0 left-0 w-full h-full">
        <CardContainer bgImage={BenefitsHeroSlideShowItems[previous].img.src}>
          <div className="flex items-center justify-between h-full opacity-0"></div>
        </CardContainer>
      </div>

      {/* Animate current slide on top */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <CardContainer bgImage={BenefitsHeroSlideShowItems[current].img.src}>
            <div className="flex flex-col md:flex-row items-center justify-center h-full w-full">
              {/* Text Content with animations */}
              <motion.div
                className="max-w-full md:max-w-4xl space-y-4 md:space-y-6 p-3.5 md:p-8 mt-32 md:mt-96"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="justify-center items-center flex flex-col space-y-4">
                  <h1 className="text-[30px] md:text-4xl lg:text-[50px] text-[#fff] text-center font-bold leading-tight">
                    {BenefitsHeroSlideShowItems[current].heroText}{" "}
                    <span className="text-[#FFF] block mt-1"></span>
                  </h1>
                  <p className="text-base sm:text-lg max-w-full md:max-w-lg text-center hidden">
                    {BenefitsHeroSlideShowItems[current].description}
                  </p>

                  <div className="bg-white text-black w-32 rounded-full text-center h-10 flex items-center justify-center mx-auto">
                    {BenefitsHeroSlideShowItems[current].btnText}
                  </div>
                </div>
              </motion.div>
            </div>
          </CardContainer>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}

      <motion.div
        className="absolute left-6 md:left-12 md:top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={() => handleArrowClick("left")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center justify-center w-10 h-10 backdrop-blur-sm border-[1px] cursor-pointer border-white text-white rounded-full">
          <RiArrowLeftSLine size={24} />
        </div>
      </motion.div>

      {/* Right Arrow */}
      <motion.div
        className="absolute right-6 md:right-12 md:top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={() => handleArrowClick("right")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center justify-center w-10 h-10 backdrop-blur-sm border-[1px] cursor-pointer border-white text-white rounded-full">
          <RiArrowRightSLine size={24} />
        </div>
      </motion.div>
    </div>
  );
};
