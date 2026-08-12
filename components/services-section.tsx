import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      title: "Animación 2D",
      description:
        "Animación de personajes cut-out y frame by frame para explainers, campañas y contenido de marca. Diseño y rigging de personajes con movimientos expresivos y prolijos.",
      image: "/services/animacion-2d.png",
      href: "/servicios/animacion-2d",
    },
    {
      title: "Animación 3D & Rigging",
      description:
        "Modelado, rigging y animación 3D en Blender. Creación de personajes y dioramas animados para YouTube, VR e instalaciones inmersivas.",
      image: "/services/animacion-3d.png",
    },
    {
      title: "Motion Graphics",
      description:
        "Motion graphics y animación de gráficos para redes sociales, publicidad y comunicación de marca. Contenido dinámico que capta la atención.",
      image: "/services/motion-graphics.png",
    },
    {
      title: "VFX & Diseño Sonoro",
      description:
        "Creación de efectos visuales y efectos de sonido (SFX) para contenido animado viral. Compositing y postproducción de alto impacto.",
      image: "/services/vfx-sfx.png",
    },
    {
      title: "Edición & Postproducción",
      description:
        "Edición de video, corrección de color y postproducción en Premiere Pro y DaVinci Resolve. Manejo de proyectos con archivos pesados y entregas en plazos ajustados.",
      image: "/services/edicion-video.png",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              Mi amplio <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">set de servicios</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Combino animación 2D/3D, motion graphics y postproducción con herramientas de IA para entregar resultados
              creativos, prolijos y de alta calidad en cada proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const cardClassName =
                "bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group relative"

              const cardContent = (
                <>
                  <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px] relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={382}
                      height={328}
                      className="w-full h-auto rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="px-8 pb-8 flex-1 flex flex-col">
                    <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                    <p className="text-[18px] leading-[30px] font-medium text-[#393939]">{service.description}</p>
                    {service.href && (
                      <span className="mt-4 inline-flex items-center gap-1 text-[16px] font-bold text-[#FF4A60]">
                        Ver videos →
                      </span>
                    )}
                  </div>
                </>
              )

              if (service.href) {
                return (
                  <Link key={index} href={service.href} className={cardClassName}>
                    {cardContent}
                  </Link>
                )
              }

              return (
                <div key={index} className={cardClassName}>
                  {cardContent}
                </div>
              )
            })}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={92}
                  height={92}
                  className="w-[92px] h-[92px]"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">Hablemos</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                ¿Buscás otro servicio? Contactame, hay muchas chances de que pueda ayudarte con tu proyecto.
              </p>
              <Button
                className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px]"
                asChild
              >
                <a href="mailto:Luisgomezz2014@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Contactame
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
