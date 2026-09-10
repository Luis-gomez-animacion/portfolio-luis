import { ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Edición & Postproducción - Luis Gómez",
  description: "Videos de edición y postproducción de Luis Gómez.",
}

const videos = [
  {
    title: "Secuencia 07",
    description: "Pieza de edición y postproducción de video.",
    src: "/videos/postproduccion/secuencia-07.mp4",
  },
]

export default function EdicionPostproduccionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <a
              href="/#proyectos"
              className="inline-flex items-center gap-2 text-[16px] font-bold mb-8 hover:text-brutal-lime transition-colors font-mono uppercase"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </a>

            <div className="mb-12 md:mb-16">
              <h1 className="text-4xl md:text-[52px] md:leading-[60px] mb-4">
                <span className="bg-brutal-rust text-[#110f0c] px-3 py-1 inline-block">Edición & Postproducción</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl">
                Edición de video, corrección de color y postproducción en Premiere Pro y DaVinci Resolve. Manejo de
                proyectos con archivos pesados y entregas en plazos ajustados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-foreground rounded-none overflow-hidden flex flex-col hover:shadow-[6px_6px_0px_0px_var(--brutal-lime)] transition-shadow"
                >
                  <video
                    src={video.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-auto bg-black aspect-video"
                  />
                  <div className="p-6">
                    <h3 className="text-[22px] leading-[30px] font-bold mb-2 text-foreground">{video.title}</h3>
                    <p className="text-[16px] leading-[26px] font-medium text-muted-foreground">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground font-mono text-sm mt-8 uppercase tracking-wide">
              + Más videos próximamente
            </p>

            <div className="mt-12 bg-[#FFC224] border-2 border-foreground rounded-none p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_0px_var(--brutal-lime)]">
              <div>
                <h3 className="text-[24px] leading-[32px] font-bold mb-2 text-[#110f0c]">
                  ¿Te interesa un proyecto de edición y postproducción?
                </h3>
                <p className="text-[16px] leading-[26px] font-medium text-[#2a251d]">
                  Escribime y hablamos sobre tu idea.
                </p>
              </div>
              <Button
                className="bg-[#110f0c] text-[#f3efe3] hover:bg-[#110f0c]/90 border-2 border-[#110f0c] rounded-none px-8 py-6 font-bold text-[18px] h-[64px] flex-shrink-0"
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