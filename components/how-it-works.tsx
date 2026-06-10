/* ---------- Mockup: Language select card ---------- */
function LanguageMockup() {
  const langs = [
    { label: 'Hinglish', sub: 'Hinglish', active: true },
    { label: 'English', sub: 'English', active: false },
    { label: 'हिंदी', sub: 'Hindi', active: false },
  ]
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl">
      <div className="relative bg-brand px-5 pb-10 pt-5">
        <span className="absolute right-4 top-3 text-lg font-bold text-white/90">Hin</span>
        <div className="flex gap-2 text-sm font-semibold text-white">
          <span className="rounded-md bg-white/20 px-2 py-1">ಲ್ಯ</span>
          <span className="rounded-md bg-white/20 px-2 py-1">മലയാ</span>
          <span className="rounded-md bg-white/20 px-2 py-1">ଓଡ଼ିଆ</span>
        </div>
      </div>
      <div className="-mt-6 rounded-t-2xl bg-white px-5 pb-5 pt-5">
        <h4 className="text-sm font-semibold text-foreground">Language select karein</h4>
        <p className="text-xs text-neutral-400">Apni pasandida Language chune</p>
        <div className="mt-4 space-y-1">
          {langs.map((l) => (
            <div
              key={l.label}
              className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm ${
                l.active ? 'bg-brand/10 font-medium text-foreground' : 'text-neutral-600'
              }`}
            >
              <span>{l.label}</span>
              <span className="text-xs text-neutral-400">{l.sub}</span>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full rounded-lg bg-foreground py-3 text-sm font-medium text-white">
          Hinglish Chunen
        </button>
      </div>
    </div>
  )
}

/* ---------- Mockup: Map / dispatch card ---------- */
function MapMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-lg font-extrabold text-brand">Eazzy»</span>
        <div className="flex items-center gap-2">
          <span className="size-6 rounded-full bg-neutral-100" />
          <span className="size-6 rounded-full bg-green-500 ring-2 ring-green-200" />
        </div>
      </div>
      <div className="flex items-center gap-4 border-b border-neutral-100 px-4 pb-2 text-sm">
        <span className="border-b-2 border-foreground pb-2 font-medium text-foreground">Active</span>
        <span className="pb-2 text-neutral-400">Pending</span>
        <span className="pb-2 text-neutral-400">Past</span>
        <span className="ml-auto pb-2 text-xs text-neutral-500">Today ⌄</span>
      </div>
      <div className="relative h-44 bg-[#eef0f2]">
        {/* simple stylized roads */}
        <div className="absolute left-0 top-1/3 h-1 w-full bg-white" />
        <div className="absolute left-1/2 top-0 h-full w-1 bg-white" />
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          <polyline
            points="60,150 60,90 200,90 200,40"
            fill="none"
            stroke="#1d4ed8"
            strokeWidth="3"
          />
        </svg>
        <span className="absolute left-12 top-32 flex size-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-white">
          2
        </span>
        <span className="absolute left-48 top-7 flex size-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-white">
          3
        </span>
        <span className="absolute right-4 top-3 rounded bg-white/80 px-1 text-[9px] text-neutral-500">
          Northern Railway Hospital
        </span>
        <span className="absolute bottom-4 left-4 rounded bg-white/80 px-1 text-[9px] text-neutral-500">
          SADAR BAZAR
        </span>
      </div>
    </div>
  )
}

/* ---------- Mockup: Job info card ---------- */
function JobInfoMockup() {
  const rows = [
    { label: 'Estimated Earning', value: '₹600', color: 'text-green-600' },
    { label: "Customer's Issue", value: 'Not cooling', color: 'text-brand' },
    { label: 'Cooling Experience', value: 'Cooling is very low', color: 'text-foreground' },
    { label: 'From', value: 'Yesterday', color: 'text-foreground' },
    { label: 'Water dripping', value: 'Yes', color: 'text-foreground' },
  ]
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl">
      <div className="border-b border-neutral-100 px-5 py-4">
        <h4 className="font-semibold text-foreground">Job Info</h4>
      </div>
      <div className="divide-y divide-neutral-100">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between px-5 py-3.5 text-sm">
            <span className="text-neutral-500">{r.label}</span>
            <span className={`font-medium ${r.color}`}>{r.value}</span>
          </div>
        ))}
      </div>
      <div className="h-2 bg-brand/10" />
    </div>
  )
}

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
      <p className="text-xs font-semibold uppercase tracking-wide text-brand">{step}</p>
      <h3 className="mt-3 text-2xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">{desc}</p>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-5xl px-4 pt-28 sm:px-6 lg:px-10">
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">How Eazzy Works</h2>
        <p className="mt-2 text-sm text-neutral-500">
          Your home service sorted in four simple steps it&apos;s that easy
        </p>
      </div>

      <div className="mt-16 space-y-20">
        {/* Step 1 */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <StepText
            step="Step 1"
            title="Book in Seconds"
            desc="Select your service, view transparent pricing, and pick a time slot that works perfectly for your schedule."
          />
          <div data-aos="fade-left" className="mx-auto w-full max-w-xs">
            <LanguageMockup />
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div data-aos="fade-right" className="order-2 mx-auto w-full max-w-xs md:order-1">
            <LanguageMockup />
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
          <div data-aos="fade-left" className="mx-auto w-full max-w-sm">
            <MapMockup />
          </div>
        </div>

        {/* Step 4 */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div data-aos="fade-right" className="order-2 mx-auto w-full max-w-xs md:order-1">
            <JobInfoMockup />
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
