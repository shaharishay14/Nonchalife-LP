import type { CSSProperties } from "react";
import GetButton from "@/components/GetButton";
import { Burst } from "@/components/landing/Decor";
import { u } from "@/lib/units";

// Six filled days, one missed, and today (the last square) filling in.
const days = ["lime", "lime", "night2", "lime", "lime", "lime"] as const;

const burstColors = ["#D8F07A", "#F5E49C", "#C4E1F6", "#D6CCFA", "#F2A27C", "#F3F1EC", "#D8F07A", "#F5E49C", "#D6CCFA", "#C4E1F6", "#F2A27C", "#F3F1EC"];

export default function GetSection() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 desk:px-(--m)" style={{ "--m": u(48) } as CSSProperties}>
      <section
        id="get"
        data-dark
        className="flex h-[470px] flex-col items-center justify-center rounded-[40px] bg-ink px-7 text-center text-bg desk:h-auto desk:min-h-(--h) desk:rounded-[48px] desk:px-24 desk:py-20"
        style={{ "--h": u(600) } as CSSProperties}
      >
        <div aria-hidden="true" className="relative flex gap-1.5 desk:gap-2" style={{ "--d": "-2600ms" } as CSSProperties}>
          {days.map((c, i) => (
            <span
              key={i}
              className={`block size-7 rounded-[9px] desk:size-9 desk:rounded-xl ${c === "lime" ? "bg-lime" : "bg-night2"}`}
            />
          ))}
          <span className="block size-7 rounded-[9px] border-[1.5px] border-bg fill-sq desk:size-9 desk:rounded-xl" />
          <Burst colors={burstColors} className="right-3.5 top-3.5 desk:right-[18px] desk:top-[18px]" />
        </div>
        <h2 className="mt-7 font-display text-[46px] font-extrabold leading-[1.02] tracking-[-0.05em] desk:mt-9 desk:text-[clamp(46px,7.22vw,104px)] desk:leading-none">
          Start small.
          <br />
          Start today.
        </h2>
        <p className="mt-4 text-lg font-medium leading-[1.4] text-faint desk:mt-6 desk:text-[21px]">
          Free on iPhone, with up to 3 habits. Add your first one and go.
        </p>
        <GetButton tone="lime" className="mt-8 h-[60px] self-stretch desk:mt-10 desk:h-16 desk:self-auto desk:px-9" />
      </section>
    </div>
  );
}
