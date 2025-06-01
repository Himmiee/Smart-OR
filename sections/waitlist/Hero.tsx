"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircleIcon, Loader2 } from "lucide-react";
import React, { useState } from "react";
// import { SiMailgun } from "react-icons/si";
import { useForm } from "react-hook-form";
// import { FaPhone } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { submitToWaitlist } from "@/data";
import { CustomToast } from "@/layout/toaster";

interface FormData {
  email: string;
}

export const WaitlistHeroSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    const result = await submitToWaitlist(data.email);

    toast.custom((t) => (
      <CustomToast
        t={t}
        message={result.message}
        type={result.success ? "success" : "error"}
      />
    ));

    if (result.success) reset();
    setIsLoading(false);
  };

  return (
    <section className="text-white w-full pt-44 md:pt-0 md:h-screen flex flex-col px-4 py-8 ">
      <div className="flex-1 flex flex-col justify-center items-start max-w-full xl:max-w-[550px]">
        <p className="border-l-2 border-white px-4 text-lg md:text-xl xl:text-2xl font-eczar">
          Join Now
        </p>
        <div className="mt-6">
          <h1 className="text-5xl md:text-6xl xl:text-[90px] font-medium leading-[1.1] font-eczar">
            Transforming <br /> OR using VR
          </h1>
          <p className="text-sm md:text-base font-figtree mt-2 leading-relaxed">
            Our aim is to provide world-class simulation technology for various
            surgical procedures using immersive virtual reality.
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircleIcon size={16} /> Free early access
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon size={16} /> Priority Scheduling
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-14 w-full">
          <p className="text-sm md:text-base font-eczar pb-2">
            Join the future of surgical training
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="flex w-full">
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Your Email Here ..."
                className="rounded-none flex-1 h-12 md:h-14 bg-transparent focus:bg-black/60"
                type="email"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-white text-[#141C5D] w-24 md:w-32 border hover:text-white cursor-pointer hover:bg-[#141C5D] h-12 md:h-14 rounded-none whitespace-nowrap"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin text-lg" />
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </form>
        </div>
      </div>

      {/* <div className="w-full font-figtree py-4 md:py-6 xl:py-6 mt-auto">
        <div className="max-w-full xl:max-w-[550px]">
          <div className="border-t border-white pt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p className="font-medium text-sm md:text-base">Contact Info :</p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="flex items-center gap-2">
                <SiMailgun size={16} className="md:w-[18px] md:h-[18px]" />
                <span className="text-sm md:text-base">
                  invulnerableexile@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-white flex items-center justify-center">
                  <FaPhone size={8} className="md:w-[10px] md:h-[10px]" />
                </div>
                <span className="text-sm md:text-base">+234 902 164 5907</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};
