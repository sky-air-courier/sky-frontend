import React, { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import {
  Plane,
  Truck,
  Globe,
  Menu,
  X,
  Mail,
  PhoneCall,
  Send,
  MessageCircle,
} from 'lucide-react'
import heroImage from '../assets/heros.png'
import logoSvg from '../assets/logo.svg'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#tracking', label: 'Tracking' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
]

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState('')

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleTrackSubmit = (e) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return
    // In a real app, call your tracking API here
    alert(`Tracking request submitted for: ${trackingNumber}`)
    setTrackingNumber('')
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    // In a real app, send this to your backend
    alert('Thank you for reaching out! We will contact you shortly.')
    setForm({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex h-12 items-center sm:h-14">
              <img
                src={logoSvg}
                alt="SkyAir Courier"
                className="h-full w-auto object-contain transform origin-left scale-[4] sm:scale-[4.5]"
              />
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="rounded-full border border-slate-200 px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:border-primary hover:text-primary"
            >
              Log in
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow-md transition hover:bg-[#ff9d33]"
            >
              Ship Now
              <Send className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-700 sm:px-6 lg:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 hover:bg-slate-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/login"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow-md hover:bg-[#ff9d33]"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
                <MessageCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main id="top" className="flex-1">
              {/* Hero Section */}
        <section
          id="tracking"
          className="relative overflow-hidden bg-slate-900 text-white"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/30" />

          <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-24 lg:px-8">
            <div className="w-full space-y-6 lg:w-1/2">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-secondary ring-1 ring-white/15">
                Fast • Secure • Global
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Global Reach,
                <span className="text-accent"> Rapid Delivery</span>
              </h1>
              <p className="max-w-xl text-sm text-slate-100 sm:text-base">
                Your packages, our priority, anywhere, anytime. SkyAir Courier
                connects your business to the world with seamless air and ground
                logistics.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-200/90">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 ring-1 ring-white/15">
                  <Plane className="h-4 w-4 text-accent" />
                  <span>Same-day express lanes</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 ring-1 ring-white/15">
                  <Globe className="h-4 w-4 text-accent" />
                  <span>120+ international destinations</span>
                </div>
              </div>
            </div>

            {/* Tracking Card */}
            <div className="w-full lg:w-5/12">
              <div className="rounded-3xl bg-white/95 p-5 shadow-2xl shadow-slate-900/40 backdrop-blur sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Live Tracking
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      Track your shipment in seconds
                    </p>
                  </div>
                </div>

                <form
                  onSubmit={handleTrackSubmit}
                  className="flex flex-col gap-3"
                >
                  <label
                    htmlFor="trackingNumber"
                    className="text-xs font-medium text-slate-600"
                  >
                    Tracking Number
                  </label>
                  <div className="flex flex-col gap-3 rounded-full bg-slate-100 p-2 sm:flex-row sm:items-center">
                    <input
                      id="trackingNumber"
                      type="text"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      placeholder="Enter your tracking number..."
                      className="w-full rounded-full border-0 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                    />
                    <button
                      type="submit"
                      className="inline-flex flex-none items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow-sm transition hover:bg-[#ff9d33]"
                    >
                      Track
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Need help? Contact our support team with your tracking ID
                    for detailed shipment insights.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

              {/* Services Section */}
        <section
          id="services"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Our Services
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Tailored logistics for every shipment
            </p>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              From urgent air cargo to last-mile delivery, SkyAir Courier
              designs solutions that match your speed, scale, and budget.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={Plane}
              title="Air Freight"
              description="Priority air cargo with time-definite delivery across major global hubs."
            />
            <ServiceCard
              icon={Truck}
              title="Ground Delivery"
              description="Reliable ground network for regional, last-mile, and bulk deliveries."
            />
            <ServiceCard
              icon={Globe}
              title="International Shipping"
              description="Door-to-door international logistics with customs support and tracking."
            />
          </div>
        </section>

              {/* About Section */}
        <section
          id="about"
          className="bg-white/80 border-y border-slate-100"
        >
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  About Us
                </h2>
                <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Moving business forward, one shipment at a time.
                </p>
                <p className="mt-4 text-sm text-slate-600 sm:text-base">
                  SkyAir Courier combines aviation-grade precision with
                  technology-driven logistics. Our dedicated operations teams,
                  control towers, and partner carriers ensure that every parcel
                  is monitored from pickup to delivery.
                </p>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  With a presence across major airports and logistics hubs, we
                  offer scalable solutions for SMEs, enterprises, and
                  e-commerce brands looking for dependable delivery partners.
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-4 text-xs text-slate-700 sm:text-sm">
                  <Stat label="On-time delivery" value="98.7%" />
                  <Stat label="Global routes" value="120+" />
                  <Stat label="Client retention" value="94%" />
                  <Stat label="Daily shipments" value="25K+" />
                </dl>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-slate-900/95 p-6 text-slate-50 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  Control Tower
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Real-time visibility, from warehouse to runway.
                </p>
                <p className="mt-3 text-xs text-slate-200 sm:text-sm">
                  Our operations center monitors lane performance, weather
                  impact, and carrier SLAs to keep your shipments on track.
                  Smart alerts and exception handling mean issues are addressed
                  before they affect your customer.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-200 sm:text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Proactive delay notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Temperature & security monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    API integration with your ERP / OMS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

              {/* Testimonials Section */}
        <section
          id="testimonials"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Customer Testimonials
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Trusted by teams that ship at scale
            </p>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Businesses across retail, healthcare, and manufacturing rely on
              SkyAir Courier for time-critical logistics.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              avatar="https://placehold.co/50x50/0077b6/ffffff?text=A"
              name="Alice M."
              role="Head of Supply Chain, Retail"
              quote="SkyAir transformed our logistics playbook — reliable, fast, and transparent at every stage."
            />
            <TestimonialCard
              avatar="https://placehold.co/50x50/0077b6/ffffff?text=B"
              name="Brian K."
              role="Operations Director, Pharma"
              quote="Their temperature-controlled network and proactive alerts keep our critical shipments safe."
            />
            <TestimonialCard
              avatar="https://placehold.co/50x50/0077b6/ffffff?text=C"
              name="Chetna R."
              role="Founder, D2C Brand"
              quote="Our customer experience improved overnight once we switched to SkyAir for last-mile delivery."
            />
          </div>
        </section>

              {/* Contact Section */}
        <section
          id="contact"
          className="border-t border-slate-100 bg-slate-900 text-slate-50"
        >
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                  Contact Us
                </h2>
                <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Get a quote. We&apos;re here to help.
                </p>
                <p className="mt-3 text-sm text-slate-200 sm:text-base">
                  Share a few details about your shipment needs and our logistics
                  specialists will respond with tailored options within one
                  business day.
                </p>

                <div className="mt-6 space-y-3 text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-accent ring-1 ring-white/10">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Email
                      </p>
                      <a
                        href="mailto:support@skyaircourier.com"
                        className="text-sm font-medium text-slate-50 hover:text-accent"
                      >
                        support@skyaircourier.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-accent ring-1 ring-white/10">
                      <PhoneCall className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Phone
                      </p>
                      <p className="text-sm font-medium text-slate-50">
                        +1 (800) 555-0123
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl sm:p-8">
                <form
                  onSubmit={handleContactSubmit}
                  className="grid gap-4 text-sm sm:grid-cols-2"
                >
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wide text-slate-600"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleFormChange}
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wide text-slate-600"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleFormChange}
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wide text-slate-600"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleFormChange}
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wide text-slate-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={form.message}
                      onChange={handleFormChange}
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Tell us about your shipment volume, destinations, and timelines."
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] text-slate-500">
                      By submitting, you agree to our processing of your data in
                      accordance with our privacy policy.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow-md transition hover:bg-[#ff9d33]"
                    >
                      Submit
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
            </main>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-xs text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2024 Sky Air Courier. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-slate-200">
              Privacy Policy
            </a>
            <a href="mailto:support@skyaircourier.com" className="hover:text-slate-200">
              Email
            </a>
            <a href="#" className="hover:text-slate-200">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/918420502278?text=Hi%20SkyAir%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-slate-900/30 transition hover:translate-y-[-2px] hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="sr-only">Chat with us on WhatsApp</span>
      </a>
    </div>
  )
}

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-xs text-slate-600 sm:text-sm">{description}</p>
    </div>
  )
}

