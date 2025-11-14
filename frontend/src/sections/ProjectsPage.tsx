import { useEffect, useState } from "react";
import ProjectsCarousel from "../components/ProjectsCarousel";
import { API_BASE_URL } from "../config";
import type { Project } from "../types/portfolio";

type Status = "loading" | "error" | "ready";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/projects`);
        if (!response.ok) {
          throw new Error("Unable to fetch projects");
        }
        const data = await response.json();
        setProjects(data.projects ?? []);
        setStatus("ready");
      } catch (error) {
        console.warn(error);
        setStatus("error");
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="flex flex-col gap-12">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Projects</p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Recent Build Highlights</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-foreground/70">
          A snapshot of the products and experiments I've shipped recently. Each project is structured so new features and motion can be layered in without rewriting the foundation.
        </p>
      </div>
      {status === "loading" && (
        <div className="flex min-h-[200px] items-center justify-center rounded-3xl border border-dashed border-muted/50 bg-muted/20">
          <p className="text-sm uppercase tracking-[0.3em] text-foreground/50">Loading projects…</p>
        </div>
      )}
      {status === "error" && (
        <div className="rounded-3xl border border-rose-400/50 bg-rose-400/10 p-6 text-center text-rose-200">
          <p className="font-semibold uppercase tracking-[0.3em]">Unable to reach the portfolio API</p>
          <p className="mt-2 text-sm">Try again in a moment.</p>
        </div>
      )}
      {status === "ready" && projects.length > 0 && <ProjectsCarousel projects={projects} />}
    </section>
  );
};

export default ProjectsPage;
