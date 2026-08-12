import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-10 h-10 bg-[#6366F1] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
          LG
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="#inicio" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Inicio
          </a>
          <a href="#sobre-mi" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Sobre mí
          </a>
          <a href="#proyectos" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Proyectos
          </a>
          <a href="#experiencia" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Experiencia
          </a>
        </div>

        <Button
          className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0"
          asChild
        >
          <a href="mailto:Luisenelcel@gmail.com">
            <Mail className="w-10 h-10" strokeWidth={2.5} />
          </a>
        </Button>
      </nav>
    </div>
  )
}
