import Link from "next/link";
import Logo from "@/components/Logo";
import StickyHeader from "@/components/StickyHeader";
import { APP_STORE_URL } from "@/lib/config";

export default function Nav() {
  return (
    <StickyHeader>
      <nav
      aria-label="Main"
      className="mx-auto flex h-[72px] w-full max-w-[1440px] shrink-0 items-center justify-between px-6 desk:h-24 desk:px-24"
    >
      <Link href="/" aria-label="Nonchalife home" className="flex items-center gap-2.5 desk:gap-3">
        <Logo
          className="gap-[3px] text-[28px] desk:text-[34px]"
          squareClassName="size-[9px] rounded-[3px] desk:size-[11px]"
        />
        <span className="text-[17px] font-semibold tracking-[-0.01em] desk:text-[19px]">Nonchalife</span>
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/#features" className="hidden text-base font-medium transition-colors hover:text-body desk:block">
          How it works
        </Link>
        <Link href="/#pricing" className="hidden text-base font-medium transition-colors hover:text-body desk:block">
          Plus and pricing
        </Link>
        <a
          href={APP_STORE_URL}
          className="flex h-11 items-center rounded-full bg-ink px-[18px] text-[15px] font-semibold text-bg transition hover:bg-night2 active:scale-[0.97] desk:h-12 desk:px-6 desk:text-base"
        >
          Get the app
        </a>
      </div>
      </nav>
    </StickyHeader>
  );
}
