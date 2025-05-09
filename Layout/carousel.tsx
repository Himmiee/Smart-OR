import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

type Testimonial = {
  img: string | StaticImageData;
  text: string;
  name: string;
  role: string;
};

interface CarouselComponentProps {
  testimonials: Testimonial[];
}

export const CarouselComponent: React.FC<CarouselComponentProps> = ({
  testimonials,
}) => {
  return (
    <div className="w-full max-w-screen-xl rounded-lg ">
      <Carousel>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-x-8 md:space-y-0">
                <div className="flex flex-col items-center w-full md:w-3/5">
                  <div>
                    <p className="text-left text-2xl md:text-3xl max-w-lg mb-4 px-4 md:px-0">
                      {testimonial.text}
                    </p>
                    <div className="text-left flex items-center gap-2 text-md px-4 md:px-0">
                      <p className="max-w-sm">{testimonial.name}</p>
                      <p className="">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start items-start w-3/4 md:w-[30%]">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full mx-auto"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-1/2  -left-0 lg:-left-10 transform -translate-y-1/2 lg:p-2 text-black rounded-full md:bg-black/70 lg:bg-transparent md:text-white lg:text-black ">
          <RiArrowLeftSLine />
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 -right-0 lg:-right-10 transform -translate-y-1/2 lg:p-2 text-black rounded-full md:bg-black/70 lg:bg-transparent md:text-white lg:text-black ">
          <RiArrowRightSLine />
        </CarouselNext>
      </Carousel>
    </div>
  );
};
