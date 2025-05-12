"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FormHeader } from "@/Layout/typo/formheader";
import Image from "next/image";
import { BankImg } from "@/Providers/data/data";

export const PartnersPage = () => {
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="space-y-14 mx-auto max-w-screen-xl">
        <div>
          <FormHeader
            pillText="OUR PARTNERS"
            title="Partnering Financial Institutions"
            description=""
            alignStart
            isDarkPill={false}
          />
        </div>

        <div className="">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={1500}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            {BankImg.map((bankImg, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center">
                  <Image
                    src={bankImg}
                    alt={`Bank ${index}`}
                    className="max-w-"
                    width={200}
                    height={200}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
