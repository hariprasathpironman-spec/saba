"use client"

import { motion } from "framer-motion"
import { Reveal, SectionHeading } from "@/components/reveal"
import { Heart, Users, Mountain, Baby, Cake, PartyPopper } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    desc: "Cinematic coverage of your most important day, from first look to final dance.",
  },
  {
    icon: Users,
    title: "Pre-Wedding Shoots",
    desc: "Romantic, story-driven sessions that capture your chemistry before the big day.",
  },
  {
    icon: Mountain,
    title: "Outdoor Photography",
    desc: "Dramatic natural backdrops and golden-hour light for striking portraits.",
  },
  {
    icon: Baby,
    title: "Baby Photography",
    desc: "Gentle, tender newborn and milestone sessions in a safe, calm setting.",
  },
  {
    icon: Cake,
    title: "Birthday Photography",
    desc: "Joyful, candid celebrations preserving every laugh, candle and surprise.",
  },
  {
    icon: PartyPopper,
    title: "Event Photography",
    desc: "Polished documentation of corporate, social and milestone occasions.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="What We Offer"
        title="Services crafted around your story"
        subtitle="Every shoot is tailored to your moment, your style, and the memories you want to keep forever."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-100" />
              <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-background transition-colors group-hover:border-primary/50">
                <s.icon className="h-6 w-6 text-primary" />
              </span>
              <h3 className="mt-6 font-heading text-2xl text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
