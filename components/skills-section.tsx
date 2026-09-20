import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { services } from "@/lib/content"

export function SkillsSection() {
  return (
    <section id="servicios" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-4xl font-bold md:text-[52px] md:leading-[60px]">
              Mis <span className="inline-block bg-[#FF6B7A] px-3 py-1 text-white">servicios</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg md:leading-[30px]">
              Especializado en dar vida a ideas a través de la animación y el diseño en movimiento, siempre buscando
              superar las expectativas.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((skill) => (
              <Link
                key={skill.slug}
                href={`/servicios/${skill.slug}`}
                className="group flex min-h-[280px] flex-col overflow-hidden rounded-none border-2 border-foreground bg-card transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_var(--brutal-lime)]"
              >
                <div
                  className={`${skill.bgColor} relative aspect-[16/10] overflow-hidden border-b-[3px] border-foreground`}
                >
                  {skill.video ? (
                    <video
                      src={skill.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <Image
                      src={skill.image || "/placeholder.svg"}
                      alt=""
                      fill
                      className="pointer-events-none object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col px-8 py-6">
                  <h3 className="mb-3 text-[24px] leading-[32px] font-bold text-foreground">{skill.title}</h3>
                  <p className="text-[16px] leading-[26px] font-medium text-muted-foreground">{skill.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wide text-brutal-lime transition-all duration-300 ease-overshoot group-hover:gap-2.5">
                    Ver proyectos →
                  </span>
                </div>
              </Link>
            ))}

            <div className="relative flex min-h-[280px] flex-col items-center justify-center rounded-none border-2 border-foreground bg-[#0B0B0B] p-8 text-center shadow-[8px_8px_0px_0px_var(--brutal-magenta)] transition-transform hover:translate-y-[-4px] md:p-10">
              <h3 className="mb-4 text-[24px] leading-[32px] font-bold text-white">¿Tenés un proyecto?</h3>
              <p className="mb-6 text-[16px] leading-[26px] font-medium text-gray-300">
                Escribime y hagamos realidad tu idea con animación de alto nivel.
              </p>
              <Button
                className="h-auto rounded-[12px] bg-[#6366F1] px-8 py-5 text-[16px] font-medium text-white hover:bg-[#6366F1]/90"
                asChild
              >
                <a href="#contacto">
                  <Mail className="mr-2 h-5 w-5" />
                  Contáctame
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
