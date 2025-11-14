export type Project = {
  title: string;
  description: string;
  href: string;
  tech: string[];
  accentGradient: string;
};

export const projects: Project[] = [
  {
    title: "Lock In",
    description:
      "A dynamic web-based aim trainer with configurable scenarios and real-time performance metrics to sharpen hand-eye coordination.",
    href: "https://github.com/aidanfwong/Reflex-Trainer",
    tech: ["TypeScript", "Vite", "Canvas"],
    accentGradient: "linear-gradient(135deg, #f97316 0%, #db2777 100%)"
  },
  {
    title: "Mr. B",
    description:
      "A Discord moderator bot for St. Michael's Choir School with automated safety workflows and playful community features.",
    href: "https://github.com/aidanfwong/Discord-Bot-20",
    tech: ["Python", "Discord.py", "PostgreSQL"],
    accentGradient: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)"
  },
  {
    title: "Hourglass",
    description:
      "A Harry Potter themed points tracker built for staff to quickly award, remove, and monitor house performance.",
    href: "https://github.com/aidanfwong/House-Points-Recorder",
    tech: ["React", "Firebase", "Tailwind"],
    accentGradient: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)"
  }
];
