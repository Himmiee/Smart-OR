"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";
import { offerData } from "@/Providers/data/data";

export const OffersPage = () => {
  return (
    <section className="py-4 bg-[#F1F5F9]">
      <div className=" mx-auto max-w-screen-xl">
        <div className="swiper-container">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={1500}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".swiper-custom-pagination", 
            }}
            className="relative"
          >
            {offerData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center gap-4 pt-2">
                  {" "}
                  {/* Added padding bottom to create space */}
                  <Image
                    src={item.img}
                    alt={`Bank ${index}`}
                    className="max-w-full"
                  />
                  <p className="font-medium text-lg text-[#2D2F31]">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination container - positioned absolutely at bottom */}
          <div className="swiper-custom-pagination absolute bottom-0 w-full flex justify-center mb-2"></div>
        </div>
      </div>

      {/* Swiper Pagination Styling */}
      <style jsx global>{`
        .swiper-container {
          position: relative;
          padding-bottom: 30px; 
        }

        .swiper-custom-pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .swiper-pagination-bullet {
          background-color: #cbd5e1;
          opacity: 1;
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 50%;
          cursor: pointer;
        }

        .swiper-pagination-bullet-active {
          background-color: #334155;
        }
      `}</style>
    </section>
  );
};
