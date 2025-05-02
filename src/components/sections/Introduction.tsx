
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Section from "@/components/ui/Section";

const Introduction = () => {
  return (
    <Section 
      id="intro" 
      title=""
      className="relative pt-24 bg-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 h-full">
        <div className="mb-8 md:mb-0 rounded-full overflow-hidden w-40 h-40 md:w-64 md:h-64 border-4 border-primary shadow-lg">
          <img 
            src="lovable-uploads/hero2.jpeg" 
            alt="Mark Shevchenko's profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="mb-4 text-muted-foreground">Hello, I'm</p>
          <h1 className="mb-6 animate-fade-in">Mark Shevchenko</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="mb-4 text-xl md:text-2xl max-w-2xl text-center md:text-left animate-fade-in">
            I'm <span className="font-bold uppercase underline">OPEN</span> for Projects – but don't wait too long! Let me show you how I can help:
          </p>
          <ul className="list-disc pl-6 mb-8 text-lg space-y-2 text-center md:text-left animate-fade-in">
            <li>Young, energetic, and passionate about innovation</li>
            <li>5 years of hands-on experience delivering results</li>
            <li>Expertise across diverse domains – from AI to web development</li>
            <li>Proven track record working in both dynamic startups and established companies</li>
          </ul>
          <p className="mb-8 text-lg font-medium text-center md:text-left animate-fade-in">
            Let's collaborate and turn your vision into reality!
          </p>
          <Button asChild className="animate-fade-in">
            <a href="#portfolio">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Introduction;
