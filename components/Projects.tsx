import Image from "next/image";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <Reveal>
      <section id="projects" className="mb-10">
        <h2 className="text-primary">Projects</h2>
        <div className="flex flex-wrap gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative min-w-[calc(50%-20px)] flex-1 rounded-lg border border-[#ddd] bg-card p-4.5 shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1.25 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] dark:border-[#333] dark:bg-card-dark"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-0 bottom-0 p-2.5"
              >
                <Image
                  src="/assets/share.png"
                  alt="share-icon"
                  width={24}
                  height={24}
                  sizes="24px"
                  loading="lazy"
                  className="h-6 w-6"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