function TestimonialCard({ avatar, name, role, quote }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-10 w-10 rounded-full border border-slate-200"
        />
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-700">“{quote}”</p>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  )
}

function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-[calc(100vh-96px)] items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-16">
      <div className="w-full max-w-md space-y-6 rounded-3xl bg-white/95 p-8 text-slate-900 shadow-2xl shadow-slate-900/40">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
            <Plane className="h-6 w-6 -rotate-12" />
          </div>
          <h1 className="text-2xl font-semibold">Welcome back to SkyAir Courier</h1>
          <p className="mt-2 text-sm text-slate-600">
            Sign in to manage your shipments, track deliveries, and access your personalized dashboard.
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
              <label htmlFor="password">Password</label>
              <button
                type="button"
                className="text-[11px] font-semibold uppercase tracking-wide text-primary hover:text-primary/80"
              >
                Forgot?
              </button>
            </div>
            <input
              id="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-md transition hover:bg-[#ff9d33]"
          >
            Log in
          </button>
        </form>

        <div className="space-y-3 text-center text-xs text-slate-500">
          <p>
            Don&apos;t have an account?{' '}
            <button
              type="button"
              className="font-semibold text-primary hover:text-primary/80"
              onClick={() => navigate('/')}
            >
              Contact sales
            </button>
          </p>
          <p>By logging in, you agree to our privacy policy and terms of service.</p>
        </div>
      </div>
    </div>
  )
}
