"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { PersonCard } from "@/Layout/cards/PeopleCard";
import { FormHeader } from "@/Layout/typo/formheader";
import { PeopleData } from "@/Providers/data/data";

export const OurServicePage = () => {
  return (
    <section className="bg-black text-white pt-12 ">
      <div className="flex justify-center items-center">
        <FormHeader
          pillText="THOSE WE SERVE"
          title="#HumansofCREDICORP"
          isGradient
          description="We serve the everyday heroes shaping Nigeria’s future — one credit story at a time."
        />
      </div>

      <div className="mt-24">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000}
          //   allowTouchMove={false} // Optional: disable manual dragging
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {PeopleData.map((person, index) => (
            <SwiperSlide key={index}>
              <PersonCard
                imageUrl={person.img}
                name={person.name}
                profession={person.role}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
