import { Link } from "react-router-dom";
import { landingCopy } from "../data/profile";

const HeroSection = () => (
  <section className="flex flex-col items-center gap-16 pt-10 text-center lg:pt-16">
    <div className="flex flex-col items-center gap-6">
      <p className="text-sm uppercase tracking-[0.35em] text-accent">Welcome</p>
      <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {landingCopy.greeting}
      </h1>
      <p className="max-w-xl text-base text-foreground/80 sm:text-lg">
        {landingCopy.callToAction}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-surface transition hover:bg-accent-muted"
        >
          View Projects
        </Link>
        <Link
          to="/experience"
          className="rounded-full border border-foreground/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition hover:border-accent hover:text-accent"
        >
          Experience
        </Link>
      </div>
    </div>
    <div className="flex flex-col items-center gap-4">
      <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">Keep Scrolling</span>
      <div className="flex items-center justify-center rounded-full border border-foreground/30 p-3 text-accent">
        <svg className="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </section>
);

export default HeroSection;
