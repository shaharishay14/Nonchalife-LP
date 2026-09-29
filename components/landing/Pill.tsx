/** The small white label with a lime square, e.g. "A habit tracker for iPhone". */
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2.5 rounded-[20px] border border-line bg-card px-4 py-2 text-[15px] font-medium text-body">
      <span aria-hidden="true" className="block size-2.5 rounded-[3px] bg-lime" />
      {children}
    </span>
  );
}

/** A feature tag chip, e.g. "Play and pause". */
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-10 items-center rounded-[20px] border border-line bg-card px-[18px] text-[15px] font-medium text-body">
      {children}
    </span>
  );
}
