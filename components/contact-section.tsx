import type React from "react"
import { Mail, Phone, Linkedin, ExternalLink, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const contactLinks = [
    {
      name: "Email",
      value: "Luisgomezz2014@gmail.com",
      href: "mailto:Luisgomezz2014@gmail.com",
      icon: Mail,
      color: "#6366F1",
    },
    {
      name: "Teléfono",
      value: "+54 11 3939-2211",
      href: "tel:+541139392211",
      icon: Phone,
      color: "#FF6B7A",
    },
    {
      name: "WhatsApp",
      value: "+54 11 3939-2211",
      href: "https://wa.me/541139392211?text=Hola%20Luis,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte",
      icon: MessageCircle,
      color: "#25D366",
    },
    {
      name: "LinkedIn",
      value: "Luis Gómez",
      href: "https://www.linkedin.com/in/luis-gomez",
      icon: Linkedin,
      color: "#0077B5",
    },
  ]

  const socialLinks = [
    {
      name: "Behance",
      href: "https://www.behance.net/luisanimador",
      color: "#1769FF",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@LuisGomez-uz3dw",
      color: "#FF0000",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Sketchfab",
      href: "https://sketchfab.com/Luishigomez.space",
      color: "#1CAAD9",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm6.862 16.245l-6.862 4.045-6.862-4.045V7.755L12 3.71l6.862 4.045v8.49zM12 7.09L8.052 9.545v4.91L12 16.91l3.948-2.455v-4.91L12 7.09z" />
        </svg>
      ),
    },
    {
      name: "Vimeo",
      href: "https://vimeo.com/user29485412",
      color: "#1AB7EA",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.001z" />
        </svg>
      ),
    },
    {
      name: "@luisenelcel",
      href: "https://www.instagram.com/luisenelcel",
      color: "#E4405F",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contacto" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ¿Listo para <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">trabajar juntos?</span>
          </h2>
          <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Contactame por el medio que prefieras. Estoy disponible para proyectos freelance, colaboraciones y
            oportunidades laborales.
          </p>
        </div>

        <div className="bg-white border-[3px] border-black rounded-[32px] p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-xl font-bold text-[#0B0B0B] mb-6">Contacto directo</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {contactLinks.map((contact) => (
              <a
                key={contact.name}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all hover:scale-[1.02] group"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: contact.color }}
                >
                  <contact.icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">{contact.name}</p>
                  <p
                    className="font-bold text-[#0B0B0B] truncate transition-colors"
                    style={{ "--hover-color": contact.color } as React.CSSProperties}
                  >
                    {contact.value}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          <h3 className="text-xl font-bold text-[#0B0B0B] mb-6">Redes y portafolios</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-200 hover:border-black transition-all hover:scale-[1.02]"
                style={{ "--hover-bg": social.color } as React.CSSProperties}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: social.color }}
                >
                  {social.icon}
                </div>
                <span className="font-semibold text-[#0B0B0B]">{social.name}</span>
              </a>
            ))}
          </div>

          <div className="bg-[#0B0B0B] rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">¿Tenés un proyecto en mente?</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Escribime directamente y conversemos sobre cómo puedo ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                className="bg-[#25D366] text-white hover:bg-[#25D366]/90 rounded-xl py-5 px-8 text-lg font-semibold h-auto"
                asChild
              >
                <a
                  href="https://wa.me/541139392211?text=Hola%20Luis,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button
                className="bg-[#6366F1] text-white hover:bg-[#6366F1]/90 rounded-xl py-5 px-8 text-lg font-semibold h-auto"
                asChild
              >
                <a href="mailto:Luisgomezz2014@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
