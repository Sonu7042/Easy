"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

const cards: CardItem[] = [
  {
    id: 1,
    title: "Home Repair",
    category: "Repairs",
    description: "Professional repair services for your home.",
    image: "/hero1.png",
  },
  {
    id: 2,
    title: "Cleaning",
    category: "Cleaning",
    description: "Deep cleaning and maintenance solutions.",
    image: "/hero2.png",
  },
  {
    id: 3,
    title: "Security",
    category: "Security",
    description: "Modern security systems and monitoring.",
    image: "/hero3.png",
  },
  {
    id: 4,
    title: "Electrician",
    category: "Electrical",
    description: "Certified electrical installation and repairs.",
    image: "/hero4.png",
  },
  {
    id: 5,
    title: "Plumbing",
    category: "Plumbing",
    description: "Emergency and regular plumbing support.",
    image: "/hero5.png",
  },
];

export default function HomeHero() {
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Handle scroll to update active index for mobile carousel dots
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.offsetWidth * 0.8; // Card width is 80vw
    const index = Math.round(scrollPosition / (itemWidth + 16)); // width + gap
    setActiveIndex(Math.max(0, Math.min(cards.length - 1, index)));
  };

  // Define offsets for the desktop/tablet arched curve
  const offsetClasses = [
    "translate-y-[12px] sm:translate-y-[88px] md:translate-y-[117px] lg:translate-y-[200px]", // Card 1
    "translate-y-[6px] sm:translate-y-[58px] md:translate-y-[77px] lg:translate-y-[96px]", // Card 2
    "translate-y-0 sm:translate-y-[28px] md:translate-y-[37px] lg:translate-y-[25px]", // Card 3
    "translate-y-[6px] sm:translate-y-[58px] md:translate-y-[77px] lg:translate-y-[96px]", // Card 4
    "translate-y-[12px] sm:translate-y-[88px] md:translate-y-[117px] lg:translate-y-[200px]", // Card 5
  ];

  // Custom floating motion profiles:
  // Card 1: Up 25px
  // Card 2: Down 20px
  // Card 3: Down 30px
  // Card 4: Up 15px
  // Card 5: Up 25px
  const floatYValues = [
    [0, -15, 0],
    [0, 10, 0],
    [0, -15, 0],
    [0, 15, 0],
    [0, 10, 0],
  ];

  const mobileFloatYValues = [
    [0, -12, 0],
    [0, 10, 0],
    [0, 15, 0],
    [0, -7, 0],
    [0, -12, 0],
  ];

  return (
    <section className="relative w-full bg-white pt-16 pb-20 sm:pt-20 sm:pb-36 md:pt-24 md:pb-44 lg:pt-28 lg:pb-20 overflow-hidden flex flex-col items-center justify-center">
      {/* Hero Content Wrapper */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col items-center text-center">
        {/* Main Title and Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight md:leading-[1.15]"
        >
          Everything Your Home Needs
          <br />
          <span className="text-[#E25C5D]">All In One Place</span>
        </motion.h1>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-sm sm:text-sm text-neutral-500 max-w-[280px] sm:max-w-md md:max-w-xl lg:max-w-2xl leading-relaxed"
        >
          Repairs, maintenance, cleaning, security, and expert support delivered
          through a trusted platform built for modern homeowners.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-row justify-center gap-4 mt-8 sm:mt-10"
        >
          <button className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-[14px] bg-[#A31D2A] text-white text-sm sm:text-base font-medium hover:bg-[#861722] hover:shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer">
            Book a Service
          </button>

          <button className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-[14px] border border-[#E5E5EA] bg-white text-[#1C1C1E] text-sm sm:text-base font-medium hover:bg-neutral-50 hover:shadow-sm active:scale-[0.98] transition-all duration-200 cursor-pointer">
            Explore Services
          </button>
        </motion.div>

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET VIEW: Arched Cards Grid (Visible sm and above) */}
        {/* ========================================================================= */}
        <div className="hidden sm:flex justify-center items-start gap-4 md:gap-6 lg:gap-8 mt-24 md:mt-28 w-full max-w-[1400px] px-4 sm:h-[270px] md:h-[360px] lg:h-[450px]">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.08,
                ease: "easeOut",
              }}
              className={offsetClasses[index]}
            >
              <motion.div
                animate={{
                  y: floatYValues[index],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
                whileHover={{
                  scale: 1.05,
                  filter: "brightness(1.08)",
                }}
                onClick={() => setSelectedCard(card)}
                className="cursor-pointer relative w-[100px] md:w-[140px] lg:w-[211px] h-[122px] md:h-[171px] lg:h-[258px] rounded-[8px] md:rounded-[11px] lg:rounded-[14px] bg-[#5C060B] shadow-[0px_4px_12px_rgba(0,0,0,0.3)]  transition-all duration-100 ease-in-out overflow-hidden flex flex-col justify-end p-3 md:p-4 lg:p-6 text-left"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-10" />

                {/* Card Text Content */}
                {/* <div className="relative z-20">
                  <span className="text-white/70 text-[9px] md:text-[10px] lg:text-xs font-semibold uppercase tracking-wider">
                    {card.category}
                  </span>
                  <h3 className="text-white font-bold text-xs md:text-sm lg:text-lg mt-0.5 md:mt-1">
                    {card.title}
                  </h3>
                </div> */}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Horizontal Swipeable Carousel (Visible below sm) */}
        {/* ========================================================================= */}
        <div className="block sm:hidden w-full mt-12 px-0">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-4 px-[10vw] py-4 snap-x snap-mandatory scrollbar-none w-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="snap-center shrink-0 w-[80vw] h-[75vw] max-h-[280px] rounded-2xl bg-[#5C060B] shadow-[0_12px_24px_-8px_rgba(84,5,10,0.35)] relative overflow-hidden flex flex-col justify-end text-left"
                onClick={() => setSelectedCard(card)}
              >
                {/* Floating Wave Motion Effect on Mobile Card Background */}
                <motion.div
                  animate={{
                    y: mobileFloatYValues[index],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15,
                  }}
                  className="absolute inset-0 w-full h-full flex flex-col justify-end p-6"
                >
                  {/* Background Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-10" />

                  {/* Card Text Content */}
                  {/* <div className="relative z-20">
                    <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                      {card.category}
                    </span>
                    <h3 className="text-white font-bold text-xl mt-1 leading-tight">
                      {card.title}
                    </h3>
                  </div> */}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Indicators / Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {cards.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "bg-[#A31D2A] w-4" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Details */}
      <AnimatePresence>
        {selectedCard && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-[3px] z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
            />

            {/* Modal Dialog */}
            <motion.div
              className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-md bg-white p-8 rounded-2xl sm:rounded-3xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)]"
              initial={{
                opacity: 0,
                scale: 0.95,
                x: "-50%",
                y: "-45%",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: "-50%",
                y: "-50%",
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                x: "-50%",
                y: "-45%",
              }}
              transition={{ type: "spring", duration: 0.4 }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Visual Accent */}
                <div className="w-12 h-12 rounded-full bg-[#A31D2A]/10 flex items-center justify-center mb-4 text-[#A31D2A]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900">
                  {selectedCard.title}
                </h3>

                <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                  {selectedCard.description}
                </p>

                <div className="mt-8 flex gap-3 w-full">
                  <button
                    onClick={() => {
                      setSelectedCard(null);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#A31D2A] text-white text-sm font-medium hover:bg-[#861722] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Book Now
                  </button>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="flex-1 py-3 px-4 rounded-xl border border-neutral-200 bg-white text-neutral-700 text-sm font-medium hover:bg-neutral-50 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
