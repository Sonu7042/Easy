"use client";

import Image from "next/image";

const brands = [
  {
    name: "LG",
    logo: "/partnerlogo/lg.png",
  },
  {
    name: "Daikin",
    logo: "/partnerlogo/daikin.png",
  },
  {
    name: "Lloyd",
    logo: "/partnerlogo/lloyd.png",
  },
  {
    name: "Mitsubishi Electric",
    logo: "/partnerlogo/mitsubishi.png",
  },
  {
    name: "O General",
    logo: "/partnerlogo/general.png",
  },
  {
    name: "Samsung",
    logo: "/partnerlogo/samsung.png",
  },
  {
    name: "Voltas",
    logo: "/partnerlogo/voltas.png",
  },
  {
    name: "Blue Star",
    logo: "/partnerlogo/bluestar.png",
  },
  {
    name: "Hitachi",
    logo: "/partnerlogo/hitachi.png",
  },
];

export default function TrustedBrands() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[20px] md:text-[24px] font-semibold text-[#222]">
            Trusted By Homeowners Across India
          </h2>

          <p className="mt-2 text-[13px] text-[#7b7b7b]">
            We service all major brands with authorized experts
          </p>
        </div>

        {/* Logo Grid */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-20 gap-x-8 md:gap-x-20 items-center justify-items-center">
            {/* {brands.map((brand , index) => (
              <div
                key={brand.name}
                className="relative w-[120px] h-[40px] md:w-[180px] md:h-[60px]"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  sizes="180px"
                  className="object-contain transition duration-300 hover:scale-105"
                />
              </div>
            ))} */}
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={`relative w-[120px] h-[40px] md:w-[180px] md:h-[60px] ${
                  index === 2 || index === 4 ? "scale-200" : ""
                }`}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  sizes="180px"
                  className="object-contain transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
