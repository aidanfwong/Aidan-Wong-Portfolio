from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .data import EXPERIENCE_TIMELINE, PROJECTS, SKILLS
from .services.skill_growth import SkillGrowthService

app = FastAPI(
    title="Portfolio API",
    version="1.0.0",
    description="API powering the portfolio frontend with live insights",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

_growth_service = SkillGrowthService(EXPERIENCE_TIMELINE, SKILLS)


@app.get("/projects")
def get_projects() -> dict[str, object]:
    """Return project data used in the projects carousel."""
    return {"projects": PROJECTS}


@app.get("/experience")
def get_experience() -> dict[str, object]:
    """Return the experience timeline for the resume section."""
    return {"experience": EXPERIENCE_TIMELINE}


@app.get("/skills")
def get_skills() -> dict[str, object]:
    """Return skills with proficiency metadata."""
    return {"skills": SKILLS}


@app.get("/insights")
def get_insights() -> dict[str, object]:
    """Return derived analytics to power the realtime dashboard."""
    return {"insights": _growth_service.generate_growth_snapshot()}
