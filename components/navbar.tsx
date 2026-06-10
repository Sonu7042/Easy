'use client'

import { ChevronDown, MapPin, Search, ShoppingCart, User } from 'lucide-react'

const navLinks = [
  { label: 'Home', active: true },
  { label: 'My Product', active: false },
  { label: 'Orders', active: false },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-10">
        {/* Logo */}
<a href="#" className="flex items-center shrink-0">
  <img
    src="/customImgs/EazzyLogo.png"
    alt="Eazzy Logo"
    className="h-12 w-auto object-contain"
  />
</a>

        {/* Nav links */}
        <nav className="ml-6 hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`relative text-sm font-medium transition-colors hover:text-foreground ${
                link.active
                  ? 'text-foreground after:absolute after:-bottom-[22px] after:left-0 after:h-0.5 after:w-full after:bg-foreground'
                  : 'text-neutral-500'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Location */}
        <button className="ml-4 hidden items-center gap-2 lg:flex">
          <MapPin className="size-5 text-brand" />
          <span className="text-left leading-tight">
            <span className="block text-[10px] text-neutral-400">Delivering to</span>
            <span className="block text-xs font-medium text-foreground">
              Add location, Gurugram to
            </span>
          </span>
          <ChevronDown className="size-4 text-neutral-400" />
        </button>

        {/* Search */}
        <div className="ml-auto flex flex-1 items-center md:max-w-xs">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder='Search for "AC service"'
              className="w-full rounded-full border border-neutral-200 bg-neutral-50 py-2 pl-9 pr-4 text-sm outline-none focus:border-brand"
            />
          </div>
        </div>

        {/* Cart + Sign in */}
        <button
          aria-label="Cart"
          className="flex size-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-50"
        >
          <ShoppingCart className="size-4" />
        </button>
        <button className="flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-neutral-50">
          <User className="size-4" />
          Sign in
        </button>
      </div>
    </header>
  )
}
