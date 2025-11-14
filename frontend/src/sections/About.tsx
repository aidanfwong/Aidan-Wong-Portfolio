import { aboutCopy } from "../data/profile";

const About = () => (
  <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
    <div className="order-2 flex flex-col gap-6 text-left lg:order-1">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-accent">About</p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{aboutCopy.title}</h2>
      </div>
      <div className="flex flex-col gap-4 text-base leading-relaxed text-foreground/80">
        {aboutCopy.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {aboutCopy.highlights.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-accent px-5 py-2 text-sm font-semibold uppercase tracking-wide text-accent transition hover:bg-accent hover:text-surface"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
    <div className="order-1 flex justify-center lg:order-2">
      <div
        className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-3xl border border-muted/60 shadow-2xl shadow-accent/10 sm:h-80 sm:w-80"
        style={{ backgroundImage: aboutCopy.portrait.gradient, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      >
        <span className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          {aboutCopy.portrait.initials}
        </span>
      </div>
      <span className="sr-only">Illustration representing Aidan Wong</span>
    </div>
  </section>
);

export default About;
