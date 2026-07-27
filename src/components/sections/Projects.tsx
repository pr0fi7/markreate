import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/site";

const Projects = () => (
  <section id="projects" className="scroll-mt-20 bg-ink text-paper">
    <div className="shell py-[88px]">
      <SectionHeading title="Selected projects" kicker="open source, on GitHub" inverted />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {projects.map((project) => (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="flex flex-col gap-3 rounded-[20px] border border-paper/[0.14] p-7 text-paper transition-[border-color,transform] [transition-duration:250ms] hover:-translate-y-1 hover:border-brand"
          >
            <span className="font-mono text-xs text-brand">{project.num}</span>
            <h3 className="font-display text-[21px] font-semibold tracking-[-0.01em]">
              {project.title}
            </h3>
            <p className="flex-1 text-[15px] leading-[1.55] text-paper/[0.66] [text-wrap:pretty]">
              {project.blurb}
            </p>
            <p className="font-mono text-xs text-paper/[0.45]">{project.stack}</p>
            <span className="text-[13.5px] font-semibold text-brand">View repository ↗</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
