import { asset, availabilityHeadline, CV_FILENAME, highlights, profile } from "@/data/site";
import { withBold } from "@/lib/rich-text";

const Hero = () => (
  <section id="intro" className="shell pb-24 pt-[118px] md:pt-[150px]">
    <div className="flex flex-col items-start gap-[34px] md:flex-row md:items-center md:gap-16">
      <img
        src={asset(profile.photo)}
        alt={profile.name}
        width={280}
        height={280}
        className="block h-44 w-44 shrink-0 animate-fade-up rounded-[32px] object-cover shadow-[0_24px_60px_-24px_rgba(26,24,21,0.35)] md:h-[280px] md:w-[280px]"
      />

      <div className="min-w-0 flex-1">
        <p className="mb-3.5 animate-fade-up font-mono text-[12.5px] uppercase tracking-[0.14em] text-subtle [animation-delay:80ms]">
          {profile.kicker}
        </p>

        <h1 className="mb-5 animate-fade-up font-display text-[clamp(40px,6vw,68px)] font-bold leading-[1.02] tracking-[-0.03em] [animation-delay:160ms]">
          {profile.name}
        </h1>

        <p className="mb-3.5 max-w-[560px] animate-fade-up text-[18px] leading-[1.55] text-ink-soft [text-wrap:pretty] [animation-delay:220ms]">
          {profile.tagline}
        </p>

        <p className="mb-[22px] flex max-w-[560px] animate-fade-up items-baseline gap-2.5 text-base font-semibold [animation-delay:260ms]">
          <span
            aria-hidden="true"
            className="relative -top-px h-[9px] w-[9px] shrink-0 rounded-full bg-brand"
          />
          <span>{availabilityHeadline}</span>
        </p>

        <ul className="mb-[30px] flex animate-fade-up flex-col gap-2.5 text-base leading-normal text-ink-soft [animation-delay:320ms]">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span aria-hidden="true" className="font-bold text-brand">
                —
              </span>
              <span>{withBold(item)}</span>
            </li>
          ))}
        </ul>

        <div className="flex animate-fade-up flex-wrap items-center gap-5 [animation-delay:400ms]">
          <div className="flex flex-wrap gap-2.5">
            <a
              href="#experience"
              className="rounded-full bg-brand px-6 py-[13px] text-[15px] font-semibold text-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-10px_rgb(var(--brand))]"
            >
              View my work
            </a>
            <a
              href={asset(profile.cv)}
              download={CV_FILENAME}
              className="rounded-full border-[1.5px] border-ink px-6 py-[13px] text-[15px] font-semibold transition-colors hover:border-brand hover:text-brand"
            >
              Download CV
            </a>
          </div>

          <div className="flex gap-[18px] text-[14.5px] font-medium">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-line text-subtle transition-colors hover:text-brand"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-line text-subtle transition-colors hover:text-brand"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="border-b border-line text-subtle transition-colors hover:text-brand"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
