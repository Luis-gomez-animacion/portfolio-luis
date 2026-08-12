"use client"

import { Cuboid } from "lucide-react"

export function SketchfabSection() {
  return (
    <section className="bg-[#0B0B0B] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#6366F1] text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              <Cuboid className="w-4 h-4" />
              Modelado 3D
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              También hago{" "}
              <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">modelado 3D</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Explora este hacha estilizada que modele en Blender. Podes rotarla y verla desde todos los angulos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(99,102,241,1)]">
              <div className="aspect-square w-full">
                <iframe
                  title="Axe Stylizate"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  src="https://sketchfab.com/models/ba6f0b16e9a24fe6a0e24d91cf25ff50/embed?autostart=1&ui_theme=dark"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="text-white space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">Axe Stylizate</h3>
              <p className="text-gray-400 leading-relaxed">
                Esta hacha estilizada fue modelada completamente en Blender, con un enfoque en formas limpias 
                y un estilo visual que combina lo cartoon con detalles realistas. Es un ejemplo de mi trabajo 
                en modelado 3D para videojuegos y animacion.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#6366F1] rounded-full"></div>
                  <span className="text-gray-300">Modelado en Blender</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#FF6B7A] rounded-full"></div>
                  <span className="text-gray-300">Texturizado stylized</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#FFC224] rounded-full"></div>
                  <span className="text-gray-300">Listo para animacion</span>
                </div>
              </div>

              <a
                href="https://sketchfab.com/Luishigomez.space"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#6366F1] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#6366F1]/90 transition-colors"
              >
                <Cuboid className="w-5 h-5" />
                Ver mas en Sketchfab
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
