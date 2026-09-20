export type Project = {
  slug: string
  title: string
  description: string
  tag: string
  role: string
  tools: string[]
  year: string
  video?: string
  image?: string
  link?: string
  isYoutube?: boolean
  isBehance?: boolean
  behanceEmbed?: string
}

export type Service = {
  slug: string
  title: string
  description: string
  image: string
  video?: string
  bgColor: string
  accent: string
  titleFg: string
  cta: string
  projectSlugs: string[]
}

export const projects: Project[] = [
  {
    slug: "mafalda",
    title: "Dealidad 360 — Mafalda",
    description:
      "Animación cut-out 2D de personajes en Moho Pro para una muestra inmersiva basada en la obra de Quino. Mapping y proyección 360°, con cuidado de no romper el trazo original.",
    tag: "Cut-out 2D",
    role: "Animador de personajes",
    tools: ["Moho Pro", "After Effects", "Premiere Pro"],
    year: "Actual",
    video: "/videos/mafalda.mp4",
    link: "https://www.behance.net/luisanimador",
  },
  {
    slug: "manotazo",
    title: "Manotazo",
    description:
      "Plano de acting 2D: un personaje, un gag, un manotazo. Timing de comedia y posing leídos en un encuadre cerrado de noche.",
    tag: "Animación 2D",
    role: "Animador 2D",
    tools: ["Moho Pro"],
    year: "2025",
    video: "/videos/animacion-2d/GOMEZ-MANOTAZO-CAN2AP-NOCHE.mp4",
  },
  {
    slug: "motion-explainer",
    title: "Motion Explainer",
    description:
      "Explainer cut-out 2D. Personajes y escenarios diseñados para explicar un concepto sin que el movimiento se coma la lectura.",
    tag: "Cut-out / Explainer",
    role: "Animador 2D / Motion Designer",
    tools: ["After Effects", "Illustrator", "Photoshop"],
    year: "2024",
    video: "/videos/motion-explainer.mp4",
    link: "https://www.behance.net/gallery/227310537/Motion-splainer_cut-out",
  },
  {
    slug: "coloso",
    title: "Coloso mueve planetas",
    description:
      "Animación 3D de personaje en Cinema 4D: un coloso que desplaza planetas. Blocking, timing y acting leídos en viewport.",
    tag: "Animación 3D",
    role: "Animador 3D",
    tools: ["Cinema 4D"],
    year: "2025",
    video: "/videos/coloso-mueve-planetas.mp4",
  },
  {
    slug: "dioramas",
    title: "Dioramas — Proyecto Transmedia",
    description:
      "Dioramas 3D animados sobre la memoria material de los barrios de clase trabajadora de Formosa en los 90. Recorrido inmersivo en VR o web, con relatos sonoros en loop.",
    tag: "3D / VR / Transmedia",
    role: "Animador 3D / Director",
    tools: ["Blender", "Unity / VR", "After Effects", "Diseño Sonoro"],
    year: "2024",
    video: "/videos/dioramas.mp4",
    link: "https://www.behance.net/luisanimador",
  },
  {
    slug: "hornstromp",
    title: "Hornstromp Games",
    description:
      "Animación 3D, rigging y SFX para un canal de YouTube con +4M de suscriptores. Contenido viral sobre franquicias como Poppy Playtime, The Amazing Digital Circus y Among Us.",
    tag: "Animación 3D & SFX",
    role: "Animador 3D / Rigging / Artista SFX",
    tools: ["Blender", "After Effects", "Audition", "Illustrator"],
    year: "2021 — Presente",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PRUEBA_HORNSTRAOMP_V1_2-sJTqd6vkLPRHSX7nKeX7S2pWoyDr5J.mp4",
    link: "https://www.youtube.com/watch?v=RFeovX89H30",
    isYoutube: true,
  },
  {
    slug: "ogilvy-bimbo",
    title: "Ogilvy — Bimbo",
    description:
      "Motion para campañas de Pan Bimbo y Artesano: redes y piezas de marca, como Liquid Designer en Ogilvy.",
    tag: "Motion Graphics",
    role: "Liquid Designer",
    tools: ["After Effects", "Illustrator", "Premiere Pro"],
    year: "2023",
    link: "https://www.behance.net/gallery/172360949/Motion-para-content",
    behanceEmbed: "172360949",
    isBehance: true,
  },
  {
    slug: "8-agency",
    title: "8 Agency — Campañas",
    description:
      "Motion 2D, gráficos en movimiento y edición para publicidad. Archivos pesados en Premiere, color y post, con plazos cortos.",
    tag: "Motion & Edición",
    role: "Motion Designer",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    year: "2023",
    link: "https://www.behance.net/gallery/192083029/Motion-para-RRSS",
    behanceEmbed: "192083029",
    isBehance: true,
  },
  {
    slug: "flocsy",
    title: "Flocsy — Clientes USA",
    description:
      "Animación 2D y motion para cuentas de Estados Unidos. Trabajo bajo NDA, con entregas prolijas y repetibles.",
    tag: "Motion Design",
    role: "Motion Designer",
    tools: ["After Effects", "Illustrator", "Cinema 4D"],
    year: "Actual",
    link: "https://www.behance.net/gallery/248001365/RRSS-varios",
    behanceEmbed: "248001365",
    isBehance: true,
  },
  {
    slug: "openshow-fuxia",
    title: "Openshow Fuxia",
    description:
      "Apertura 3D para un show en vivo. Gráficos tridimensionales en clave fucsia, pensados para pegar en el arranque del evento.",
    tag: "Motion 3D",
    role: "Animador 3D / Motion Designer",
    tools: ["Blender", "After Effects"],
    year: "2026",
    video: "/videos/motion3d-openshow.mp4",
    link: "https://www.behance.net/luisanimador",
  },
  {
    slug: "vertical-fuxia",
    title: "Vertical Fuxia",
    description:
      "Motion 3D en formato vertical para pantallas y redes. Cámara y gráficos en clave fucsia, compuestos para mobile.",
    tag: "Motion 3D",
    role: "Animador 3D / Motion Designer",
    tools: ["Blender", "After Effects"],
    year: "2026",
    video: "/videos/motion3d-vertical.mp4",
    link: "https://www.behance.net/luisanimador",
  },
  {
    slug: "secuencia-07",
    title: "Astronauta",
    description:
      "Corte, ritmo y color de una secuencia: un astronauta, de la mesa de edición a la entrega.",
    tag: "Edición & Color",
    role: "Editor / Colorista",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    year: "2024",
    video: "/services/postproduccion-secuencia-07.mp4",
  },
  {
    slug: "pulcro",
    title: "Cortometraje Pulcro",
    description:
      "Guion, dirección y producción de cortometraje: de la idea a la post. Dirección de actores y fotografía.",
    tag: "Dirección",
    role: "Director / Guionista / Productor",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    year: "2023",
    link: "https://www.behance.net/gallery/186196651/guion-direccion-y-produccion-de-cortometraje-pulcro",
    behanceEmbed: "186196651",
    isBehance: true,
  },
  {
    slug: "yielding",
    title: "Yielding — Divulgación científica",
    description:
      "Dirección de animación para un canal de YouTube en España. Equipo de 4 ilustradores y 3 animadores, tutoriales educativos.",
    tag: "Dirección de Animación",
    role: "Director de Animación",
    tools: ["After Effects", "Illustrator", "Photoshop"],
    year: "2022 — 2023",
    link: "https://www.behance.net/gallery/113623731/Tutorial-de-divulgacion-cientifica",
    behanceEmbed: "113623731",
    isBehance: true,
  },
]

