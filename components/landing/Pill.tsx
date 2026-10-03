/** The small white label with a lime square, e.g. "A habit tracker for iPhone". */
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2.5 rounded-[20px] border border-line bg-card px-4 py-2 text-[15px] font-medium text-body">
      <span aria-hidden="true" className="block size-2.5 rounded-[3px] bg-lime" />
      {children}
    </span>
  );
}

/** The dark "Nonchalife Plus" label at the top of the Plus section. */
export function PlusBadge() {
  return (
    <span className="flex h-10 items-center gap-2.5 rounded-[20px] border border-night2 bg-[#1F1F1D] pr-4 pl-3.5 text-[15px] font-medium text-[#CFCAC0] desk:pr-[18px]">
      <PlusMark
        className="grid-cols-[repeat(3,7px)] grid-rows-[repeat(3,7px)] gap-px"
        armClassName="rounded-[2px] bg-lime"
        centerClassName="rounded-[2px] bg-limeDeep"
      />
      Nonchalife Plus
    </span>
  );
}

/**
 * The Nonchalife Plus mark: five rounded squares in a plus, the center one a shade darker.
 * Square size and gap come from `className`, colors from `armClassName` and `centerClassName`.
 */
export function PlusMark({
  className = "",
  armClassName = "",
  centerClassName = "",
}: {
  className?: string;
  armClassName?: string;
  centerClassName?: string;
}) {
  return (
    <span aria-hidden="true" className={`grid shrink-0 ${className}`}>
      {[null, "arm", null, "arm", "center", "arm", null, "arm", null].map((cell, i) => (
        <span key={i} className={cell === "arm" ? armClassName : cell === "center" ? centerClassName : undefined} />
      ))}
    </span>
  );
}

/** A feature tag chip, e.g. "Play and pause". `dark` for the Plus section. */
export function Tag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`flex h-10 items-center rounded-[20px] border px-[18px] text-[15px] font-medium ${
        dark ? "border-night2 bg-[#1F1F1D] text-[#CFCAC0]" : "border-line bg-card text-body"
      }`}
    >
      {children}
    </span>
  );
}
