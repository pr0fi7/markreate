
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section = ({ id, title, children, className, titleClassName }: SectionProps) => {
  return (
    <section id={id} className={cn("min-h-screen flex flex-col justify-center", className)}>
      <div className="section-container">
        <h2 className={cn("mb-12 text-center animate-fade-in", titleClassName)}>
          {title}
        </h2>
        <div className="animate-fade-in">{children}</div>
      </div>
    </section>
  );
};

export default Section;
