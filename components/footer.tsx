import { Camera, Globe, Share2, Smartphone } from "lucide-react";

const columns = [
  {
    heading: "Company",
    links: ["About Us", "Careers", "Partner Program", "Cities We Serve"],
  },
  {
    heading: "Services",
    links: ["AC Repair", "House Cleaning", "Plumbing", "Pest Control"],
  },
  {
    heading: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Return Policy"],
  },
];

export function Footer() {
  return (
    <footer className="mt-28 bg-[#E2E2E2]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-10  lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/customImgs/EazzyLogo.png"
              alt="Eazzy Logo"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              Redefining home maintenance with professional, technology-led
              expert services at your doorstep.
            </p>
            <div className="mt-5 flex gap-3">
              {[Globe, Camera, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-full bg-white text-neutral-500 transition-colors hover:text-brand"
                  aria-label="Social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-neutral-600 transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Get the app */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
              Get the App
            </h4>
            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg border border-neutral-300 bg-white px-4 py-2.5"
              >
                <Smartphone className="size-6 text-foreground" />
                <span className="leading-tight">
                  <span className="block text-[10px] text-neutral-400">
                    Download on
                  </span>
                  <span className="block text-sm font-semibold text-foreground">
                    App Store
                  </span>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg border border-neutral-300 bg-white px-4 py-2.5"
              >
                <Smartphone className="size-6 text-foreground" />
                <span className="leading-tight">
                  <span className="block text-[10px] text-neutral-400">
                    Get it on
                  </span>
                  <span className="block text-sm font-semibold text-foreground">
                    Google Play
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-6">
          <p className="text-xs text-neutral-400">
            © 2024 Eazzy Home Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
