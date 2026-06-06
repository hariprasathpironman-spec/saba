"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Reveal, SectionHeading } from "@/components/reveal"

const reviews = [
  {
    name: "Aisha & Rohan",
    role: "Wedding, 2025",
    text: "Saba Creation captured our wedding with such emotion and artistry. Every single frame feels like a piece of cinema. We relive the day every time we look at them.",
  },
  {
    name: "Priya Sharma",
    role: "Maternity & Newborn",
    text: "The team made us feel so comfortable. The newborn shots are unbelievably tender and beautiful — exactly the heirlooms we dreamed of.",
  },
  {
    name: "The Mehta Family",
    role: "Birthday Event",
    text: "Professional, creative and genuinely kind. They captured candid joy we didn't even know was happening. Highly recommended.",
  },
  {
    name: "Karan & Neha",
    role: "Pre-Wedding Shoot",
    text: "Our pre-wedding photos look like they belong in a magazine. The locations, the light, the direction — flawless from start to finish.",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved by the families we serve"
          subtitle="Nothing means more to us than the trust of our clients and the stories we get to tell together."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 2) * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="relative h-full rounded-2xl border border-border bg-card p-8"
              >
                <Quote className="h-8 w-8 text-primary/40" />
                <p className="mt-4 text-pretty leading-relaxed text-foreground/90">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <div>
                    <p className="font-heading text-lg text-foreground">
                      {r.name}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {r.role}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
