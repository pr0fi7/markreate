import { Fragment, type ReactNode } from "react";

/**
 * Renders the `**bold**` spans used in the copy in src/data/site.ts.
 * Deliberately tiny — this is the only markup the content needs.
 */
export function withBold(text: string): ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
