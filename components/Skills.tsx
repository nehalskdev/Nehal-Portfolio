import { skills } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Reveal>
      <section id="skills" className="mb-10 py-8">
        <h2 className="text-primary">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-8 max-[768px]:flex-col">
          {skills.map((category) => (
            <div
              key={category.category}
              className="min-w-0 flex-1 rounded-lg bg-card p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)] md:min-w-75 dark:bg-card-dark"
            >
              <h3 className="mb-4 border-b border-[#eee] pb-2 text-primary dark:border-[#333]">
                {category.category}
              </h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4 max-[768px]:grid-cols-[repeat(auto-fill,minmax(100px,1fr))] max-[480px]:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center rounded-md p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- local build-time SVG, doesn't need next/image's raster pipeline */}
                    <img
                      src={item.icon}
                      alt={item.name}
                      width={40}
                      height={40}
                      loading="lazy"
                      className="mb-2 h-10 w-10 object-contain max-[480px]:h-8.75 max-[480px]:w-8.75"
                    />
                    <span className="text-center text-sm max-[480px]:text-xs">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
