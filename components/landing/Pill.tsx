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
      <PlusMark className="size-[22px] gap-0.5" squareClassName="rounded-[2px] bg-lime desk:rounded-[3px]" />
      Nonchalife Plus
    </span>
  );
}

/** Five squares in a plus shape, the Nonchalife Plus mark. Size and gap come from `className`. */
export function PlusMark({ className = "", squareClassName = "" }: { className?: string; squareClassName?: string }) {
  return (
    <span aria-hidden="true" className={`grid shrink-0 grid-cols-3 grid-rows-3 ${className}`}>
      {[false, true, false, true, true, true, false, true, false].map((on, i) => (
        <span key={i} className={on ? squareClassName : undefined} />
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
