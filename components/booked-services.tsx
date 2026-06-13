

"use client";

import Image from "next/image";
import { ArrowRight, Star, Zap } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Air Cooler Repair & Maintenance",
    image: "/AirCooler.png",
    rating: "4.88",
    reviews: "12k+",
    price: 99,
    oldPrice: 149,
    tag: "Save 34%",
  },
  {
    id: 2,
    title: "Professional TV Wall Mounting",
    image: "/ProfessionalTV.png",
    rating: "4.92",
    reviews: "8.5k",
    price: 249,
    oldPrice: 399,
    tag: "Best Seller",
  },
  {
    id: 3,
    title: "Kitchen Deep Cleaning",
    image: "/KitchenDeep.png",
    rating: "4.75",
    reviews: "25k+",
    price: 499,
    oldPrice: 699,
    tag: "Trending",
  },
  {
    id: 4,
    title: "Full Home Sanitization",
    image: "/FullHomeSanitization.png",
    rating: "4.82",
    reviews: "15k",
    price: 129,
    oldPrice: 249,
    tag: "48% Off",
  },
  {
    id: 5,
    title: "AC Installation Service",
    image: "/ACinstallationService.png",
    rating: "4.89",
    reviews: "18k",
    price: 199,
    oldPrice: 299,
    tag: "Popular",
  },
  {
    id: 6,
    title: "Washing Machine Repair",
    image: "/WashingMachineRepair.png",
    rating: "4.90",
    reviews: "22k",
    price: 149,
    oldPrice: 249,
    tag: "Top Rated",
  },
];

export  function BookedServices() {
  return (
    <section className="relative mt-16 lg:mt-20  bg-white]">
      {/* Decorative Shapes */}
      <div className="absolute left-0 top-0 h-full w-38  pointer-events-none">
        <Image
          src="/service_bg.png"
          alt="Decorative Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-[420px_1fr] gap-16">
          {/* LEFT STICKY SECTION */}
          <div className="lg:sticky lg:top-[30vh] self-start h-fit flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[11px] uppercase tracking-[3px] text-red-400 font-medium">
              Felix Elite Select
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              Most booked services
            </h2>

            <p className="mt-5 text-neutral-600 leading-relaxed max-w-sm mx-auto lg:mx-0">
              Discover the high-demand professional services that our community
              trusts the most, curated for efficiency and quality.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 border border-red-400 text-red-500 px-6 py-3 rounded-xl font-medium hover:bg-red-50 transition cursor-pointer">
              View all services
              <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT SCROLLABLE CARDS */}
          <div className="pr-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-lg transition-all"
                >
                  {/* IMAGE */}
                  <div className="relative h-56">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-[11px] font-medium shadow">
                        <Zap
                          size={10}
                          className="fill-green-500 text-green-500"
                        />
                        Instant
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">
                    <div className="flex items-center gap-1 text-xs text-neutral-600">
                      <Star
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span>{service.rating}</span>
                      <span>({service.reviews})</span>
                    </div>

                    <h3 className="mt-2 text-xl font-semibold text-neutral-900 leading-snug min-h-[60px]">
                      {service.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">
                            ₹ {service.price}
                          </span>

                          <span className="text-neutral-400 line-through text-sm">
                            ₹ {service.oldPrice}
                          </span>
                        </div>

                        <p className="text-green-600 text-xs mt-1">
                          {service.tag}
                        </p>
                      </div>

                      <button className="bg-[#c91d35] hover:bg-[#b1182f] text-white px-5 py-2 rounded-lg font-medium text-sm transition">
                        Add +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}