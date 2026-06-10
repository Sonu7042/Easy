import { Briefcase, CreditCard, Headphones, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Briefcase,
    title: 'Steady Jobs',
    desc: 'Continuous stream of service requests from verified customers.',
  },
  {
    icon: CreditCard,
    title: 'Reliable Payments',
    desc: 'On-time payments and transparent earnings tracking.',
  },
  {
    icon: TrendingUp,
    title: 'Training & Growth',
    desc: 'Skill upgrading and business certification programs.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    desc: '24/7 priority help desk for all our partner needs.',
  },
]

export function PartnerCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:px-10">
      <div
        className="relative overflow-hidden rounded-3xl bg-brand text-brand-foreground"
        data-aos="zoom-in"
      >
        <div className="grid lg:grid-cols-2">
          {/* Left content */}
          <div className="p-8 sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Grow Your Business With Eazzy</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
              Join a trusted network of professionals and access steady work opportunities
              and growth support.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
                    <b.icon className="size-4.5 text-white" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{b.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/80">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand transition-transform hover:scale-105">
              Become a Partner
            </button>
          </div>

          {/* Right image */}
          <div className="relative min-h-64">
            <img
              src="../customImgs/Partner-Growth.png"
              alt="Eazzy service expert holding a tool"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
