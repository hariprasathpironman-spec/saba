"use client"

import { Camera } from "lucide-react"
import { Instagram, Facebook, Youtube, Twitter } from "@/components/icons/social"

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/sabacreation__?igsh=MWs5Z250NG1ncHM1Ng==", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <a href="#home" className="flex items-center gap-2">
            <Camera className="h-6 w-6 text-primary" />
            <span className="font-heading text-2xl tracking-wide text-foreground">
              Saba <span className="text-gold">Creation</span>
            </span>
          </a>

          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Capturing memories that last forever — premium wedding, event and
            portrait photography crafted with passion.
          </p>

          <ul className="flex flex-wrap justify-center gap-6">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Saba Creation. All rights reserved.
            Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  )
}
