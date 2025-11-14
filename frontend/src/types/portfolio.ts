export type Project = {
  title: string;
  description: string;
  href: string;
  tech: string[];
  accentGradient: string;
};

export type Experience = {
  organisation: string;
  title: string;
  year: string;
  bullets: string[];
};

export type Skill = {
  name: string;
  category: string;
  level: number;
  experience_years: number;
};

export type SkillCategoryScore = {
  category: string;
  level: number;
  delta: number;
};

export type SkillGrowthSnapshot = {
  generated_at: string;
  growth_index: number;
  momentum: number;
  percentile: number;
  category_scores: SkillCategoryScore[];
  trend: { label: string; value: number }[];
  top_skills: string[];
};
