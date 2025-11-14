import type { Experience } from "../types/portfolio";

type ExperienceTimelineProps = {
  timeline: Experience[];
};

const ExperienceTimeline = ({ timeline }: ExperienceTimelineProps) => (
  <div className="relative">
    <div className="absolute inset-0 mx-auto hidden w-px bg-foreground/20 md:block" aria-hidden />
    <div className="flex flex-col gap-10">
      {timeline.map((experience) => (
        <article
          key={`${experience.organisation}-${experience.year}`}
          className="relative grid gap-6 rounded-3xl border border-muted/60 bg-card/80 p-6 shadow-lg sm:p-8 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]"
        >
          <header className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">{experience.year}</span>
            <h3 className="font-display text-2xl font-semibold text-foreground">{experience.organisation}</h3>
            <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">{experience.title}</p>
          </header>
          <ul className="space-y-2 text-sm leading-relaxed text-foreground/80">
            {experience.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </div>
);

export default ExperienceTimeline;
