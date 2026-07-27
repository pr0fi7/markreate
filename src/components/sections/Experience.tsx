import SectionHeading from "@/components/SectionHeading";
import { earlierRoles, experience } from "@/data/site";

const Experience = () => (
  <section id="experience" className="scroll-mt-20 border-t border-line">
    <div className="shell py-[88px]">
      <SectionHeading title="Experience" kicker="where I've shipped" className="mb-12" />

      <div className="flex flex-col">
        {experience.map((job) => (
          <div
            key={`${job.company}-${job.period}`}
            data-reveal
            className="grid grid-cols-1 gap-3 border-t border-line py-9 md:grid-cols-[200px_1fr] md:gap-8"
          >
            <div>
              <p className="mb-1.5 font-mono text-[13px] text-subtle">{job.period}</p>
              <p className="text-sm text-subtle">{job.meta}</p>
            </div>

            <div>
              <h3 className="mb-1 font-display text-2xl font-semibold tracking-[-0.01em]">
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline gap-[7px] transition-colors hover:text-brand"
                >
                  {job.company}
                  <span aria-hidden="true" className="text-[13px] text-subtle">
                    ↗
                  </span>
                </a>
              </h3>

              <p className="mb-3.5 text-[15px] font-semibold text-brand">{job.role}</p>

              <ul className="mb-4 flex max-w-[660px] flex-col gap-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2.5 text-[15.5px] leading-[1.55] text-ink-soft [text-wrap:pretty]"
                  >
                    <span aria-hidden="true" className="font-bold text-brand">
                      ·
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-white px-[11px] py-[5px] font-mono text-xs text-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <p data-reveal className="border-t border-line pt-[26px] text-[14.5px] text-subtle">
          {earlierRoles}
        </p>
      </div>
    </div>
  </section>
);

export default Experience;
