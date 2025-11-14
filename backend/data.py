"""Structured portfolio data reused by the API endpoints."""
from __future__ import annotations

from typing import List, Dict, Any

PROJECTS: List[Dict[str, Any]] = [
    {
        "title": "Lock In",
        "description": (
            "A dynamic web-based aim trainer with configurable scenarios and real-time "
            "performance metrics to sharpen hand-eye coordination."
        ),
        "href": "https://github.com/aidanfwong/Reflex-Trainer",
        "tech": ["TypeScript", "Vite", "Canvas"],
        "accentGradient": "linear-gradient(135deg, #f97316 0%, #db2777 100%)",
    },
    {
        "title": "Mr. B",
        "description": (
            "A Discord moderator bot for St. Michael's Choir School with automated safety "
            "workflows and playful community features."
        ),
        "href": "https://github.com/aidanfwong/Discord-Bot-20",
        "tech": ["Python", "Discord.py", "PostgreSQL"],
        "accentGradient": "linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)",
    },
    {
        "title": "Hourglass",
        "description": (
            "A Harry Potter themed points tracker built for staff to quickly award, remove, "
            "and monitor house performance."
        ),
        "href": "https://github.com/aidanfwong/House-Points-Recorder",
        "tech": ["React", "Firebase", "Tailwind"],
        "accentGradient": "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
    },
]

EXPERIENCE_TIMELINE: List[Dict[str, Any]] = [
    {
        "organisation": "International Financial Data Services",
        "title": "Software Developer",
        "year": "2024",
        "bullets": [
            "Developed an internal automation tool with Python and C# to replace a manual workflow, eliminating a recurring daily task.",
            "Orchestrated spreadsheet ingestion into company servers including file renaming, archiving, queue loading, and web data entry.",
            "Designed the job to run autonomously, boosting throughput and removing manual oversight.",
            "Increased process efficiency by 90%, shrinking a five-hour task to thirty minutes.",
        ],
    },
    {
        "organisation": "City of Toronto",
        "title": "Lifeguard and Swim Instructor",
        "year": "2023",
        "bullets": [
            "Maintained facility safety and provided proactive patron support across busy schedules.",
            "Ran diagnostic assessments, tailored swim programs, and adjusted sessions to individual needs.",
            "Earned positive feedback from families for clear communication and instruction.",
        ],
    },
    {
        "organisation": "Bell Media",
        "title": "Digital Marketing Analyst",
        "year": "2023",
        "bullets": [
            "Created graphics for The Shift's social channels to reinforce brand storytelling.",
            "Analyzed performance metrics and iterated on content strategies to improve engagement.",
            "Grew followers by 26% and interactions per post by 43%.",
        ],
    },
    {
        "organisation": "City of Toronto",
        "title": "Customer Service Representative",
        "year": "2022",
        "bullets": [
            "Streamlined operations with administrative software and data-driven client management.",
            "Maintained a secure, positive environment using digital communication touchpoints.",
            "Resolved client concerns using tracking systems and conflict resolution techniques.",
        ],
    },
    {
        "organisation": "Coding for Climate Change",
        "title": "Developer",
        "year": "2022",
        "bullets": [
            "Built Arduino and Python climate monitors in a collaborative project team.",
            "Integrated sensors to collect temperature, humidity, CO2, and albedo data.",
            "Shipped real-time visualizations to track environmental trends.",
        ],
    },
]

# The skills list is derived from the technologies highlighted across the projects and
# the collaboration-heavy experiences in the portfolio.
SKILLS: List[Dict[str, Any]] = [
    {"name": "Python", "category": "Languages", "level": 92, "experience_years": 4.5},
    {"name": "TypeScript", "category": "Languages", "level": 88, "experience_years": 3.0},
    {"name": "C#", "category": "Languages", "level": 74, "experience_years": 1.5},
    {"name": "React", "category": "Frameworks", "level": 86, "experience_years": 3.5},
    {"name": "Vite", "category": "Frameworks", "level": 78, "experience_years": 2.0},
    {"name": "Firebase", "category": "Cloud & Data", "level": 72, "experience_years": 2.0},
    {"name": "PostgreSQL", "category": "Cloud & Data", "level": 70, "experience_years": 2.5},
    {"name": "Discord.py", "category": "Frameworks", "level": 76, "experience_years": 2.5},
    {"name": "Tailwind CSS", "category": "Frameworks", "level": 82, "experience_years": 3.0},
    {"name": "Automation", "category": "Collaboration", "level": 84, "experience_years": 2.0},
    {"name": "Instruction", "category": "Collaboration", "level": 80, "experience_years": 3.0},
]
