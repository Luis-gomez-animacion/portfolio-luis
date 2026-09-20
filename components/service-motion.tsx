"use client"

import { useRef, type ReactNode } from "react"

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"

export function ServiceMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.utils.toArray<HTMLElement>("[data-service-intro]")
        if (intro.length) {
          gsap.from(intro, {
            autoAlpha: 0,
            y: 24,
            duration: 0.6,
            stagger: 0.08,
            ease: "power4.out",
            clearProps: "transform",
          })
        }

        const projects = gsap.utils.toArray<HTMLElement>("[data-project]")
        gsap.set(projects, { autoAlpha: 0, y: 40 })

        ScrollTrigger.batch(projects, {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.12,
              ease: "power4.out",
              overwrite: true,
              clearProps: "transform",
            }),
        })
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return <div ref={root}>{children}</div>
}
