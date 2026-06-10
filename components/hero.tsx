import { ChevronRight } from 'lucide-react'

const bigCategories = [
  {
    title: 'Ac & Appliance',
    desc: 'Repair, installation & maintenance for all major appliances.',
    img: '../customImgs/Ac.png',
    imgAlt: 'White air conditioner mounted on a red wall',
  },
  {
    title: 'Home Repair & Renovation',
    desc: 'Professional solutions for repairs, upgrades & home improvement.',
    img: '../customImgs/HomeRepair.png',
    imgAlt: 'Hammer and repair tools',
  },
  {
    title: 'Cleaning & Pest Control',
    desc: 'Deep cleaning and pest protection for a healthier home.',
    img: '../customImgs/cleaningAndPest.png',
    imgAlt: 'Pest control worker in protective suit',
  },
]

const smallCategories = [
  {
    title: 'Gadget Repair',
    desc: 'Quick and reliable repairs for your essential devices.',
    img: '../customImgs/budgetRepair.png',
    imgAlt: 'Tablet being repaired',
  },
  {
    title: 'Home Security',
    desc: 'Smart protection solutions for complete peace of mind.',
    img: '../customImgs/HomeSecurity.png',
    imgAlt: 'Smart home security remote',
  },
  {
    title: 'Home Help & Lifestyle',
    desc: 'Everyday assistance services designed around your lifestyle.',
    img: '../customImgs/HomeHelp.png',
    imgAlt: '',
  },
]

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-10">
      {/* Hero Top */}
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
        >
          <h1 className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
            Your Home.
            <br />
            Expertly Taken Care Of.
          </h1>

          <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-neutral-500">
            Everything your home needs from repairs and maintenance to everyday
            care, delivered by verified professionals you can trust.
          </p>
        </div>

        <div
          className="flex justify-center lg:justify-end"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
        >
          <img
            src="../customImgs/heroImg.png"
            alt="Illustration of a home with repair tools"
            className="mr-25 w-full max-w-70 transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* Heading */}
      <div className="mt-8" data-aos="fade-up">
        <p className="border-b border-neutral-300 pb-2 text-sm font-medium text-neutral-600">
          What are you looking for?
        </p>
      </div>

      {/* Big Categories */}
      <div className="mt-6 grid gap-4 md:grid-cols-12">
        {bigCategories.map((cat, i) => (
          <article
            key={cat.title}
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay={i * 100}
            data-aos-easing="ease-out-cubic"
            className={`group relative flex min-h-55 flex-col justify-between overflow-hidden rounded-2xl bg-neutral-100 p-5 border border-transparent transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] ${
              i === 0
                ? 'md:col-span-5'
                : i === 1
                ? 'md:col-span-3'
                : 'md:col-span-4'
            }`}
          >
            {/* Premium Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 max-w-[55%]">
              <h3 className="text-base font-semibold text-foreground">
                {cat.title}
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                {cat.desc}
              </p>
            </div>

            <span className="relative z-10 flex size-7 items-center justify-center rounded-full bg-white shadow transition-all duration-500 group-hover:translate-x-1">
              <ChevronRight className="size-4 text-foreground transition-transform duration-500 group-hover:translate-x-0.5" />
            </span>

            {cat.img && (
              <img
                src={cat.img}
                alt={cat.imgAlt}
                className="pointer-events-none absolute bottom-0 right-0 h-full w-1/2 object-contain object-bottom-right transition-all duration-700 ease-out group-hover:scale-110 group-hover:translate-x-1"
              />
            )}
          </article>
        ))}
      </div>

      {/* Small Categories */}
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {smallCategories.map((cat, i) => (
          <article
            key={cat.title}
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay={i * 100}
            data-aos-easing="ease-out-cubic"
            className="group relative flex min-h-55 flex-col justify-between overflow-hidden rounded-2xl border border-transparent bg-neutral-100 p-5 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
          >
            {/* Premium Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 max-w-[60%]">
              <h3 className="text-base font-semibold text-foreground">
                {cat.title}
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                {cat.desc}
              </p>
            </div>

            <span className="relative z-10 flex size-7 items-center justify-center rounded-full bg-white shadow transition-all duration-500 group-hover:translate-x-1">
              <ChevronRight className="size-4 text-foreground transition-transform duration-500 group-hover:translate-x-0.5" />
            </span>

            {cat.img && (
              <img
                src={cat.img}
                alt={cat.imgAlt}
                className="pointer-events-none absolute bottom-0 right-0 h-3/4 w-1/2 object-contain object-bottom-right transition-all duration-700 ease-out group-hover:scale-110 group-hover:translate-x-1"
              />
            )}
          </article>
        ))}
      </div>
    </section>
  )
}