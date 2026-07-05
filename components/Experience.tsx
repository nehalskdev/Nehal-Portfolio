import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Reveal>
      <section id="experience" className="mb-10">
        <h2 className="text-primary">Experience</h2>
        <div className="mt-6 flex flex-col gap-5">
          {experience.map((entry) => (
            <div
              key={entry.company}
              className="rounded-lg border border-[#ddd] bg-card p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:border-[#333] dark:bg-card-dark"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="m-0">
                  {entry.role} · {entry.company}
                </h3>
                <span className="text-sm opacity-70">{entry.period}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
