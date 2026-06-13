"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    review:
      "The AC deep cleaning service was fantastic. The technician arrived on time and was very thorough. Eazzy makes home maintenance so simple!",
    name: "Anita Sharma",
    city: "New Delhi",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    review:
      "Transparent pricing is what I like most about Eazzy. No bargaining, no hidden costs. Professional service every single time.",
    name: "Rahul Verma",
    city: "Gurugram",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    review:
      "Emergency plumbing issue was resolved under an hour. Truly life-saving service when you need it the most.",
    name: "Sarah Joseph",
    city: "New Delhi",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <p className="text-[#e63946] text-sm font-medium uppercase tracking-[2px] mb-8">
          Review
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#ece7e7] rounded-[28px] p-8 min-h-[320px] flex flex-col justify-between transition-all duration-300 hover:border-[#d9d9d9]"
            >
              {/* Top Content */}
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="fill-[#c41e3a] text-[#c41e3a]"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-[#2d2d2d] text-[18px] leading-8">
                  "{item.review}"
                </p>
              </div>

              {/* User */}
              <div className="flex items-center gap-4 mt-10">
                <div className="relative w-14 h-14 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-[#222] text-[18px]">
                    {item.name}
                  </h4>

                  <p className="text-[#7a7a7a] text-sm">
                    {item.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}