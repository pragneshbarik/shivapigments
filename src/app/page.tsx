"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowDown,
  Envelope,
  LinkedinLogo,
  Cube,
  Globe,
  Star,
  PaintBrush,
  Phone,
  Printer,
  Drop,
  Circle,
  PaintBucket,
  Factory,
} from "@phosphor-icons/react"
import ProductsTable from "@/components/products-table"

/* ─── Data ─── */

const stats = [
  { value: "3", label: "Group Companies", icon: Factory },
  { value: "5", label: "Product Grades", icon: Cube },
  { value: "30+", label: "Years of Trust", icon: Star },
  { value: "India", label: "Manufacturing Base", icon: Globe },
]

const products = [
  {
    name: "Phthalocyanine Pigment Blue",
    grade: "PB 15:0 / 74160",
    description: "High-quality alpha form for offset ink and paint applications",
    swatch: "from-[#1e4d8c] to-[#3068b0]",
    applications: ["Offset Ink", "Paint"],
  },
  {
    name: "Phthalocyanine Pigment Blue",
    grade: "PB 15:0 / 74160",
    description: "Specialised grade for water base texture coatings",
    swatch: "from-[#124578] to-[#1e6bb0]",
    applications: ["Water Base Texture"],
  },
  {
    name: "Phthalocyanine Pigment Blue",
    grade: "PB 15:0 / 74160",
    description: "Universal grade for plastics and rubber industries",
    swatch: "from-[#163d73] to-[#2359a0]",
    applications: ["Plastics", "Rubber"],
  },
  {
    name: "Phthalocyanine Pigment Blue",
    grade: "PB 15:1 / 74160",
    description: "Heat-stable grade engineered for plastic applications",
    swatch: "from-[#0f3b6e] to-[#1a5fa8]",
    applications: ["Plastics"],
  },
  {
    name: "Phthalocyanine Pigment Blue",
    grade: "PB 15:1 / 74160",
    description: "Premium grade formulated for alkyd paint systems",
    swatch: "from-[#1a3a6b] to-[#2a5a9b]",
    applications: ["Alkyd Paint"],
  },
  {
    name: "Phthalocyanine Pigment Blue",
    grade: "PB 15:3 / 74160",
    description: "Beta crystal form for solvent inks & industrial coatings",
    swatch: "from-[#124578] to-[#1e6bb0]",
    applications: ["Solvent Ink", "Coatings"],
  },
  {
    name: "Phthalocyanine Green",
    grade: "PG 7",
    description: "High-strength green pigment for inks, coatings & plastics",
    swatch: "from-[#1a6b3a] to-[#2a9b5a]",
    applications: ["Inks", "Coatings", "Plastics"],
  },
]

const applications = [
  {
    name: "Offset Ink",
    icon: Printer,
    detail: "High-strength blue pigments for printing inks",
  },
  {
    name: "Paint",
    icon: PaintBrush,
    detail: "Decorative & industrial paint formulations",
  },
  {
    name: "Water Base Texture",
    icon: Drop,
    detail: "Texture coatings & water-based systems",
  },
  {
    name: "Plastics",
    icon: Cube,
    detail: "Masterbatch, engineering plastics & profiles",
  },
  {
    name: "Rubber",
    icon: Circle,
    detail: "Industrial rubber goods & tyre applications",
  },
  {
    name: "Alkyd Paint",
    icon: PaintBucket,
    detail: "Solvent-based alkyd resin paint systems",
  },
]

const whyChooseUs = [
  "Three strong group companies with integrated operations",
  "Strict quality control at every stage of production",
  "Competitive pricing backed by cost-efficient manufacturing",
  "Prompt response with technical data and competitive quotes",
  "Custom product development support for new ventures",
]

/* ─── Components ─── */

