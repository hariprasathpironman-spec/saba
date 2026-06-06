"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Camera, Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2">
          <Camera className="h-5 w-5 text-primary" />
          <span className="font-heading text-xl tracking-wide text-foreground">
            Saba <span className="text-gold">Creation</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full gold-gradient px-6 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 md:inline-block"
        >
          Book Now
        </a>

        <button
          aria-label="Toggle menu"
          className="text-foreground md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="glass-strong mt-3 flex flex-col gap-4 px-6 py-6 md:hidden"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full gold-gradient px-6 py-2 text-center text-sm font-medium text-primary-foreground"
          >
            Book Now
          </a>
        </motion.ul>
      )}
    </motion.header>
  )
}
