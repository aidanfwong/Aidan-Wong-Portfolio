import ExperienceTimeline from "../components/ExperienceTimeline";
import { experienceTimeline } from "../data/experience";

const ExperiencePage = () => (
  <section className="flex flex-col gap-12">
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-accent">Experience</p>
      <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Roles that Shaped My Practice</h2>
      <p className="mx-auto mt-3 max-w-2xl text-base text-foreground/70">
        From automation to community engagement, these milestones highlight how I collaborate with teams and build reliable experiences.
      </p>
    </div>
    <ExperienceTimeline timeline={experienceTimeline} />
  </section>
);

export default ExperiencePage;
