import { useEffect, useMemo, useState } from "react";
import type { Skill, SkillGrowthSnapshot } from "../types/portfolio";
import SkillGrowthRadar from "./SkillGrowthRadar";

type SkillInsightsDashboardProps = {
  skills: Skill[];
  insights: SkillGrowthSnapshot;
};

const formatNumber = (value: number) => new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(value);

const SkillInsightsDashboard = ({ skills, insights }: SkillInsightsDashboardProps) => {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    setHighlight(true);
    const timeout = window.setTimeout(() => setHighlight(false), 1200);
    return () => window.clearTimeout(timeout);
  }, [insights.generated_at]);

  const categoryAverages = useMemo(() => {
    if (!skills.length) {
      return [];
    }

    const groups = skills.reduce<Record<string, { level: number; delta: number; count: number }>>((acc, skill) => {
      const current = acc[skill.category] ?? { level: 0, delta: 0, count: 0 };
      current.level += skill.level;
      current.delta += skill.experience_years;
      current.count += 1;
      acc[skill.category] = current;
      return acc;
    }, {});

    return Object.entries(groups)
      .map(([category, { level, delta, count }]) => ({
        category,
        level: level / count,
        delta: delta / count,
      }))
      .sort((a, b) => b.level - a.level);
  }, [skills]);

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Live Insights</p>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Skill Growth Dashboard</h2>
        <p className="mx-auto max-w-2xl text-base text-foreground/70">
          Data from the API is recalculated every refresh to reflect how recent roles and projects accelerate the portfolio&apos;s
          capabilities. Watch the numbers pulse as new snapshots stream in.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div
          className={`flex flex-col gap-6 rounded-3xl border border-muted/60 bg-card/80 p-6 shadow-lg transition duration-500 ${
            highlight ? "ring-4 ring-accent/50" : ""
          }`}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-muted/60 p-4 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Growth Index</p>
              <p className="mt-2 text-3xl font-semibold text-foreground">{formatNumber(insights.growth_index)}</p>
            </div>
            <div className="rounded-2xl bg-muted/60 p-4 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Momentum</p>
              <p className={`mt-2 text-3xl font-semibold ${insights.momentum >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                {formatNumber(insights.momentum)}
              </p>
            </div>
            <div className="rounded-2xl bg-muted/60 p-4 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Percentile</p>
              <p className="mt-2 text-3xl font-semibold text-foreground">{formatNumber(insights.percentile)}</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Trajectory</p>
            <svg viewBox="0 0 300 120" className="mt-3 h-32 w-full" role="img" aria-label="Skill momentum sparkline">
              <polyline
                fill="none"
                stroke="currentColor"
                className="stroke-accent"
                strokeWidth={3}
                points={insights.trend
                  .map((point, index) => {
                    const x = (index / Math.max(insights.trend.length - 1, 1)) * 300;
                    const y = 120 - (point.value / 110) * 110;
                    return `${x},${y}`;
                  })
                  .join(" ")}
              />
              {insights.trend.map((point, index) => {
                const x = (index / Math.max(insights.trend.length - 1, 1)) * 300;
                const y = 120 - (point.value / 110) * 110;
                return (
                  <g key={point.label}>
                    <circle cx={x} cy={y} r={4} className="fill-surface stroke-accent" strokeWidth={2} />
                    <text x={x} y={116} textAnchor="middle" className="fill-foreground/70 text-xs">
                      {point.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Top strengths</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-sm text-foreground">
              {insights.top_skills.map((skill) => (
                <span key={skill} className="rounded-full bg-accent/10 px-4 py-1 font-medium text-accent">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-foreground/50">
            Last refreshed: {new Date(insights.generated_at).toLocaleTimeString()}
          </p>
        </div>
        <SkillGrowthRadar categories={insights.category_scores.length ? insights.category_scores : categoryAverages} />
      </div>
      <div className="grid gap-4 text-sm text-foreground/70 sm:grid-cols-2 lg:grid-cols-4">
        {categoryAverages.map((category) => (
          <div key={category.category} className="rounded-2xl border border-muted/50 bg-muted/30 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">{category.category}</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">{formatNumber(category.level)}</p>
            <p className="text-xs text-foreground/60">Avg. experience years: {formatNumber(category.delta)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillInsightsDashboard;
