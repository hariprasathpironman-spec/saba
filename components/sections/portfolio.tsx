"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeading } from "@/components/reveal"

type Category = "All" | "Wedding" | "Pre-Wedding" | "Outdoor" | "Baby" | "Birthday" | "Event"
const items: { src: string; category: Exclude<Category, "All">; title: string }[] = [
  { src: "/portfolio/wedding-1.png", category: "Wedding", title: "Eternal Vows" },
  { src: "/portfolio/prewedding-1.png", category: "Pre-Wedding", title: "Golden Fields" },
  { src: "/portfolio/outdoor-1.png", category: "Outdoor", title: "Misty Peaks" },
  { src: "/portfolio/baby-1.png", category: "Baby", title: "First Dreams" },
  { src: "/portfolio/birthday-1.png", category: "Birthday", title: "Make a Wish" },
  { src: "/portfolio/event-1.png", category: "Event", title: "Grand Reception" },
  { src: "/portfolio/wedding-2.png", category: "Wedding", title: "The Bouquet" },
  { src: "/portfolio/prewedding-2.png", category: "Pre-Wedding", title: "Ocean Sunset" },
  { src: "/portfolio/event-2.png", category: "Event", title: "Night Lights" },
]

const categories: Category[] = ["All", "Wedding", "Pre-Wedding", "Outdoor", "Baby", "Birthday", "Event"]

// Placeholder card shown when image is missing
function PhotoPlaceholder({ title, category }: { title: string; category: string }) {
  return (
    <div className="flex h-64 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/40">
      <Camera className="mb-2 h-8 w-8 text-muted-foreground opacity-40" />
      <p className="text-xs text-muted-foreground">{title}</p>
      <p className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground/60">{category}</p>
    </div>
  )
}

export function Portfolio() {
  const [active, setActive] = useState<Category>("All")
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === "All" ? items : items.filter((i) => i.category === active)

  const showPrev = () =>
    setLightbox((p) => (p === null ? p : (p - 1 + filtered.length) % filtered.length))
  const showNext = () =>
    setLightbox((p) => (p === null ? p : (p + 1) % filtered.length))

  return (
    <section id="portfolio" className="relative mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="Our Work"
        title="A gallery of timeless moments"
        subtitle="Browse a curated selection of our favourite frames across every kind of celebration."
      />

      {/* Filters */}
      <div className="no-scrollbar mb-10 flex justify-start gap-3 overflow-x-auto pb-2 sm:justify-center">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-xs uppercase tracking-widest transition-all ${
              active === c
                ? "gold-gradient text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        <AnimatePresence>
          {filtered.map((item, idx) => (
            <motion.button
              layout
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightbox(idx)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border"
            >
              <PhotoPlaceholder title={item.title} category={item.category} />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="p-5 text-left">
                  <p className="text-xs uppercase tracking-widest text-gold">
                    {item.category}
                  </p>
                  <p className="font-heading text-xl text-foreground">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Info banner */}
      <div className="mt-8 rounded-2xl border border-dashed border-border bg-card/30 p-6 text-center">
        <Camera className="mx-auto mb-3 h-8 w-8 text-muted-foreground opacity-40" />
        <p className="text-sm text-muted-foreground">
          Add your photos to <code className="rounded bg-card px-1.5 py-0.5 text-xs text-gold">public/portfolio/</code> folder
        </p>
        <p className="mt-1 text-xs text-muted-foreground/60">
          Name them: wedding-1.png, prewedding-1.png, outdoor-1.png, baby-1.png, birthday-1.png, event-1.png, wedding-2.png, prewedding-2.png, event-2.png
        </p>
      </div>
    </section>
  )
}
