import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1440px] shrink-0 flex-col items-start gap-3 px-6 pt-10 pb-6 text-[15px] font-medium text-muted desk:h-[120px] desk:flex-row desk:items-center desk:justify-between desk:px-24 desk:py-0">
      <div className="flex flex-col items-start gap-3 desk:flex-row desk:items-center desk:gap-4">
        <span aria-label="Nonchalife" role="img">
          <Logo className="gap-0.5 text-2xl text-ink" squareClassName="size-2 rounded-[2px]" />
        </span>
        <span>© 2026 Nonchalife. Made for the small stuff.</span>
      </div>
      <div className="flex items-center gap-7">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="flex h-11 items-center transition-colors hover:text-ink desk:h-auto">
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
