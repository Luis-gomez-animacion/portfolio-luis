import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#6366F1] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/luis-profile.jpg"
              alt="Luis Gómez trabajando"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              ¿Quién está detrás de{" "}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">este trabajo?</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              Formado en la ENERC como Realizador Audiovisual Integral, complemento esta base sólida con el título de
              Técnico Universitario en Diseño y Animación Digital, especializado en Dirección de Animación y
              Postproducción.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Mi perfil combina una fuerte preparación técnica con una mirada artística amplia: dirección teatral,
              dirección de arte, ambientación, mapping e iluminación —área en la que tengo experiencia profesional y
              manejo especializado.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Editor, Animador y Creador de Contenido</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Integro creatividad con herramientas de IA para optimizar procesos, resolver problemas y aportar
                  soluciones claras dentro de equipos de trabajo. Manejo animación 3D, rigging, modelado, cut-out,
                  frame-by-frame, efectos especiales y edición.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Asistente de Dirección en Largometrajes</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  He participado en largometrajes con equipos numerosos, coordinando áreas y manteniendo flujos de
                  producción ordenados.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FFC224] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Diseñador y Director de Arte</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Dibujo, diseño personajes y desarrollo estéticas completas para proyectos escénicos y audiovisuales.
                  Soy un colaborador responsable, flexible y orientado a mejorar cada proyecto.
                </p>
              </div>
            </div>
          </div>

          <Button
            className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            asChild
          >
            <a href="https://www.behance.net/luisanimador" target="_blank" rel="noopener noreferrer">
              <FileText className="w-5 h-5" />
              Ver Behance
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
