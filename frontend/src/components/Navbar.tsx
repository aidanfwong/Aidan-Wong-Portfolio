import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { landingCopy } from "../data/profile";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-muted/40 bg-surface/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight">
          aidanfwong
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-muted/60 p-2 text-sm text-foreground hover:bg-muted/60 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-accent ${isActive ? "text-accent" : "text-foreground/80"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {landingCopy.resumeHref ? (
            <a
              href={landingCopy.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-surface transition hover:bg-accent-muted"
            >
              {landingCopy.resumeLabel}
            </a>
          ) : null}
        </div>
      </nav>
      {open ? (
        <div className="border-t border-muted/40 bg-surface/95 px-4 py-4 sm:px-6 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition hover:bg-muted/60 ${
                    isActive ? "text-accent" : "text-foreground/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {landingCopy.resumeHref ? (
              <a
                href={landingCopy.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-accent px-3 py-2 text-center text-sm font-semibold text-accent transition hover:bg-accent hover:text-surface"
              >
                {landingCopy.resumeLabel}
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
