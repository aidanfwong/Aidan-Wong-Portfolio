export type Experience = {
  organisation: string;
  title: string;
  year: string;
  bullets: string[];
};

export const experienceTimeline: Experience[] = [
  {
    organisation: "International Financial Data Services",
    title: "Software Developer",
    year: "2024",
    bullets: [
      "Developed an internal automation tool with Python and C# to replace a manual workflow, eliminating a recurring daily task.",
      "Orchestrated spreadsheet ingestion into company servers including file renaming, archiving, queue loading, and web data entry.",
      "Designed the job to run autonomously, boosting throughput and removing manual oversight.",
      "Increased process efficiency by 90%, shrinking a five-hour task to thirty minutes."
    ]
  },
  {
    organisation: "City of Toronto",
    title: "Lifeguard and Swim Instructor",
    year: "2023",
    bullets: [
      "Maintained facility safety and provided proactive patron support across busy schedules.",
      "Ran diagnostic assessments, tailored swim programs, and adjusted sessions to individual needs.",
      "Earned positive feedback from families for clear communication and instruction."
    ]
  },
  {
    organisation: "Bell Media",
    title: "Digital Marketing Analyst",
    year: "2023",
    bullets: [
      "Created graphics for The Shift's social channels to reinforce brand storytelling.",
      "Analyzed performance metrics and iterated on content strategies to improve engagement.",
      "Grew followers by 26% and interactions per post by 43%."
    ]
  },
  {
    organisation: "City of Toronto",
    title: "Customer Service Representative",
    year: "2022",
    bullets: [
      "Streamlined operations with administrative software and data-driven client management.",
      "Maintained a secure, positive environment using digital communication touchpoints.",
      "Resolved client concerns using tracking systems and conflict resolution techniques."
    ]
  },
  {
    organisation: "Coding for Climate Change",
    title: "Developer",
    year: "2022",
    bullets: [
      "Built Arduino and Python climate monitors in a collaborative project team.",
      "Integrated sensors to collect temperature, humidity, CO2, and albedo data.",
      "Shipped real-time visualizations to track environmental trends."
    ]
  }
];
