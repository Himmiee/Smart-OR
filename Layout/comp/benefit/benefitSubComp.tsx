"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { BenefitsHeroSlideShowItems } from "@/Providers/data/data";
import { CardContainer } from "@/Layout/cards/CardContainer";


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

  return (
    <div className="relative h-[650px] w-full overflow-hidden flex justify-center items-center">
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
                className="max-w-full md:max-w-4xl space-y-4 md:space-y-6 p-3.5 md:p-8 mt-32 md:mt-72"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="justify-center items-center flex flex-col space-y-4">
                  <h1 className="text-[30px] md:text-4xl lg:text-[60px] text-[#fff] text-center font-bold leading-tight">
                    {BenefitsHeroSlideShowItems[current].heroText}{" "}
                    <span className="text-[#FFF] block mt-1"></span>
                  </h1>
                  <p className="text-base sm:text-lg max-w-full md:max-w-lg text-center">
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
    </div>
  );
};
