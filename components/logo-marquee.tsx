export function LogoMarquee() {
  const tools = ["After Effects", "Adobe Creative Suite", "Cinema 4D", "Blender", "Nano Banana", "Midjourney", "Canva"]

  return (
    <div className="overflow-hidden py-14 md:py-20">
      <div className="relative overflow-hidden bg-[#6366F1] py-6 -rotate-[3deg] min-w-[120vw] -mx-[10vw] left-0 border-y-4 border-foreground">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
            <span key={index} className="text-white font-bold text-xl md:text-2xl flex items-center gap-4">
              {tool}
              <span className="w-3 h-3 bg-card rounded-full"></span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}