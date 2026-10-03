import Link from "next/link";
import type { CSSProperties } from "react";
import { MobilePanel } from "@/components/landing/Features";
import Phone from "@/components/landing/Phone";
import PhonePair from "@/components/landing/PhonePair";
import { PlusMark } from "@/components/landing/Pill";
import { u } from "@/lib/units";

const plans = [
  { name: "Yearly", tag: "Best value", note: "$1.25 a month", price: "$14.99", per: "per year" },
  { name: "Monthly", note: "Cancel anytime", price: "$2.99", per: "per month" },
  { name: "Lifetime", note: "One payment. No renewals.", price: "$29.99", per: "one time" },
];

const cardTitle = "font-display text-[30px] font-extrabold tracking-[-0.04em] desk:text-[34px]";
const cardText = "text-[17px] leading-normal desk:text-lg";
const fineLink = "font-semibold text-ink transition-colors hover:text-body";

/** Free vs Plus, the three Plus plans, and the Plus screen. */
export default function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto flex max-w-[1440px] flex-col px-6 pt-[88px] pb-24 desk:gap-(--gap) desk:px-(--px) desk:py-(--py)"
      style={{ "--gap": u(100), "--px": u(96), "--py": u(140) } as CSSProperties}
    >
      <h2 className="font-display text-[46px] font-extrabold leading-[1.02] tracking-[-0.05em] desk:text-center desk:text-[clamp(46px,6.11vw,88px)] desk:leading-none">
        Free to start.
        <br />
        Plus when you
        <br />
        want more.
      </h2>
      <div
        className="mt-10 desk:mt-0 desk:grid desk:grid-cols-2 desk:items-center desk:gap-(--g)"
        style={{ "--g": u(64) } as CSSProperties}
      >
        <div className="flex flex-col gap-4 desk:gap-5">
          <div className="flex flex-col gap-2.5 rounded-[28px] border border-line bg-card p-6 desk:rounded-card desk:p-8">
            <h3 className={cardTitle}>Free</h3>
            <p className={`${cardText} text-body`}>
              Up to 3 active habits, with the timer, the year grid, reminders and streaks. Already have more than 3? You
              keep every one.
            </p>
          </div>
          <div className="flex flex-col gap-3.5 rounded-[28px] bg-lime p-6 text-ink desk:gap-4 desk:rounded-card desk:p-8">
            <div className="flex items-center gap-3 desk:gap-3.5">
              <h3 className={cardTitle}>Nonchalife Plus</h3>
              {/* On the lime card the mark goes dark, keeping the darker center. */}
              <PlusMark
                className="grid-cols-[repeat(3,8px)] grid-rows-[repeat(3,8px)] gap-0.5 desk:grid-cols-[repeat(3,9px)] desk:grid-rows-[repeat(3,9px)]"
                armClassName="rounded-[2.5px] bg-night2"
                centerClassName="rounded-[2.5px] bg-ink"
              />
            </div>
            <p className={cardText}>Unlimited habits, the Pomodoro timer and Trophies.</p>
            <ul className="flex flex-col gap-3.5 desk:gap-4">
              {plans.map((p) => (
                <li
                  key={p.name}
                  className="flex min-h-[76px] items-center justify-between gap-2.5 rounded-[22px] border border-line bg-card px-[18px] py-2.5 desk:gap-3 desk:px-[22px]"
                >
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <div className="flex items-center gap-2 desk:gap-2.5">
                      <span className="font-display text-xl font-extrabold tracking-[-0.03em] desk:text-[22px]">
                        {p.name}
                      </span>
                      {p.tag && (
                        <span className="flex h-6 items-center whitespace-nowrap rounded-xl bg-lime px-2.5 text-[13px] font-semibold">
                          {p.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-muted desk:text-[15px]">{p.note}</span>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-0.5">
                    <span className="font-display text-2xl font-extrabold tracking-[-0.03em] desk:text-[26px]">
                      {p.price}
                    </span>
                    <span className="text-[13px] text-muted desk:text-sm">{p.per}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm leading-[1.55] text-muted">
            Yearly and Monthly renew automatically until you cancel. Cancel any time in your iPhone Settings. Lifetime is
            a one-time purchase and lasts for the life of the product. Prices are in US dollars and may differ in your
            country.{" "}
            <Link href="/terms" className={fineLink}>
              Terms
            </Link>{" "}
            ·{" "}
            <Link href="/privacy" className={fineLink}>
              Privacy
            </Link>
          </p>
        </div>
        <MobilePanel label="The Plus screen" color="#C4E1F6">
          <Phone size="sm" screen="paywall" className="left-1/2 top-11 -translate-x-1/2" />
        </MobilePanel>
        <PhonePair
          label="The Plus screen in light and dark mode"
          back={{ screen: "paywall-dark", label: "Plus screen in dark mode" }}
          front={{ screen: "paywall", label: "Plus screen" }}
          blob={{ color: "#C4E1F6", rotate: 10 }}
        />
      </div>
    </section>
  );
}
