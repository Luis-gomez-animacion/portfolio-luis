export function StatsSection() {
  const stats = [
    {
      number: "7+",
      label: "Años de Experiencia",
    },
    {
      number: "200+",
      label: "Proyectos Entregados",
    },
    {
      number: "50+",
      label: "Clientes Satisfechos",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#0B0B0B] text-white rounded-2xl p-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
