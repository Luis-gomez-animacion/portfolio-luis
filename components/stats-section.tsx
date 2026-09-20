"use client"

import { useRef } from "react"

import { gsap, useGSAP } from "@/lib/gsap"

const stats = [
  { value: 7, suffix: "+", label: "Años de Experiencia" },
  { value: 200, suffix: "+", label: "Proyectos Entregados" },
  { value: 50, suffix: "+", label: "Clientes Satisfechos" },
]

export function StatsSection() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-stat]").forEach((el) => {
          const end = Number(el.dataset.stat)
          const suffix = el.dataset.suffix ?? ""
          const proxy = { val: 0 }

          gsap.to(proxy, {
            val: end,
            duration: 1.35,
            ease: "power2.out",
            snap: { val: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
            onUpdate: () => {
              el.textContent = `${proxy.val}${suffix}`
            },
          })
        })
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section ref={root} className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0B0B0B] text-white rounded-none p-8 border-4 border-foreground shadow-[6px_6px_0px_0px_var(--brutal-lime)] hover:shadow-[8px_8px_0px_0px_var(--brutal-lime)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
            >
              <div
                data-stat={stat.value}
                data-suffix={stat.suffix}
                className="text-5xl md:text-6xl font-bold mb-2"
              >
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
