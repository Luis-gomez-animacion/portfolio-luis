"use client"

import { Mail, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="container mx-auto px-4 py-10 md:py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="sticker bg-brutal-lime text-[#110f0c] text-xs md:text-sm font-bold uppercase tracking-widest px-3 py-1 border-2 border-[#110f0c]">
            Animación 2D / 3D · Motion
          </span>

          <h1 className="font-display uppercase text-[44px] leading-[42px] md:text-[84px] md:leading-[78px] tracking-tight">
            Luis Gómez
            <br />
            <span className="text-brutal-lime">Motion</span> &amp;{" "}
            <span className="text-brutal-magenta">3D Designer</span>
          </h1>

          <p className="text-muted-foreground text-[15px] md:text-[17px] leading-[26px] md:leading-[28px] max-w-xl">
            Creativo, responsable y rápido. Siempre busco mejorar cada proyecto aportando un plus en cada etapa. Combino
            edición profesional con herramientas de IA para optimizar procesos, resolver problemas de forma práctica y
            entregar resultados claros y de calidad.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <Button
              className="bg-brutal-lime text-[#110f0c] hover:bg-brutal-lime/90 rounded-none border-2 border-foreground py-5 px-8 md:py-[22px] md:px-[52px] text-base md:text-lg font-bold uppercase tracking-wide h-auto w-full sm:w-auto"
              asChild
            >
              <a href="mailto:Luisgomezz2014@gmail.com">
                <Mail className="w-5 h-5" />
                Contáctame
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background rounded-none py-5 px-8 md:py-[22px] md:px-[52px] text-base md:text-lg font-bold uppercase tracking-wide h-auto w-full sm:w-auto"
              asChild
            >
              <a href="#proyectos">
                <Play className="w-5 h-5" />
                Ver proyectos
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-4 -left-4 sticker-r bg-brutal-magenta text-[#110f0c] text-xs font-bold uppercase tracking-widest px-3 py-1 border-2 border-[#110f0c] z-10">
              Buenos Aires, AR
            </div>
            <div className="relative aspect-[4/3] border-4 border-foreground overflow-hidden hard-shadow">
              <img
                src="/images/luis-portrait.png"
                alt="Luis Gómez, animador y motion designer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-brutal-rust mix-blend-color opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
