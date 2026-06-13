"use client";

import Image from "next/image";
import {
  BriefcaseBusiness,
  Wallet,
  TrendingUp,
  LifeBuoy,
} from "lucide-react";

const features = [
  {
    icon: BriefcaseBusiness,
    title: "Steady Jobs",
    description:
      "Continuous stream of service requests from verified customers.",
  },
  {
    icon: Wallet,
    title: "Reliable Payments",
    description:
      "On-time payments and transparent earnings tracking.",
  },
  {
    icon: TrendingUp,
    title: "Training & Growth",
    description:
      "Skill upgrading and business certification programs.",
  },
  {
    icon: LifeBuoy,
    title: "Dedicated Support",
    description:
      "24/7 priority help desk for all our partner needs.",
  },
];

export default function PartnerSection() {
  return (
    <section className="bg-[#fcfcfc] py-16 overflow-visible">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 mt-12">
        {/* Visual Rounded Card Background with Waves */}
        <div className="absolute inset-0 rounded-[32px] bg-[#B31D2C] overflow-hidden shadow-xl">
          <Image
            src="/partnerbg.svg"
            alt="Background pattern"
            fill
            priority
            className="object-cover object-center pointer-events-none opacity-95"
          />
        </div>

        {/* Content Overlay Grid */}
        <div className="relative z-10 grid lg:grid-cols-[1fr_420px] gap-8 items-center min-h-[470px]">

          {/* Left Text Block & Features */}
          <div className="p-6 sm:p-8 lg:p-12">
            <h2 className="text-white text-3xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
              Grow Your Business With Eazzy
            </h2>

            <p className="text-white/90 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
              Join a trusted network of professionals and access steady work opportunities and growth support.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mt-10">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center shrink-0 border border-white/10">
                      <Icon
                        size={20}
                        className="text-white"
                      />
                    </div>

                    <div>
                      <h3 className="text-white font-bold text-sm sm:text-base">
                        {item.title}
                      </h3>

                      <p className="text-white/80 text-xs sm:text-sm mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="mt-10 bg-white text-[#b1182f] hover:bg-white/95 font-bold px-8 py-3.5 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Become a Partner
            </button>
          </div>

          {/* Right Technician Photo (with pop-out effect on desktop) */}
          {/* <div className="relative h-[290px] lg:h-[470px] w-full self-end">
            <div className="absolute right-[-38.5px] bottom-0 w-full lg:w-[460px] h-[330px] lg:h-[670px] z-20">
              <Image
                src="/partnerboy.png"
                alt="Eazzy Technician"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div> */}
          <div className="relative h-[290px] lg:h-[470px] w-full self-end">
            <div className="absolute right-[-38.5px] bottom-0 w-full lg:w-[460px] h-[330px] lg:h-[670px] z-20 overflow-hidden rounded-br-[38px]">
              <Image
                src="/partnerboy.png"
                alt="Eazzy Technician"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}