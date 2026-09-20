import { ArrowLeft, ArrowRight, Mail, Youtube } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ServiceMotion } from "@/components/service-motion"
import { getOtherServices, getServiceProjects, type Project, type Service } from "@/lib/content"

function ProjectMedia({ project }: { project: Project }) {
  if (project.behanceEmbed) {
    return (
      <iframe
        src={`https://www.behance.net/embed/project/${project.behanceEmbed}?ilo0=1`}
        className="h-full min-h-[280px] w-full border-0 md:min-h-[420px]"
        allowFullScreen
        loading="lazy"
        allow="clipboard-write"
        title={project.title}
      />
    )
  }

  if (project.video) {
    return (
      <video
        src={project.video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
    )
  }

  if (project.image) {
    return <img src={project.image} alt="" className="h-full w-full object-cover" />
  }

  return <div className="h-full min-h-[280px] w-full bg-secondary md:min-h-[420px]" />
}

function ProjectBlock({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article
      data-project
      className={`grid overflow-hidden border-2 border-foreground bg-card md:grid-cols-2 ${
        flip ? "hard-shadow-magenta" : "hard-shadow"
      }`}
    >
      <div className={`flex flex-col justify-center p-6 md:p-10 ${flip ? "md:order-2" : ""}`}>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm font-bold text-muted-foreground">{project.year}</span>
          <span className="border-2 border-foreground bg-foreground px-3 py-1 font-mono text-xs font-bold uppercase tracking-wide text-background">
            {project.tag}
          </span>
        </div>

        <h2 className="mb-4 text-[28px] leading-[32px] text-foreground md:text-[40px] md:leading-[42px]">
          {project.title}
        </h2>

        <p className="mb-5 max-w-xl text-[15px] leading-[26px] font-medium text-muted-foreground md:text-[16px] md:leading-[28px]">
          {project.description}
        </p>

        <p className="mb-5 font-mono text-sm">
          <span className="font-bold text-foreground">Rol: </span>
          <span className="text-muted-foreground">{project.role}</span>
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="border-2 border-foreground bg-secondary px-3 py-1 font-mono text-xs font-bold uppercase tracking-wide text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-overshoot hover:gap-3 ${
              project.isYoutube ? "text-[#FF2E40]" : "text-brutal-lime"
            }`}
          >
            {project.isYoutube ? (
              <>
                <Youtube className="h-4 w-4" />
                Ver en YouTube
              </>
            ) : (
              <>
                Ver proyecto
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </a>
        )}
      </div>

      <div
        className={`relative min-h-[240px] overflow-hidden border-foreground md:min-h-[420px] ${
          flip ? "border-b-2 md:order-1 md:border-b-0 md:border-r-2" : "border-t-2 md:border-t-0 md:border-l-2"
        }`}
      >
        <ProjectMedia project={project} />
      </div>
    </article>
  )
}

export function ServiceView({ service }: { service: Service }) {
  const related = getServiceProjects(service.slug)
  const others = getOtherServices(service.slug)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-10 md:py-16">
        <ServiceMotion>
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#servicios"
            data-service-intro
            className="link-underline mb-8 inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wide hover:text-brutal-lime"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a servicios
          </Link>

          <div
            data-service-intro
            className="mb-10 grid gap-8 border-2 border-foreground bg-card p-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:p-10"
          >
            <div>
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Servicio
              </p>
              <h1 className="mb-6 text-[44px] leading-[42px] md:text-[72px] md:leading-[68px]">
                <span
                  className={`${service.bgColor} sticker inline-block px-3 py-1`}
                  style={{ color: service.titleFg }}
                >
                  {service.title}
                </span>
              </h1>
              <p className="max-w-2xl text-[16px] leading-[28px] font-medium text-muted-foreground md:text-[18px] md:leading-[30px]">
                {service.description}
              </p>
            </div>

            <div className="flex items-end justify-start md:justify-end">
              <div className="border-2 border-foreground bg-brutal-lime px-6 py-5 text-[#110f0c] hard-shadow-sm">
                <p className="font-display text-[56px] leading-[52px]">{String(related.length).padStart(2, "0")}</p>
                <p className="mt-2 font-mono text-xs font-bold uppercase tracking-widest">
                  {related.length === 1 ? "Proyecto" : "Proyectos"}
                </p>
              </div>
            </div>
          </div>

          <nav data-service-intro aria-label="Otros servicios" className="mb-10 flex flex-wrap gap-2">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/servicios/${item.slug}`}
                className="border-2 border-foreground bg-card px-3 py-2 font-mono text-xs font-bold uppercase tracking-wide transition-colors hover:bg-brutal-lime hover:text-[#110f0c]"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="space-y-8">
            {related.map((project, index) => (
              <ProjectBlock key={project.slug} project={project} flip={index % 2 === 1} />
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-2 border-foreground bg-[#FFC224] p-8 text-[#110f0c] shadow-[8px_8px_0px_0px_var(--brutal-lime)] md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="mb-2 text-[28px] leading-[32px] md:text-[36px] md:leading-[38px]">{service.cta}</h2>
              <p className="font-mono text-sm font-medium">Escribime y vemos cómo entra en el proyecto.</p>
            </div>
            <Button
              className="h-[64px] flex-shrink-0 rounded-none border-2 border-[#110f0c] bg-[#110f0c] px-8 py-6 text-[18px] font-bold text-[#f3efe3] hover:bg-[#110f0c]/90"
              asChild
            >
              <a href="mailto:Luisgomezz2014@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Contactame
              </a>
            </Button>
          </div>
        </div>
        </ServiceMotion>
      </section>

      <Footer />
    </main>
  )
}
