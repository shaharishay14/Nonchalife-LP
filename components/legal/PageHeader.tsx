import { Badge } from "@/components/landing/Pill";

type PageHeaderProps = {
  badge: string;
  /** The highlighted first part of the title, then the rest. */
  title: [string, string?];
  updated?: string;
  intro: string;
};

export default function PageHeader({ badge, title, updated, intro }: PageHeaderProps) {
  return (
    <header className="mx-auto flex max-w-[1440px] flex-col items-start px-6 pt-10 desk:px-24 desk:pt-20">
      <Badge>{badge}</Badge>
      <h1 className="mt-6 font-display text-[clamp(46px,7.22vw,104px)] font-extrabold leading-none tracking-[-0.045em] desk:mt-7">
        <span className="-ml-[0.077em] rounded-[0.23em] bg-lime px-[0.154em] [box-decoration-break:clone]">{title[0]}</span>
        {title[1] && ` ${title[1]}`}
      </h1>
      {updated && <p className="mt-[22px] text-base font-medium text-muted">{updated}</p>}
      <p className="mt-6 max-w-[760px] text-lg font-medium leading-[1.4] text-body desk:text-[22px]">{intro}</p>
    </header>
  );
}
