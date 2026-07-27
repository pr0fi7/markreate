import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  kicker: string;
  /** Set on the dark Projects section so the kicker stays legible. */
  inverted?: boolean;
  className?: string;
}

const SectionHeading = ({ title, kicker, inverted, className }: SectionHeadingProps) => (
  <div
    data-reveal
    className={cn("mb-11 flex flex-wrap items-baseline gap-4", className)}
  >
    <h2 className="font-display text-[38px] font-bold tracking-[-0.02em]">{title}</h2>
    <span
      className={cn(
        "font-mono text-[12.5px] uppercase tracking-[0.12em]",
        inverted ? "text-paper/50" : "text-subtle"
      )}
    >
      {kicker}
    </span>
  </div>
);

export default SectionHeading;
