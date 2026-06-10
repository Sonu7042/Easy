import { Star, Zap } from 'lucide-react'

const services = [
  { title: 'Foam-jet AC service', img: '/service-ac.png', rating: '4.76', price: '599' },
  { title: 'TV Installation', img: '/service-tv.png', rating: '4.76', price: '399' },
  { title: 'Air Cooler Repair', img: '/service-cooler.png', rating: '4.76', price: '99' },
  { title: 'Air Cooler Repair', img: '/service-cooler.png', rating: '4.76', price: '99' },
]

export function BookedServices() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-10">
      <h2
        className="text-2xl font-semibold text-foreground sm:text-3xl"
        data-aos="fade-up"
      >
        Most booked services
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {services.map((s, i) => (
          <article
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={s.img || "/placeholder.svg"}
                alt={s.title}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-3 text-base font-semibold text-foreground">{s.title}</h3>
            <div className="mt-1 flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-neutral-700">
                <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
                {s.rating}
              </span>
              <span className="flex items-center gap-1 font-medium text-green-600">
                <Zap className="size-3.5 fill-green-600" />
                INSTANT
              </span>
            </div>
            <p className="mt-2 text-base font-bold text-foreground">₹{s.price}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
