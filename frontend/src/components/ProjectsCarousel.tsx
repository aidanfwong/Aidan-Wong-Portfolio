import { useState } from "react";
import type { Project } from "../types/portfolio";

type ProjectsCarouselProps = {
  projects: Project[];
};

const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  const [index, setIndex] = useState(0);
  const handleNext = () => setIndex((current) => (current + 1) % projects.length);
  const handlePrev = () => setIndex((current) => (current - 1 + projects.length) % projects.length);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-3xl border border-muted/60 bg-card/80 shadow-xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)`, width: `${projects.length * 100}%` }}
        >
          {projects.map((project) => (
            <article key={project.title} className="flex w-full flex-col gap-6 p-6 sm:p-10 lg:flex-row lg:gap-12">
              <div
                className="flex h-64 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-muted/60 bg-muted/40 shadow-inner lg:h-auto lg:w-1/2"
                style={{ backgroundImage: project.accentGradient, backgroundSize: "cover", backgroundPosition: "center" }}
                aria-hidden
              >
                <span className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  {project.title.slice(0, 1)}
                </span>
              </div>
              <span className="sr-only">{project.title} project preview</span>
              <div className="flex flex-col gap-4 lg:w-1/2">
                <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{project.title}</h3>
                <p className="text-base leading-relaxed text-foreground/80">{project.description}</p>
                <ul className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-foreground/60">
                  {project.tech.map((item) => (
                    <li key={item} className="rounded-full bg-muted/70 px-3 py-1 text-foreground/80">
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-accent px-5 py-2 text-sm font-semibold uppercase tracking-wide text-accent transition hover:bg-accent hover:text-surface"
                >
                  View Source
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 5.414V13a1 1 0 11-2 0V5.414L9.707 7.707A1 1 0 118.293 6.293l4-4z" />
                    <path d="M5 9a1 1 0 00-1 1v5a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 112 0v2a3 3 0 01-3 3H5a3 3 0 01-3-3v-5a3 3 0 013-3h3a1 1 0 110 2H5z" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={handlePrev}
          className="rounded-full border border-foreground/30 p-3 text-foreground transition hover:border-accent hover:text-accent"
        >
          <span className="sr-only">Previous project</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          {projects.map((project, dotIndex) => (
            <span
              key={project.title}
              className={`h-2 w-8 rounded-full transition ${dotIndex === index ? "bg-accent" : "bg-foreground/30"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={handleNext}
          className="rounded-full border border-foreground/30 p-3 text-foreground transition hover:border-accent hover:text-accent"
        >
          <span className="sr-only">Next project</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
