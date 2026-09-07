import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Anton, Space_Mono } from "next/font/google"

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-body",
})

export const metadata: Metadata = {
  title: "Luis Gómez - Animador 2D/3D & Motion Designer",
  description:
    "Portafolio de Luis Gómez, Director de Arte y Animador especializado en animación 2D/3D, motion graphics y postproducción audiovisual.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${anton.variable} ${spaceMono.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
