import PageHeader from "@/components/legal/PageHeader";

export type LegalSection = {
  id: string;
  title: string;
  /** Background of the numbered square. */
  color: string;
  /** Dark card, used for "What we don’t do". */
  dark?: boolean;
  body: React.ReactNode;
};

type LegalLayoutProps = {
  title: [string, string];
  updated: string;
  intro: string;
  sections: LegalSection[];
};

/** Privacy and terms: header, a contents card, and one card per section. */
export default function LegalLayout({ title, updated, intro, sections }: LegalLayoutProps) {
  return (
    <>
      <PageHeader badge="Legal" title={title} updated={updated} intro={intro} />
      <div className="mx-auto grid max-w-[1440px] items-start gap-6 px-6 pt-12 pb-16 desk:px-24 desk:pt-[72px] desk:pb-24 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-x-16">
        <nav
          aria-label="On this page"
          className="flex flex-col gap-1 rounded-card border border-line bg-card px-6 py-7 max-lg:px-4 max-lg:py-5"
        >
          <span className="px-3 pb-2.5 text-sm font-semibold uppercase tracking-[0.04em] text-muted">On this page</span>
          {sections.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className="flex h-12 items-center gap-3.5 rounded-2xl px-3 text-[17px] font-medium">
              <span className="w-[22px] font-display text-base font-extrabold text-muted">{i + 1}</span>
              <span>{s.title}</span>
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-6">
          {sections.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className={`scroll-mt-6 rounded-card border p-6 desk:p-11 ${
                s.dark ? "border-ink bg-ink text-bg" : "border-line bg-card text-ink"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-[14px] font-display text-xl font-extrabold text-ink"
                  style={{ background: s.color }}
                >
                  {i + 1}
                </span>
                <h2 className="font-display text-[28px] font-extrabold leading-[1.05] tracking-[-0.03em] desk:text-[34px]">
                  {s.title}
                </h2>
              </div>
              <div className="mt-[22px]">{s.body}</div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

/** A plain paragraph inside a section card. */
export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[17px] leading-[1.65] text-body desk:text-lg">{children}</p>;
}

/** Square-bullet list. `dark` for the dark card. */
export function Bullets({ items, dark = false }: { items: React.ReactNode[]; dark?: boolean }) {
  return (
    <ul className="flex flex-col gap-3.5">
      {items.map((item, i) => (
        <li
          key={i}
          className={`flex items-start gap-3.5 text-[17px] leading-[1.65] desk:text-lg ${dark ? "text-faint" : "text-body"}`}
        >
          <span
            aria-hidden="true"
            className={`mt-2.5 block size-2.5 shrink-0 rounded-[3px] ${dark ? "bg-lime" : "bg-ink"}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Bold lead-in for a bullet, e.g. "Your email address." */
export function Lead({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}
