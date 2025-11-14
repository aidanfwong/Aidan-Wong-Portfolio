"""Utilities to calculate dynamic portfolio insights."""
from __future__ import annotations

from collections import defaultdict
from datetime import datetime
from statistics import mean
from typing import Any, Dict, Iterable, List

Skill = Dict[str, Any]
Experience = Dict[str, Any]


class SkillGrowthService:
    """Derives live-feeling metrics from portfolio data."""

    def __init__(self, experience: Iterable[Experience], skills: Iterable[Skill]) -> None:
        self._experience = list(experience)
        self._skills = list(skills)

    def generate_growth_snapshot(self) -> Dict[str, Any]:
        timestamp = datetime.utcnow()
        pulse = (timestamp.second % 30) / 30
        category_scores = self._category_scores(pulse)
        trend = self._experience_trend()
        base_index = trend[-1]["value"] if trend else 0
        growth_index = round(min(100.0, base_index + pulse * 2.5), 1)
        previous_value = trend[-2]["value"] if len(trend) > 1 else trend[-1]["value"] if trend else 0
        momentum = round(growth_index - previous_value + (pulse - 0.5) * 1.6, 1)
        percentile = min(99.0, round(60 + len(self._skills) * 1.8 + len(self._experience) * 2.5, 1))

        return {
            "generated_at": timestamp.isoformat(timespec="seconds") + "Z",
            "growth_index": growth_index,
            "momentum": momentum,
            "percentile": percentile,
            "category_scores": [
                {
                    "category": category,
                    "level": round(scores["level"], 1),
                    "delta": round(scores["delta"], 1),
                }
                for category, scores in category_scores
            ],
            "trend": [
                {
                    "label": point["label"],
                    "value": round(min(100.0, point["value"] + pulse * 3), 1),
                }
                for point in trend
            ],
            "top_skills": self._top_skills(3),
        }

    def _category_scores(self, pulse: float) -> List[Any]:
        grouped: Dict[str, List[Skill]] = defaultdict(list)
        for skill in self._skills:
            grouped[skill["category"]].append(skill)

        trend = self._experience_trend()
        recent_delta = (trend[-1]["value"] - trend[-2]["value"]) if len(trend) > 1 else 0

        category_scores = []
        for category, items in grouped.items():
            avg_level = mean(skill["level"] for skill in items)
            recency_boost = mean(skill.get("experience_years", 1) for skill in items) * 0.6
            delta = recent_delta * (avg_level / 100) * 0.3 + recency_boost + pulse
            level_with_pulse = min(100.0, avg_level + recency_boost + pulse * 4)
            category_scores.append((category, {"level": level_with_pulse, "delta": delta}))

        category_scores.sort(key=lambda entry: entry[1]["level"], reverse=True)
        return category_scores

    def _experience_trend(self) -> List[Dict[str, Any]]:
        if not self._experience:
            return []

        scores: Dict[int, float] = defaultdict(float)
        counts: Dict[int, int] = defaultdict(int)
        for role in self._experience:
            try:
                year = int(role["year"])
            except (TypeError, ValueError):
                continue
            impact = 50 + len(role.get("bullets", [])) * 2.5
            if "Software" in role.get("title", ""):
                impact += 10
            if "Developer" in role.get("title", ""):
                impact += 6
            if "City" in role.get("organisation", ""):
                impact += 3
            scores[year] += impact
            counts[year] += 1

        trend: List[Dict[str, Any]] = []
        cumulative = 45.0
        for year in sorted(scores):
            yearly_score = scores[year] / max(counts[year], 1)
            cumulative = min(100.0, cumulative * 0.92 + yearly_score * 0.18)
            trend.append({"label": str(year), "value": round(cumulative, 1)})
        return trend

    def _top_skills(self, limit: int) -> List[str]:
        sorted_skills = sorted(self._skills, key=lambda skill: skill["level"], reverse=True)
        return [skill["name"] for skill in sorted_skills[:limit]]
