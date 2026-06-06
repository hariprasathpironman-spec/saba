"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function LoadingScreen() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Aperture spinner */}
          <motion.div
            className="relative h-20 w-20"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "linear" }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 h-9 w-9 origin-top -translate-x-1/2 rounded-b-full"
                style={{
                  transform: `rotate(${i * 60}deg)`,
                  background:
                    "linear-gradient(180deg, rgba(232,192,116,0.85), rgba(232,192,116,0.05))",
                }}
              />
            ))}
            <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background" />
          </motion.div>

          <motion.p
            className="mt-8 font-heading text-2xl tracking-[0.3em] text-foreground"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            SABA CREATION
          </motion.p>
          <motion.p
            className="mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Loading memories
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
