import socials from "../data/socials";

const Footer = () => (
  <footer className="border-t border-muted/40 bg-surface/80">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-foreground/80 sm:flex-row sm:px-6 lg:px-8">
      <div className="font-display text-lg font-semibold text-foreground">aidanfwong</div>
      <div className="flex items-center gap-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-accent"
          >
            <span className="sr-only">{social.label}</span>
            <img src={social.icon} alt={social.label} className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