function AnnouncementBar() {
  return (
    <div className="flex items-center justify-center bg-[#0f2340] px-4 py-2.5 text-center text-[11px] font-medium tracking-wide text-white/90 md:text-xs">
      Manufacturing, Marketing & Export of High-Quality Phthalocyanine Pigments
    </div>
  )
}

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4 lg:px-10">
      <div className="flex items-center gap-3">
        <img
          src="/ShivaPigmentlogo_JPG_-removebg__1_-removebg-preview.png"
          alt="Shiva Pigments Private Limited"
          className="h-9 w-auto object-contain"
        />
        <span className="hidden text-sm font-semibold text-[#1a3a6b] sm:block">
          Shiva Pigments Private Limited
        </span>
      </div>

      <a
        href="mailto:sales@shivapigments.com"
        className="inline-flex h-9 items-center gap-2 rounded-full bg-[#1a3a6b] px-5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[#0f2340]"
      >
        <Envelope className="size-4" />
        <span className="hidden sm:inline">Request Quote</span>
        <span className="sm:hidden">Quote</span>
      </a>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="px-4 pb-8 lg:px-6">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem]">
        <img
          src="/pawel-czerwinski-g0eRErPBoTA-unsplash.jpg"
          alt="Phthalocyanine blue pigment texture"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2340]/90 via-[#0f2340]/50 to-[#0f2340]/20" />

        <div className="relative flex flex-col justify-between p-5 md:p-10 lg:p-12">
          <div className="flex items-start justify-between">
            <div />
          </div>

          <div className="max-w-4xl space-y-4 py-8 md:space-y-6 md:py-12">
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm md:px-3 md:text-xs">
                <Star className="size-3" weight="fill" />
                A Division of Pigment Group
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm md:px-3 md:text-xs">
                <Globe className="size-3" />
                Exporting Worldwide
              </div>
            </div>

            <h1
              className="text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              High-Quality{" "}
              <span className="text-blue-300">Phthalocyanine</span> Pigments
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-white/70 md:text-base lg:text-lg">
              Manufacturing, Marketing & Export of Premium Phthalocyanine Blue
              & Green Pigments. Specializing in PB 15:0, PB 15:1, PB 15:3
              and PG 7 grades for Offset Ink, Paint, Water Base Texture,
              Plastics, Rubber & Alkyd Paint.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href="#products"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-[#1a3a6b] shadow-sm transition-colors hover:bg-zinc-100 sm:h-12 sm:px-8"
              >
                Explore Products
                <ArrowDown className="size-4" />
              </a>
              <a
                href="/Shiva_Pigments_Brochure.pdf"
                download
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white sm:h-12 sm:px-8"
              >
                Download Brochure
                <ArrowDown className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="border-t border-b border-zinc-200">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center px-4 py-10 text-center
                ${i % 2 === 0 ? "" : "border-l border-zinc-200"}
                md:border-l md:border-zinc-200 ${i >= 2 ? "border-t border-zinc-200 md:border-t-0" : ""}
              `}
            >
              <div className="mb-3 flex size-9 items-center justify-center bg-[#1a3a6b]/10">
                <Icon className="size-4 text-[#1a3a6b]" />
              </div>
              <p
                className="text-3xl font-medium tracking-tight text-[#1a3a6b]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {stat.value}
              </p>
              <p className="mt-0.5 text-sm text-zinc-500">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="px-4 py-16 lg:px-6">
      <div className="mx-auto max-w-[1400px] space-y-5">
        <p
          className="text-sm italic text-[#1a3a6b]/70"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          About Us
        </p>
        <h2
          className="text-3xl font-normal leading-tight tracking-tight text-[#1a3a6b] md:text-4xl"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Your Trusted Partner in Phthalocyanine Pigments
        </h2>
        <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-zinc-600">
          <p>
            Pigment Group is a well-established Indian group engaged in the
            manufacturing, marketing and export of pigments. Shiva Pigments has
            gained complete trust from customers across India and overseas.
          </p>
          <p>
            We stand on the strong pillars of three group companies, backed by
            efficient manpower and a team of technical professionals. Our
            strength stems from dedication, commitment, prompt feedback, price
            competitiveness, and strict quality control with comprehensive
            product coverage across various industries.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhyChooseSection() {
  return (
    <section className="px-4 py-16 lg:px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10">
          <p
            className="text-sm italic text-[#1a3a6b]/70"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our Strengths
          </p>
          <h2
            className="text-3xl font-normal tracking-tight text-[#1a3a6b] md:text-4xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Why Shiva Pigments?
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {whyChooseUs.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-lg text-[#1a3a6b] shrink-0">•</span>
              <p className="text-sm text-zinc-600">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section id="products" className="px-4 py-16 lg:px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10">
          <p
            className="text-sm italic text-[#1a3a6b]/70"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Product Portfolio
          </p>
          <h2
            className="text-3xl font-normal tracking-tight text-[#1a3a6b] md:text-4xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Phthalocyanine Blue Pigments
          </h2>
        </div>

        <ProductsTable data={products} />
      </div>
    </section>
  )
}

function ApplicationsSection() {
  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-4 pt-16 pb-4 lg:px-6">
        <div className="mb-10">
          <p
            className="text-sm italic text-[#1a3a6b]/70"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Industries
          </p>
          <h2
            className="text-3xl font-normal tracking-tight text-[#1a3a6b] md:text-4xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Applications
          </h2>
        </div>
      </div>

      <div className="border-t border-b border-zinc-200">
        <div className="grid grid-cols-2 md:grid-cols-6">
          {applications.map((app, i) => {
            const Icon = app.icon
            return (
              <div
                key={app.name}
                className={`flex flex-col items-center justify-center px-3 py-8 text-center
                  ${i % 2 !== 0 ? "border-l border-zinc-200" : ""}
                  md:border-l md:border-zinc-200
                  ${i >= 2 ? "border-t border-zinc-200 md:border-t-0" : ""}
                `}
              >
                <Icon className="mb-3 size-5 text-[#1a3a6b]" />
                <h3 className="text-sm font-semibold text-[#1a3a6b]">
                  {app.name}
                </h3>
                <p className="mt-0.5 text-[11px] leading-relaxed text-zinc-500">
                  {app.detail}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="px-4 py-16 lg:px-6">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1a3a6b] to-[#0f2340] px-8 py-14 md:px-14">
        <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="space-y-2">
            <h2
              className="text-3xl font-normal leading-tight text-white md:text-4xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Get in Touch for a Competitive Quote
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/70">
              Prompt response with technical data and competitive quotes. Custom
              product development support for new ventures.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-end">
            <a
              href="mailto:sales@shivapigments.com"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-[#1a3a6b] shadow-sm transition-colors hover:bg-zinc-100"
            >
              <Envelope className="size-4" />
              Request a Quote
            </a>
            <p className="text-xs text-white/50">
              Or call{" "}
              <span className="font-semibold text-white/80">+91 98242 96670</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/ShivaPigmentlogo_JPG_-removebg__1_-removebg-preview.png"
                alt="Shiva Pigments Private Limited"
                className="h-8 w-auto object-contain"
              />
              <span className="text-sm font-semibold text-[#1a3a6b]">
                Shiva Pigments Private Limited
              </span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-zinc-500">
              Manufacturing, marketing and export of high-quality Phthalocyanine
              Blue & Green Pigments. PB 15:0, PB 15:1, PB 15:3 and PG 7
              grades for Offset Ink, Paint, Water Base Texture, Plastics,
              Rubber & Alkyd Paint.
            </p>
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <a
                href="#"
                className="transition-colors hover:text-[#1a3a6b]"
              >
                <LinkedinLogo className="size-4" />
              </a>
              <span>info@shivapigments.com</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1a3a6b]">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-zinc-500">
              <p className="font-medium text-zinc-700">Mr. Suresh Virani</p>
              <p>Director</p>
              <p className="pt-1">
                6014/7 & 6108/8, GIDC, Ankleshwar
              </p>
              <p>Bharuch - 393002, Gujarat, India</p>
              <div className="flex items-center gap-1.5 pt-1">
                <Phone className="size-3 text-[#1a3a6b]" />
                <span className="text-[#1a3a6b]">+91 98242 96670</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="size-3 text-[#1a3a6b]" />
                <span className="text-[#1a3a6b]">+91 98242 11670</span>
              </div>
              <p className="pt-1">info@shivapigments.com</p>
              <p>sales@shivapigments.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 md:flex-row">
          <p className="text-xs text-zinc-400">
            &copy; 2026 Shiva Pigments. All rights reserved.
          </p>
          <p className="text-[11px] text-zinc-400">
            Specifications subject to change without notice.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ─── Page ─── */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProductsSection />
      <ApplicationsSection />
      <WhyChooseSection />
      <CtaSection />
      <Footer />
    </div>
  )
}
