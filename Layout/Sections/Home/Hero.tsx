"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HomeHeroSlideShowItems } from "@/Providers/data/data";
import { CardContainer } from "@/Layout/cards/CardContainer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard } from "lucide-react";

export const HomeHero: any = () => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  const delay = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevious(current);
      setCurrent((prev) => (prev + 1) % HomeHeroSlideShowItems.length);
    }, delay);
    return () => clearInterval(interval);
  }, [current]);

  const handleDotClick = (index: number) => {
    setPrevious(current);
    setCurrent(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Keep previous slide visible underneath */}
      <div className="absolute top-0 left-0 w-full h-full">
        <CardContainer bgImage={HomeHeroSlideShowItems[previous].img.src}>
          <div className="flex items-center justify-between h-full opacity-0">
            {/* Empty div to maintain structure */}
          </div>
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
          <CardContainer bgImage={HomeHeroSlideShowItems[current].img.src}>
            <div className="flex flex-col md:flex-row items-center justify-between h-full w-full">
              {/* Text Content with animations */}
              <motion.div
                className="max-w-full md:max-w-4xl space-y-4 md:space-y-6 p-4 md:p-8 mt-16 md:mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-[30px] md:text-4xl lg:text-[60px] text-[#FFF441] font-bold leading-tight">
                  {HomeHeroSlideShowItems[current].heroText}{" "}
                  <span className="text-[#FFF] block mt-1">
                    {HomeHeroSlideShowItems[current].coloredText}
                  </span>
                </h1>
                <p className="text-base sm:text-lg max-w-full md:max-w-lg">
                  {HomeHeroSlideShowItems[current].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:space-x-3 w-full sm:w-auto">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto text-sm md:text-base justify-between px-4"
                  >
                    <span>Access Your Credit</span>
                    <CreditCard className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-sm md:text-base justify-between px-4"
                  >
                    <span>Access Your Credit</span>
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </div>
              </motion.div>

              {/* Dot Navigation */}
              <div className="hidden md:flex flex-col gap-3 pr-4 absolute right-4 top-1/2 transform -translate-y-1/2">
                {HomeHeroSlideShowItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === i ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* Mobile Dot Navigation */}
              <div className="flex md:hidden flex-row gap-3 justify-center w-full absolute bottom-8 left-0">
                {HomeHeroSlideShowItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === i ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContainer>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
