import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/site";

const Skills = () => (
  <section id="skills" className="scroll-mt-20">
    <div className="shell py-[88px]">
      <SectionHeading title="Skills" kicker="the toolbox" />

      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {skillGroups.map((group) => (
          <div
            key={group.name}
            data-reveal
            className="rounded-[20px] border border-line bg-white p-6"
          >
            <h3 className="mb-3.5 flex items-center gap-2 font-display text-base font-semibold">
              <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-brand" />
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-[7px]">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-line bg-paper px-[11px] py-[5px] text-[13.5px] text-ink-soft"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
