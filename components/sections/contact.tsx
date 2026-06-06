"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const whatsappHref = `https://wa.me/919750134156?text=${encodeURIComponent(
    `Hi Saba Creation! I'm ${form.name || "interested"} and I'd love to book a shoot. ${form.message}`,
  )}`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: info */}
        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.35em] text-gold">
              Get In Touch
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Let&apos;s create something unforgettable
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Tell us about your special day and we&apos;ll craft a bespoke
              package just for you. We typically respond within a few hours.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-5">
              {[
                { icon: Phone, label: "+91 9750134156", href: "tel:+919750134156" },
                { icon: Mail, label: "sabacreated@gmail.com", href: "mailto:sabacreated@gmail.com" },
                { icon: MapPin, label: "7/71A, Athityanagar, Thanichiyam, Vadipatti (PO), Madurai - 625221", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-colors group-hover:border-primary/50">
                    <c.icon className="h-4 w-4 text-primary" />
                  </span>
                  <span className="text-sm text-foreground">{c.label}</span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="glass-strong rounded-3xl p-8 sm:p-10"
          >
            <div className="flex flex-col gap-5">
              <Field
                label="Your Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Jane Doe"
              />
              <Field
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                placeholder="+91 99999 99999"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="you@email.com"
              />
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your event..."
                  className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="mt-2 flex items-center justify-center gap-2 rounded-full gold-gradient px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" />
                {sent ? "Message Sent!" : "Send Message"}
              </motion.button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
      />
    </div>
  )
}
