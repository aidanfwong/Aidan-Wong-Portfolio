import ProjectsCarousel from "../components/ProjectsCarousel";
import { projects } from "../data/projects";

const ProjectsPage = () => (
  <section className="flex flex-col gap-12">
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-accent">Projects</p>
      <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Recent Build Highlights</h2>
      <p className="mx-auto mt-3 max-w-2xl text-base text-foreground/70">
        A snapshot of the products and experiments I've shipped recently. Each project is structured so new features and motion can be layered in without rewriting the foundation.
      </p>
    </div>
    <ProjectsCarousel projects={projects} />
  </section>
);

export default ProjectsPage;
