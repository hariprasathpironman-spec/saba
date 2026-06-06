"use client"

import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { Award, Heart, Camera as CameraIcon } from "lucide-react"

const stats = [
  { value: "500+", label: "Weddings Captured" },
  { value: "12", label: "Years of Artistry" },
  { value: "50k+", label: "Cherished Moments" },
]

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border">
              {/* Replace this with your own studio photo: /about-studio.jpg */}
              <div className="flex h-[500px] w-full items-center justify-center bg-card/60">
                <div className="text-center text-muted-foreground">
                  <CameraIcon className="mx-auto mb-3 h-12 w-12 opacity-30" />
                  <p className="text-sm">Add your studio photo here</p>
                  <p className="mt-1 text-xs opacity-60">public/about-studio.png</p>
                </div>
              </div>
            </div>
            <div className="glass-strong absolute -bottom-6 -right-6 hidden rounded-2xl px-6 py-4 sm:block">
              <p className="font-heading text-3xl text-gold">12+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Years Experience
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.35em] text-gold">
              About Us
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              A studio devoted to storytelling through light
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Saba Creation is a professional photography studio built on a
              passion for emotion, detail, and timeless craft. We don&apos;t just
              take pictures — we preserve the fleeting moments that define your
              story, transforming them into art you&apos;ll treasure for
              generations.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col gap-4">
              {[
                { icon: Heart, text: "Passionate, emotion-led storytelling" },
                { icon: CameraIcon, text: "Cinematic, editorial-grade imagery" },
                { icon: Award, text: "Award-winning, detail-obsessed team" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
                    <f.icon className="h-4 w-4 text-primary" />
                  </span>
                  <span className="text-sm text-foreground">{f.text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-3xl text-foreground">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
