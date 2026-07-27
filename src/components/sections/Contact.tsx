import { asset, contactLinks, CV_FILENAME } from "@/data/site";
import { cn } from "@/lib/utils";

const Contact = () => (
  <section id="contact" className="scroll-mt-20 border-t border-line">
    <div className="shell pb-[110px] pt-[100px] text-center">
      <h2
        data-reveal
        className="mb-4 font-display text-[clamp(34px,4.5vw,52px)] font-bold tracking-[-0.02em]"
      >
        Let's build something
      </h2>

      <p
        data-reveal
        className="mx-auto mb-9 max-w-[440px] text-[16.5px] leading-[1.6] text-subtle [text-wrap:pretty]"
      >
        Whether you have a role in mind, a question, or just want to talk AI systems — my
        inbox is always open.
      </p>

      <div data-reveal className="flex flex-wrap justify-center gap-3">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.download ? asset(link.href) : link.href}
            download={link.download ? CV_FILENAME : undefined}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className={cn(
              "rounded-full px-[26px] py-[13px] text-[15px] font-semibold transition-colors",
              link.primary
                ? "bg-ink text-paper hover:bg-brand hover:text-white"
                : "border border-line bg-white hover:border-brand hover:text-brand"
            )}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
