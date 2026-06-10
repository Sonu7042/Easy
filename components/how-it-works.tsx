import React from 'react'

/* ---------- Step text block ---------- */
function StepText({
  step,
  title,
  desc,
}: {
  step: string
  title: string
  desc: string
}) {
  return (
    <div data-aos="fade-up">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand">
        {step}
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-foreground">
        {title}
      </h3>

      <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">
        {desc}
      </p>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:px-10">
      {/* Heading */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          How Eazzy Works
        </h2>

        <p className="mt-2 text-sm text-neutral-500">
          Your home service sorted in four simple steps it's that easy
        </p>
      </div>

      <div className="mt-16 space-y-24">
        {/* Step 1 */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <StepText
            step="STEP 01"
            title="Book in Seconds"
            desc="Select your service, view transparent pricing, and pick a time slot that works perfectly for your schedule."
          />

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex justify-center"
          >
            <img
              src="../customImgs/Step1.png"
              alt="Book Service"
              className="w-full max-w-lg object-contain transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="order-2 flex justify-center md:order-1"
          >
            <img
              src="../customImgs/Step2.png"
              alt="Expert Assigned"
              className="w-full max-w-lg object-contain transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="order-1 md:order-2">
            <StepText
              step="STEP 02"
              title="Eazzy Expert is Assigned"
              desc="We instantly match you with a verified, background-checked Eazzy expert in your local area."
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <StepText
            step="STEP 03"
            title="Service Delivered"
            desc="Sit back and relax while our professional arrives on time with the right tools to get the job done right."
          />

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex justify-center"
          >
            <img
              src="../customImgs/Step3.png"
              alt="Service Delivered"
              className="w-full max-w-lg object-contain transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Step 4 */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="order-2 flex justify-center md:order-1"
          >
            <img
              src="../customImgs/Step4.png"
              alt="Pay and Review"
              className="w-full max-w-lg object-contain transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="order-1 md:order-2">
            <StepText
              step="STEP 04"
              title="Pay & Review"
              desc="Securely pay online after the service is completed and rate your experience. 30-day guarantee included."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks