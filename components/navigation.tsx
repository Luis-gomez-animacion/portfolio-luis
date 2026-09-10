import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-card border-2 border-foreground px-5 py-3 max-w-2xl mx-auto hard-shadow-sm">
        <div className="w-10 h-10 bg-brutal-lime border-2 border-foreground flex items-center justify-center flex-shrink-0 text-[#110f0c] font-bold text-sm font-display transition-transform duration-300 ease-overshoot hover:rotate-[-8deg] hover:scale-110">
          LG
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center font-mono uppercase text-sm tracking-wide">
          <a href="#inicio" className="font-bold hover:text-brutal-lime transition-colors link-underline">
            Inicio
          </a>
          <a href="#sobre-mi" className="font-bold hover:text-brutal-lime transition-colors link-underline">
            Sobre mí
          </a>
          <a href="#proyectos" className="font-bold hover:text-brutal-lime transition-colors link-underline">
            Proyectos
          </a>
          <a href="#experiencia" className="font-bold hover:text-brutal-lime transition-colors link-underline">
            Experiencia
          </a>
        </div>

        <Button
          className="bg-foreground text-background hover:bg-brutal-lime hover:text-[#110f0c] rounded-none border-2 border-foreground px-5 h-12 min-w-[48px] flex-shrink-0"
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
