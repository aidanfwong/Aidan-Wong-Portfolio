import { useMemo } from "react";
import type { SkillCategoryScore } from "../types/portfolio";

type SkillGrowthRadarProps = {
  categories: SkillCategoryScore[];
};

const SIZE = 260;
const CENTER = SIZE / 2;
const RADIUS = SIZE / 2 - 20;

const SkillGrowthRadar = ({ categories }: SkillGrowthRadarProps) => {
  const polygonPoints = useMemo(() => {
    if (!categories.length) {
      return "";
    }

    return categories
      .map((category, index) => {
        const angle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;
        const scale = Math.min(category.level / 100, 1);
        const x = CENTER + RADIUS * scale * Math.cos(angle);
        const y = CENTER + RADIUS * scale * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");
  }, [categories]);

  return (
    <div className="relative flex flex-col items-center gap-4 rounded-3xl border border-muted/60 bg-card/80 p-6 shadow-lg">
      <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-accent">Skill Coverage</h3>
      <svg
        role="img"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-64 w-64"
        aria-labelledby="skill-growth-radar-title"
      >
        <title id="skill-growth-radar-title">Skill coverage radar chart</title>
        {[1, 0.75, 0.5, 0.25].map((fraction) => (
          <circle
            key={fraction}
            cx={CENTER}
            cy={CENTER}
            r={RADIUS * fraction}
            className="fill-none stroke-foreground/10"
          />
        ))}
        {categories.map((category, index) => {
          const angle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;
          const x = CENTER + (RADIUS + 12) * Math.cos(angle);
          const y = CENTER + (RADIUS + 12) * Math.sin(angle);
          return (
            <g key={category.category}>
              <line
                x1={CENTER}
                y1={CENTER}
                x2={CENTER + RADIUS * Math.cos(angle)}
                y2={CENTER + RADIUS * Math.sin(angle)}
                className="stroke-foreground/20"
              />
              <text
                x={x}
                y={y}
                textAnchor={x < CENTER ? "end" : "start"}
                alignmentBaseline="middle"
                className="fill-foreground text-xs font-medium"
              >
                {category.category}
              </text>
            </g>
          );
        })}
        <polygon points={polygonPoints} className="fill-accent/30 stroke-accent" strokeWidth={2} />
      </svg>
      <div className="grid w-full gap-2 text-sm text-foreground/70 sm:grid-cols-2">
        {categories.map((category) => (
          <div key={category.category} className="flex items-center justify-between rounded-xl bg-muted/60 px-3 py-2">
            <span>{category.category}</span>
            <span className="font-semibold text-foreground">{Math.round(category.level)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGrowthRadar;
