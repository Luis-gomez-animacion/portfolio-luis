/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/servicios/edicion-postproduccion",
        destination: "/servicios/postproduccion",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
