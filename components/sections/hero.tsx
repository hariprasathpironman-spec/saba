"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import dynamic from "next/dynamic"

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((m) => m.HeroScene),
  { ssr: false },
)

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 2.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* 3D camera scene */}
      <HeroScene />

      {/* Foreground content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="pointer-events-none relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 rounded-full border border-border bg-card/40 px-5 py-2 text-xs uppercase tracking-[0.35em] text-muted-foreground backdrop-blur-sm"
        >
          Premium Photography Studio
        </motion.span>

        <motion.h1
          variants={item}
          className="text-balance font-heading text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Capturing Memories <br />
          That Last <span className="text-gradient italic">Forever</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Wedding, Pre-Wedding, Outdoor, Baby Shoot, Birthday Shoot and Events —
          told through timeless, cinematic imagery.
        </motion.p>

        <motion.div
          variants={item}
          className="pointer-events-auto mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="rounded-full gold-gradient px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
          >
            Book Now
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-border bg-card/30 px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-foreground backdrop-blur-sm transition-colors hover:bg-card/60"
          >
            View Portfolio
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
