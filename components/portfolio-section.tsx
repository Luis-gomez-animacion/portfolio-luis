import { ArrowRight, ExternalLink, Youtube } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "Dioramas - Proyecto Transmedia",
      description:
        "Proyecto transmedia que recorre la memoria material de los barrios de clase trabajadora de Formosa durante los años '90. A partir de dioramas 3D animados en diálogo con relatos sonoros documentales, la obra propone un recorrido inmersivo por espacios cotidianos, explorable en realidad virtual o vía web mientras los relatos se reproducen en loop.",
      tag: "Animación 3D / VR / Transmedia",
      role: "Animador 3D / Director",
      tools: ["Blender", "Unity / VR", "After Effects", "Diseño Sonoro"],
      year: "2024",
      bgColor: "bg-[#0F766E]",
      link: "https://www.behance.net/luisanimador",
      video: "/videos/dioramas.mp4",
    },
    {
      title: "Motion Explainer - Cut Out Animation",
      description:
        "Animación cut-out 2D estilo explainer video. Diseño de personajes y escenarios con animación fluida para comunicar conceptos de forma clara y atractiva. Técnica de recorte digital con movimientos expresivos.",
      tag: "Motion Explainer",
      role: "Animador 2D / Motion Designer",
      tools: ["After Effects", "Illustrator", "Photoshop"],
      year: "2024",
      bgColor: "bg-[#1769FF]",
      link: "https://www.behance.net/gallery/227310537/Motion-splainer_cut-out",
      video: "/videos/motion-explainer.mp4",
    },
    {
      title: "Dealidad 360 - Mafalda",
      description:
        "Animación de personajes en Moho Pro para muestra interactiva inmersiva basada en la obra de Quino (Mafalda). Animación cut-out 2D de personajes originales para instalaciones con mapping y proyección 360°. Trabajo cuidadoso para mantener fidelidad al estilo original del autor.",
      tag: "Animación Cut-out 2D",
      role: "Animador de Personajes 2D",
      tools: ["Moho Pro", "After Effects", "Premiere Pro"],
      year: "Actual",
      bgColor: "bg-[#6366F1]",
      link: "https://www.behance.net/luisanimador",
      video: "/videos/mafalda.mp4",
      highlight: true,
    },
    {
      title: "Hornstromp Games",
      description:
        "Animador 3D, Rigging y Artista SFX para uno de los canales de animación mas grandes de YouTube (+4M suscriptores). Creación de contenido animado viral basado en franquicias populares como Poppy Playtime, The Amazing Digital Circus, Among Us y mas.",
      tag: "Animación 3D & SFX",
      role: "Animador 3D / Rigging / Artista SFX",
      tools: ["Blender", "After Effects", "Audition", "Illustrator"],
      year: "2021 - Presente",
      bgColor: "bg-[#FF0000]",
      link: "https://www.youtube.com/watch?v=RFeovX89H30",
      isYoutube: true,
      stats: "+4M Suscriptores",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PRUEBA_HORNSTRAOMP_V1_2-sJTqd6vkLPRHSX7nKeX7S2pWoyDr5J.mp4",
    },
    {
      title: "Ogilvy - Bimbo",
      description:
        "Animación y motion graphics para campañas de marca trabajando como Liquid Designer. Trabajo destacado en campañas para Bimbo (Pan Bimbo, Artesano), incluyendo contenido para redes sociales y comunicaciones integrales de marca.",
      tag: "Motion Graphics",
      role: "Liquid Designer",
      tools: ["After Effects", "Illustrator", "Premiere Pro"],
      year: "2023",
      bgColor: "bg-[#FF6B7A]",
      link: "https://www.behance.net/gallery/172360949/Motion-para-content",
      behanceEmbed: "172360949",
      isBehance: true,
    },
    {
      title: "8 Agency - Campañas Publicitarias",
      description:
        "Animación 2D, motion graphics y edición de video para campañas publicitarias. Manejo de proyectos con archivos pesados en Adobe Premiere, corrección de color y postproducción. Coordinación con equipos creativos para entregas en plazos ajustados.",
      tag: "Motion Graphics & Edición",
      role: "Motion Designer",
      tools: ["After Effects", "Premiere Pro", "Photoshop"],
      year: "2023",
      bgColor: "bg-[#2F81F7]",
      link: "https://www.behance.net/gallery/192083029/Motion-para-RRSS",
      behanceEmbed: "192083029",
      isBehance: true,
    },
    {
      title: "Flocsy - Clientes USA",
      description:
        "Animación 2D y motion graphics para campañas de marca, principalmente clientes del mercado estadounidense. Trabajo bajo NDA en múltiples cuentas internacionales con entregas de alta calidad.",
      tag: "Motion Design",
      role: "Motion Designer",
      tools: ["After Effects", "Illustrator", "Cinema 4D"],
      year: "Actual",
      bgColor: "bg-[#FFC224]",
      link: "https://www.behance.net/gallery/248001365/RRSS-varios",
      behanceEmbed: "248001365",
      isBehance: true,
    },
    {
      title: "Yielding - Divulgacion Cientifica",
      description:
        "Dirección de animación para canal de YouTube en España. Creacion de tutoriales de divulgacion cientifica. Lideré un equipo creativo de 4 ilustradores y 3 animadores, desarrollando contenido animado educativo de alta calidad.",
      tag: "Dirección de Animación",
      role: "Director de Animación",
      tools: ["After Effects", "Illustrator", "Photoshop"],
      year: "2022 - 2023",
      bgColor: "bg-[#10B981]",
      link: "https://www.behance.net/gallery/113623731/Tutorial-de-divulgacion-cientifica",
      behanceEmbed: "113623731",
      isBehance: true,
    },
    {
      title: "Cortometraje Pulcro",
      description:
        "Guion, direccion y produccion de cortometraje. Desarrollo integral del proyecto audiovisual desde la conceptualizacion hasta la postproduccion final. Trabajo de direccion de actores y fotografia cinematografica.",
      tag: "Direccion de Cine",
      role: "Director / Guionista / Productor",
      tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
      year: "2023",
      bgColor: "bg-[#8B5CF6]",
      link: "https://www.behance.net/gallery/186196651/guion-direccion-y-produccion-de-cortometraje-pulcro",
      behanceEmbed: "186196651",
      isBehance: true,
    },
  ]

  return (
    <section id="proyectos" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mirá mis <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">proyectos destacados</span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all ${
                project.isYoutube ? "ring-4 ring-red-500 ring-offset-4" : ""
              }`}
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold text-[#393939]">{project.year}</span>
                  {project.stats && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Youtube className="w-3 h-3" />
                      {project.stats}
                    </span>
                  )}
                </div>

                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-3 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[16px] text-[#393939] mb-4 leading-relaxed md:leading-[28px] font-medium">
                  {project.description}
                </p>

                <div className="mb-4">
                  <span className="text-sm font-bold text-[#0B0B0B]">Rol: </span>
                  <span className="text-sm text-[#393939]">{project.role}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-gray-100 text-[#393939] text-xs font-medium px-3 py-1 rounded-full border border-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 font-semibold hover:gap-3 transition-all text-sm md:text-base ${
                    project.isYoutube ? "text-red-600 hover:text-red-700" : "text-[#0B0B0B]"
                  }`}
                >
                  {project.isYoutube ? "Ver video en YouTube" : "Ver proyecto"}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div
                className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[400px] flex items-center justify-center`}
              >
                {project.isYoutube && (
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10">
                    <Youtube className="w-6 h-6 text-red-600" />
                  </div>
                )}
                {project.isBehance && (
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10">
                    <svg className="w-6 h-6 text-[#1769FF]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                    </svg>
                  </div>
                )}
                {project.behanceEmbed ? (
                  <iframe
                    src={`https://www.behance.net/embed/project/${project.behanceEmbed}?ilo0=1`}
                    className="w-full h-full min-h-[400px] border-0"
                    allowFullScreen
                    loading="lazy"
                    allow="clipboard-write"
                    title={project.title}
                  />
                ) : project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={`/.jpg?key=7nk4i&height=400&width=500&query=${encodeURIComponent(project.tag + " animation motion graphics professional work")}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.behance.net/luisanimador"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base"
          >
            <ExternalLink className="w-5 h-5" />
            Ver todo en Behance
          </a>
        </div>
      </div>
    </section>
  )
}
