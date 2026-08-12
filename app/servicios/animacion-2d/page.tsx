import { ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Animación 2D - Luis Gómez",
  description: "Videos de animación 2D cut-out y frame by frame de Luis Gómez.",
}

const videos = [
  {
    title: "Plano 02 - Moho",
    description: "Animación cut-out de personaje realizada en Moho Pro.",
    src: "/videos/animacion-2d/plano-02-moho.mp4",
  },
  {
    title: "Montaje 1",
    description: "Montaje de animación y edición de secuencias.",
    src: "/videos/animacion-2d/montaje-1.mp4",
  },
  {
    title: "Ilustración animada",
    description: "Pieza de ilustración animada frame by frame.",
    src: "/videos/animacion-2d/ilustracion-13.mp4",
  },
]

export default function Animacion2DPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <a
              href="/#proyectos"
              className="inline-flex items-center gap-2 text-[16px] font-bold mb-8 hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </a>

            <div className="mb-12 md:mb-16">
              <h1 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
                <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">Animación 2D</span>
              </h1>
              <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl">
                Animación de personajes cut-out y frame by frame para explainers, campañas y contenido de marca.
                Diseño y rigging de personajes con movimientos expresivos y prolijos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden flex flex-col"
                >
                  <video
                    src={video.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-auto bg-black aspect-video"
                  />
                  <div className="p-6">
                    <h3 className="text-[22px] leading-[30px] font-bold mb-2 text-[#0B0B0B]">{video.title}</h3>
                    <p className="text-[16px] leading-[26px] font-medium text-[#393939]">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div>
                <h3 className="text-[24px] leading-[32px] font-bold mb-2 text-[#0B0B0B]">
                  ¿Te interesa un proyecto de animación 2D?
                </h3>
                <p className="text-[16px] leading-[26px] font-medium text-[#393939]">
                  Escribime y hablamos sobre tu idea.
                </p>
              </div>
              <Button
                className="bg-black text-white hover:bg-black/90 rounded-[16px] px-8 py-6 font-medium text-[18px] h-[64px] flex-shrink-0"
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
      </section>

      <Footer />
    </main>
  )
}
