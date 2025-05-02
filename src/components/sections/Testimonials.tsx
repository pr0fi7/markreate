
import Section from "@/components/ui/Section";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    quote: "John created an outstanding website for our business that perfectly captured our brand essence. His attention to detail is unmatched.",
    author: "Sarah Johnson",
    role: "CEO, Design Studio",
  },
  {
    quote: "Working with John was a pleasure. He listened to our needs and delivered a product that exceeded our expectations.",
    author: "Michael Chen",
    role: "Marketing Director",
  },
  {
    quote: "The website John built for us has significantly increased our conversion rate. His technical skills and eye for design are exceptional.",
    author: "Emily Rodriguez",
    role: "Founder, Tech Startup",
  },
];

const Testimonials = () => {
  return (
    <Section id="testimonials" title="Testimonials" className="bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
