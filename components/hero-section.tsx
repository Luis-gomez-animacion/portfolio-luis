"use client"

import { Mail, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export function HeroSection() {
  return (
    <section id="inicio" className="container mx-auto px-4 py-10 md:py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            Soy <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">Luis Gómez</span>, Animador 2D/3D y{" "}
            <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Motion Designer</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            Creativo, responsable y rápido. Siempre busco mejorar cada proyecto aportando un plus en cada etapa. Combino
            edición profesional con herramientas de IA para optimizar procesos, resolver problemas de forma práctica y
            entregar resultados claros y de calidad. Me enfoco en soluciones creativas y en un trabajo prolijo que
            facilite el flujo de cada producción.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button
              className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              asChild
            >
              <a href="mailto:Luisgomezz2014@gmail.com">
                <Mail className="w-5 h-5" />
                Contáctame
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
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
          <div className="relative w-full max-w-md aspect-square bg-[#6366F1] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <DotLottieReact
              src="https://lottie.host/8e7dc09a-dba8-4bf7-a069-fca901b643c1/3VdpLNGAjJ.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
