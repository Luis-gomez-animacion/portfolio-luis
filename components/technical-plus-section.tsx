import { Lightbulb, Monitor, Theater, Cpu } from "lucide-react"

export function TechnicalPlusSection() {
  const technicalSkills = [
    {
      icon: Lightbulb,
      title: "Iluminador / Jefe de Escenario",
      description:
        "Diseño y operación de iluminación para teatro, conciertos y espectáculos. Coordinación de equipos técnicos y supervisión de montajes en eventos de gran escala.",
    },
    {
      icon: Cpu,
      title: "Consolas & Visualización 3D",
      description:
        "Operación y programación de consolas grandMA2 y grandMA3. Previsualización con MA 3D y WYSIWYG para diseño de shows.",
    },
    {
      icon: Monitor,
      title: "Videomapping",
      description:
        "Mapping arquitectónico y escénico con proyectores y LED. Creación de contenido visual sincronizado para eventos en vivo.",
    },
    {
      icon: Theater,
      title: "Escenotecnia",
      description:
        "Armado de estructuras, fondos y ambientación de escenarios. Cálculo de cableado, potencia y logística de montaje/desmontaje.",
    },
  ]

  const tools = ["grandMA2", "grandMA3", "MA 3D", "WYSIWYG", "DMX", "Art-Net"]

  return (
    <section className="bg-[#0B0B0B] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-[#6366F1] text-sm font-semibold uppercase tracking-wider mb-2 block">
                Perfil Complementario
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                También trabajo en <span className="text-[#FFC224]">eventos en vivo</span>
              </h2>
            </div>
            <p className="text-gray-400 text-base max-w-md md:text-right">
              Mi formación técnica en iluminación y escenotecnia complementa mi perfil audiovisual, permitiéndome
              aportar en producciones escénicas de gran escala.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#161616] border border-gray-800 rounded-2xl p-6 hover:border-[#6366F1]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#6366F1]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#6366F1]/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-[#6366F1]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#161616] border border-gray-800 rounded-full text-sm text-gray-300 hover:border-[#FFC224]/50 hover:text-[#FFC224] transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <span className="text-gray-500 text-sm">Experiencia en teatros, auditorios y eventos de gran escala</span>
            <span className="hidden md:block text-gray-700">•</span>
            <span className="text-gray-500 text-sm">
              Disponible para proyectos que combinen lo digital con lo escénico
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