export const services: Service[] = [
  {
    slug: "animacion-2d",
    title: "Animación 2D",
    description:
      "Personajes, cut-out y frame by frame. El movimiento tiene que leerse: acting, timing y un plus en cada plano.",
    image: "/services/animacion-2d.png",
    video: "/videos/animacion-2d/GOMEZ-MANOTAZO-CAN2AP-NOCHE.mp4",
    bgColor: "bg-[#FF6B7A]",
    accent: "#FF6B7A",
    titleFg: "#110f0c",
    cta: "¿Un proyecto de animación 2D?",
    projectSlugs: ["mafalda", "manotazo", "motion-explainer"],
  },
  {
    slug: "animacion-3d",
    title: "Animación 3D",
    description:
      "Modelado, rigging y animación en Cinema 4D y Blender. Personajes, dioramas y contenido para YouTube, VR e instalaciones.",
    image: "/services/animacion-3d.png",
    video: "/videos/coloso-mueve-planetas.mp4",
    bgColor: "bg-[#6366F1]",
    accent: "#6366F1",
    titleFg: "#f3efe3",
    cta: "¿Un proyecto de animación 3D?",
    projectSlugs: ["coloso", "dioramas", "hornstromp"],
  },
  {
    slug: "motion-graphics",
    title: "Motion Graphics",
    description:
      "Gráficos en movimiento para marca, publicidad y redes. Piezas que tienen que pegar rápido y sostener una identidad.",
    image: "/services/motion-graphics.png",
    video: "/videos/Fundacion trauma_ central_V1.mp4",
    bgColor: "bg-[#2F81F7]",
    accent: "#2F81F7",
    titleFg: "#f3efe3",
    cta: "¿Un proyecto de motion?",
    projectSlugs: ["ogilvy-bimbo", "8-agency", "flocsy", "openshow-fuxia", "vertical-fuxia"],
  },
  {
    slug: "postproduccion",
    title: "Postproducción",
    description:
      "Edición, color y VFX. De la mesa de corte a la entrega, con archivos pesados y fechas que no se mueven.",
    image: "/services/vfx-sfx.png",
    bgColor: "bg-[#FFC224]",
    accent: "#FFC224",
    titleFg: "#110f0c",
    cta: "¿Un proyecto de postproducción?",
    projectSlugs: ["secuencia-07", "pulcro", "8-agency"],
  },
  {
    slug: "direccion-arte",
    title: "Dirección de Arte",
    description:
      "Liderazgo creativo: look, equipo y criterio. Desde divulgación científica hasta un cortometraje de principio a fin.",
    image: "/services/direccion-arte.png",
    video: "/videos/motion3d-openshow.mp4",
    bgColor: "bg-[#10B981]",
    accent: "#10B981",
    titleFg: "#110f0c",
    cta: "¿Un proyecto de dirección de arte?",
    projectSlugs: ["yielding", "pulcro", "dioramas"],
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export function getServiceProjects(slug: string) {
  const service = getService(slug)
  if (!service) return []

  return service.projectSlugs
    .map((projectSlug) => projects.find((project) => project.slug === projectSlug))
    .filter((project): project is Project => Boolean(project))
}

export function getOtherServices(slug: string) {
  return services.filter((service) => service.slug !== slug)
}
