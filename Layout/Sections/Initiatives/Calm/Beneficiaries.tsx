"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
} from "@/components/ui/carousel";

export const BeneficiaryComponent = () => {
  //   const testimonials = [
  //     {
  //       id: 1,
  //       title: "Here directly from some CREDICORP beneficiaries.",
  //       views: "2,284",
  //     },
  //   ];

  return (
    <div className="w-full  py-12 px-6  bg-[#FFFFE7]">
      <div className="flex max-w-screen-xl mx-auto flex-col md:flex-row-reverse items-center gap-8">
        <div className="w-full md:w-1/2">
          <Carousel className="relative">
            <CarouselContent>
              <CarouselItem>
                <div className="flex justify-center">
                  <div className="rounded-3xl p-[8px] bg-black">
                    <div className="rounded-2xl overflow-hidden bg-white border-[3px] border-black">
                      <div
                        className="relative"
                        style={{ width: "232px", height: "357px" }}
                      >
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 ml-1 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent"></div>
                          </div>
                          <div className="absolute bottom-2 left-2">
                            <span className="text-xs text-white font-medium">
                              2,284
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>

            {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6">
              <CarouselPrevious className="h-10 w-10" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6">
              <CarouselNext className="h-10 w-10" />
            </div> */}
          </Carousel>
        </div>

        <div className="w-full md:w-1/2 text-left ">
          <h2 className="text-3xl font-bold mb-4 lg:px-6">
            Here directly from some
            <br />
            CREDICORP beneficiaries.
          </h2>
        </div>
      </div>
    </div>
  );
};
