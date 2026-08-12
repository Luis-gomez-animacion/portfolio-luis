import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExperienceSection() {
  const experiences = [
    {
      period: "Actual",
      title: "Animador de Personajes 2D",
      company: "Dealidad 360",
      description:
        "Animación de personajes en Moho Pro para muestra interactiva inmersiva basada en la obra de Quino (Mafalda). Animación cut-out 2D para instalaciones con mapping y proyección 360°.",
      highlight: true,
    },
    {
      period: "Actual",
      title: "Motion Designer",
      company: "Flocsy",
      description:
        "Animación 2D y motion graphics para campañas de marca, principalmente clientes del mercado estadounidense. Trabajo bajo NDA en múltiples cuentas internacionales.",
    },
    {
      period: "2023",
      title: "Motion Designer",
      company: "8 Agency",
      description:
        "Animación 2D, motion graphics y edición de video para campañas publicitarias. Manejo de proyectos con archivos pesados en Adobe Premiere, corrección de color y postproducción.",
    },
    {
      period: "2023",
      title: "Liquid Designer",
      company: "Ogilvy",
      description:
        "Animación y motion graphics para campañas de marca. Trabajo destacado en campañas para Bimbo (Pan Bimbo, Artesano), contenido para redes sociales y comunicaciones integrales.",
    },
    {
      period: "2021 - Presente",
      title: "Animador 3D, Rigging & Artista SFX",
      company: "Hornstromp Games",
      description:
        "Animación 3D, rigging de personajes y creación de efectos de sonido para canal de YouTube con +4 millones de suscriptores. Contenido viral de franquicias como Poppy Playtime, The Amazing Digital Circus y Among Us.",
    },
    {
      period: "Feb 2022 - Feb 2023",
      title: "Director de Animación",
      company: "Yielding (España)",
      description:
        "Dirección de animación para canal de YouTube en España. Liderazgo de equipo creativo con 4 ilustradores y 3 animadores.",
    },
    {
      period: "Experiencia Audiovisual",
      title: "Mandinga - Producción y Actuación",
      company: "Teatro Independiente",
      description: "Producción, actuación, asistencia de dirección en cortometrajes y largometrajes, diseño de iluminación y videoclips musicales.",
    },
  ]

  const agencies = ["Dealidad 360", "Ogilvy", "8 Agency", "Flocsy", "Yielding", "Hornstromp Games"]

  const education = [
    {
      period: "En curso",
      title: "Tecnicatura Universitaria en Diseño Digital y Animación",
      institution: "Universidad Siglo 21",
    },
    {
      period: "Completado",
      title: "Realización Audiovisual Integral",
      institution: "ENERC - Escuela Nacional de Experimentación y Realización Cinematográfica",
    },
    {
      period: "Formación complementaria",
      title: "Cine, Iluminación y Actuación",
      institution: "Formación independiente",
    },
  ]

  return (
    <section id="experiencia" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4 text-center">Trabajé con</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {agencies.map((agency, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2 text-white font-medium text-sm md:text-base hover:bg-zinc-800 transition-colors"
              >
                {agency}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Mi <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">experiencia</span> profesional
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              Años de experiencia en animación, motion design y dirección de arte trabajando con equipos creativos y
              clientes internacionales.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-white">Educación</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-[#6366F1] pl-4">
                    <p className="text-sm text-gray-400">{edu.period}</p>
                    <p className="font-bold text-white">{edu.title}</p>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            <Button
              className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              asChild
            >
              <a href="https://www.linkedin.com/in/luis-gomez" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5" />
                Ver LinkedIn
              </a>
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-white border-4 border-black rounded-3xl min-h-[200px] md:min-h-[220px] ${exp.highlight ? "bg-[#6366F1] text-white" : ""}`}
              >
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[20px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  <div className="bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full">{exp.company}</div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[24px] leading-tight md:leading-[36px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[#393939] text-base md:text-[18px] leading-relaxed md:leading-[28px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
