import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/site";

const Testimonials = () => (
  <section id="testimonials" className="scroll-mt-20 border-t border-line">
    <div className="shell py-[88px]">
      <SectionHeading title="Testimonials" kicker="people I've worked with" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            data-reveal
            className="flex flex-col gap-[18px] rounded-[20px] border border-line bg-white p-[30px]"
          >
            <span
              aria-hidden="true"
              className="font-display text-[42px] leading-[0.5] text-brand"
            >
              &ldquo;
            </span>
            <blockquote className="flex-1 text-[16.5px] leading-[1.6] text-ink-soft [text-wrap:pretty]">
              {testimonial.quote}
            </blockquote>
            <figcaption className="flex flex-col gap-0.5">
              <span className="text-[15px] font-semibold">{testimonial.author}</span>
              <span className="text-[13.5px] text-subtle">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
