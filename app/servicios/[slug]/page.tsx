import { notFound } from "next/navigation"

import { ServiceView } from "@/components/service-view"
import { getService, services } from "@/lib/content"

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return { title: "Servicio - Luis Gómez" }
  }

  return {
    title: `${service.title} - Luis Gómez`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  return <ServiceView service={service} />
}
