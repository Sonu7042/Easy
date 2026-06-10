import { ChevronRight } from 'lucide-react'

const bigCategories = [
  {
    title: 'Ac & Appliance',
    desc: 'Repair, installation & maintenance for all major appliances.',
    img: '/cat-ac.png',
    imgAlt: 'White air conditioner mounted on a red wall',
    overlay: true,
  },
  {
    title: 'Home Repair & Renovation',
    desc: 'Professional solutions for repairs, upgrades & home improvement.',
    img: '/cat-repair.png',
    imgAlt: 'Hammer and repair tools',
  },
  {
    title: 'Cleaning & Pest Control',
    desc: 'Deep cleaning and pest protection for a healthier home.',
    img: '/cat-pest.png',
    imgAlt: 'Pest control worker in protective suit',
  },
]

const smallCategories = [
  {
    title: 'Gadget Repair',
    desc: 'Quick and reliable repairs for your essential devices.',
    img: '/cat-gadget.png',
    imgAlt: 'Tablet being repaired',
  },
  {
    title: 'Home Security',
    desc: 'Smart protection solutions for complete peace of mind.',
    img: '/cat-security.png',
    imgAlt: 'Smart home security remote',
  },
  {
    title: 'Home Help & Lifestyle',
    desc: 'Everyday assistance services designed around your lifestyle.',
    img: null,
    imgAlt: '',
  },
]

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-10">
      {/* Hero top */}
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div data-aos="fade-up">
          <h1 className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
            Your Home.
            <br />
            Expertly Taken Care Of.
          </h1>
          <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-neutral-500">
            Everything your home needs from repairs and maintenance to everyday care,
            delivered by verified professionals you can trust.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end" data-aos="fade-left">
          <img
            src="/hero-house.png"
            alt="Illustration of a home with repair tools"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* What are you looking for */}
      <div className="mt-8" data-aos="fade-up">
        <p className="border-b border-neutral-300 pb-2 text-sm font-medium text-neutral-600">
          What are you looking for?
        </p>
      </div>

      {/* Big categories */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {bigCategories.map((cat, i) => (
          <article
            key={cat.title}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-2xl bg-neutral-100 p-5 transition-shadow hover:shadow-lg"
          >
            <div className="relative z-10 max-w-[55%]">
              <h3 className="text-base font-semibold text-foreground">{cat.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">{cat.desc}</p>
            </div>
            <span className="relative z-10 flex size-7 items-center justify-center rounded-full bg-white shadow">
              <ChevronRight className="size-4 text-foreground" />
            </span>
            {cat.img && (
              <img
                src={cat.img || "/placeholder.svg"}
                alt={cat.imgAlt}
                className="pointer-events-none absolute bottom-0 right-0 h-full w-1/2 object-contain object-bottom-right transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </article>
        ))}
      </div>

      {/* Small categories */}
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {smallCategories.map((cat, i) => (
          <article
            key={cat.title}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="group relative flex min-h-40 flex-col justify-between overflow-hidden rounded-2xl bg-neutral-100 p-5 transition-shadow hover:shadow-lg"
          >
            <div className="relative z-10 max-w-[60%]">
              <h3 className="text-base font-semibold text-foreground">{cat.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">{cat.desc}</p>
            </div>
            <span className="relative z-10 flex size-7 items-center justify-center rounded-full bg-white shadow">
              <ChevronRight className="size-4 text-foreground" />
            </span>
            {cat.img && (
              <img
                src={cat.img || "/placeholder.svg"}
                alt={cat.imgAlt}
                className="pointer-events-none absolute bottom-0 right-0 h-3/4 w-1/2 object-contain object-bottom-right transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
