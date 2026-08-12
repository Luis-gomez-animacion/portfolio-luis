import { Mail } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SkillsSection() {
  const skills = [
    {
      title: "Animación 2D",
      description: "Creación de personajes, motion graphics y animaciones frame by frame con estilo único y fluido.",
      image: "/services/animacion-2d.png",
      bgColor: "bg-[#FF6B7A]",
    },
    {
      title: "Animación 3D",
      description: "Modelado, rigging y animación de personajes y escenarios en Cinema 4D y Blender.",
      image: "/services/animacion-3d.png",
      bgColor: "bg-[#6366F1]",
    },
    {
      title: "Motion Graphics",
      description: "Diseño de gráficos en movimiento para videos, publicidad y contenido digital de alto impacto.",
      image: "/services/motion-graphics.png",
      bgColor: "bg-[#2F81F7]",
    },
    {
      title: "Postproducción",
      description: "Composición, corrección de color y efectos visuales para producciones audiovisuales.",
      image: "/services/vfx-sfx.png",
      bgColor: "bg-[#FFC224]",
    },
    {
      title: "Dirección de Arte",
      description: "Liderazgo creativo y desarrollo de identidad visual para proyectos multimedia.",
      image: "/services/direccion-arte.png",
      bgColor: "bg-[#10B981]",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              Mis <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">servicios</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Especializado en dar vida a ideas a través de la animación y el diseño en movimiento, siempre buscando
              superar las expectativas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[280px] flex flex-col group"
              >
                <div
                  className={`${skill.bgColor} relative aspect-[16/10] overflow-hidden border-b-[3px] border-black`}
                >
                  <Image
                    src={skill.image || "/placeholder.svg"}
                    alt={skill.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-8 py-6 flex-1 flex flex-col">
                  <h3 className="text-[24px] leading-[32px] font-bold mb-3 text-[#0B0B0B]">{skill.title}</h3>
                  <p className="text-[16px] leading-[26px] font-medium text-[#393939]">{skill.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#0B0B0B] border-[3px] border-black rounded-[32px] p-8 md:p-10 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[280px] relative shadow-[8px_8px_0px_0px_rgba(99,102,241,1)]">
              <h3 className="text-[24px] leading-[32px] font-bold mb-4 text-white">¿Tenés un proyecto?</h3>
              <p className="text-[16px] leading-[26px] font-medium text-gray-300 mb-6">
                Escribime y hagamos realidad tu idea con animación de alto nivel.
              </p>
              <Button
                className="bg-[#6366F1] text-white hover:bg-[#6366F1]/90 rounded-[12px] px-8 py-5 font-medium text-[16px] h-auto"
                asChild
              >
                <a href="#contacto">
                  <Mail className="w-5 h-5 mr-2" />
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
