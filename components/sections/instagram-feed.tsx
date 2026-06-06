"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram } from "@/components/icons/social"
import { Reveal, SectionHeading } from "@/components/reveal"

const posts = [
  "/portfolio/wedding-1.png",
  "/portfolio/prewedding-2.png",
  "/portfolio/outdoor-1.png",
  "/portfolio/baby-1.png",
  "/portfolio/event-2.png",
  "/portfolio/birthday-1.png",
]

export function InstagramFeed() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="@sabacreation"
        title="Follow our latest frames"
        subtitle="A daily glimpse into the moments we capture. Join our community on Instagram."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {posts.map((p, i) => (
          <Reveal key={p + i} delay={(i % 6) * 0.06}>
            <motion.a
              href="https://www.instagram.com/sabacreation__?igsh=MWs5Z250NG1ncHM1Ng=="
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              className="group relative block aspect-square overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={p || "/placeholder.svg"}
                alt="Instagram post"
                width={300}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-7 w-7 text-foreground" />
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm uppercase tracking-widest text-foreground transition-colors hover:border-primary/50"
          >
            <Instagram className="h-4 w-4 text-primary" />
            Follow @sabacreation
          </a>
        </div>
      </Reveal>
    </section>
  )
}
