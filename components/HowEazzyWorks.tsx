"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Book in Seconds",
    description:
      "Select your service, view transparent pricing, and pick a time slot that works perfectly for your schedule.",
    image: "/stp1.jpg",
  },
  {
    id: 2,
    title: "Eazzy Expert is Assigned",
    description:
      "We instantly match you with a verified, background-checked Eazzy expert in your local area.",
    image: "/customImgs/Step2.png",
  },
  {
    id: 3,
    title: "Service Delivered",
    description:
      "Sit back and relax while our professional arrives on time with the right tools to get the job done right.",
    image: "/stp2.png",
  },
  {
    id: 4,
    title: "Pay & Review",
    description:
      "Securely pay online after the service is completed and rate your experience. 30-day guarantee included.",
    image: "/stp3.png",
  },
];

export default function HowEazzyWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const scrollRange = rect.height - viewHeight;
      if (scrollRange <= 0) return;

      const scrollProgress = -rect.top / scrollRange;
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      
      const stepIndex = Math.min(
        steps.length,
        Math.max(1, Math.ceil(clampedProgress * steps.length))
      );

      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[360vh]  border-b bg-[#F9F9F9] border-neutral-100">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* Background Decorative Glows */}
        <div className="absolute top-0 left-1/4 size-[400px] rounded-full bg-brand/3 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 size-[400px] rounded-full bg-orange-500/3 blur-[90px] pointer-events-none" />

        {/* Header (Fades in/out or stays static - staying static is cleaner) */}
        <div className="text-center mb-8 z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            How Eazzy Works
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            Your home service sorted in four simple steps
          </p>
        </div>

        {/* Active Step Panel */}
        <div className="relative w-full max-w-xl h-[420px] md:h-[460px] z-10">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <div
                key={step.id}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                    : "opacity-0 translate-y-10 scale-95 pointer-events-none"
                }`}
              >
                {/* Step Badge */}
                <span className="inline-flex items-center justify-center px-4 py-1.5   text-[11px] font-bold uppercase tracking-wider ">
                  Step {step.id}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight text-center leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-center text-xs md:text-sm text-neutral-500 leading-relaxed max-w-md mx-auto">
                  {step.description}
                </p>

                {/* Image Card matching reference UI */}
                <div className="mt-6 relative w-full aspect-[4/3] max-w-md overflow-hidden rounded-2xl border border-neutral-100 shadow-lg bg-white transition-shadow duration-500 hover:shadow-xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Dot Navigator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/80 backdrop-blur border border-neutral-150 px-4 py-2.5 rounded-full shadow-md z-10">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => {
                if (containerRef.current) {
                  const rect = containerRef.current.getBoundingClientRect();
                  const scrollRange = rect.height - window.innerHeight;
                  const targetScroll =
                    window.scrollY +
                    rect.top +
                    (scrollRange * (step.id - 0.5)) / steps.length;
                  window.scrollTo({ top: targetScroll, behavior: "smooth" });
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeStep === step.id ? "bg-red-500 w-6" : "bg-neutral-300 hover:bg-neutral-450 w-2"
              }`}
              aria-label={`Go to step ${step.id}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}