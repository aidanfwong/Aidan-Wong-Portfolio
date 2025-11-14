import { useCallback, useEffect, useMemo, useState } from "react";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SkillInsightsDashboard from "../components/SkillInsightsDashboard";
import { API_BASE_URL } from "../config";
import type { Experience, Skill, SkillGrowthSnapshot } from "../types/portfolio";

type LoadState = "idle" | "loading" | "error" | "ready";

const ExperiencePage = () => {
  const [experience, setExperience] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [insights, setInsights] = useState<SkillGrowthSnapshot | null>(null);
  const [state, setState] = useState<LoadState>("idle");
  const [error, setError] = useState<string | null>(null);

  const fetchExperience = useCallback(async () => {
    setState("loading");
    setError(null);
    try {
      const [experienceResponse, skillsResponse, insightsResponse] = await Promise.all([
        fetch(`${API_BASE_URL}/experience`),
        fetch(`${API_BASE_URL}/skills`),
        fetch(`${API_BASE_URL}/insights`),
      ]);

      if (!experienceResponse.ok || !skillsResponse.ok || !insightsResponse.ok) {
        throw new Error("Unable to reach portfolio service");
      }

      const experienceData = await experienceResponse.json();
      const skillsData = await skillsResponse.json();
      const insightsData = await insightsResponse.json();

      setExperience(experienceData.experience ?? []);
      setSkills(skillsData.skills ?? []);
      setInsights(insightsData.insights ?? null);
      setState("ready");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setState("error");
    }
  }, []);

  const refreshInsights = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/insights`);
      if (!response.ok) {
        throw new Error("Unable to refresh insights");
      }
      const data = await response.json();
      setInsights(data.insights ?? null);
    } catch (err) {
      // keep existing insight snapshot if refresh fails
      console.warn(err);
    }
  }, []);

  useEffect(() => {
    fetchExperience();
  }, [fetchExperience]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      refreshInsights();
    }, 15000);
    return () => window.clearInterval(interval);
  }, [refreshInsights]);

  const hasData = useMemo(() => experience.length > 0, [experience]);

  return (
    <section className="flex flex-col gap-12">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Experience</p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Roles that Shaped My Practice</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-foreground/70">
          From automation to community engagement, these milestones highlight how I collaborate with teams and build reliable experiences.
        </p>
      </div>
      {state === "loading" && (
        <div className="flex min-h-[200px] items-center justify-center rounded-3xl border border-dashed border-muted/50 bg-muted/20">
          <p className="text-sm uppercase tracking-[0.3em] text-foreground/50">Loading experience timeline…</p>
        </div>
      )}
      {state === "error" && (
        <div className="rounded-3xl border border-rose-400/50 bg-rose-400/10 p-6 text-center text-rose-200">
          <p className="font-semibold uppercase tracking-[0.3em]">Unable to reach the portfolio API</p>
          <p className="mt-2 text-sm">{error}</p>
        </div>
      )}
      {state === "ready" && hasData && <ExperienceTimeline timeline={experience} />}
      {state === "ready" && insights && (
        <SkillInsightsDashboard skills={skills} insights={insights} />
      )}
    </section>
  );
};

export default ExperiencePage;
