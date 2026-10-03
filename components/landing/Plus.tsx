import type { CSSProperties } from "react";
import BadgeUnlockedAnimation from "@/components/landing/BadgeUnlockedAnimation";
import { FeatureRow, FeatureText, MobilePanel } from "@/components/landing/Features";
import Phone from "@/components/landing/Phone";
import PhonePair from "@/components/landing/PhonePair";
import { PlusBadge } from "@/components/landing/Pill";
import { u } from "@/lib/units";

function Feature04() {
  return (
    <FeatureRow>
      <FeatureText
        dark
        number="04"
        numberColor={{ mobile: "#F2A27C", desktop: "#F2A27C" }}
        title={["Focus,", "in rounds."]}
        body="Pick how long to focus, work, then rest. Repeat. It keeps running when you lock your phone, and only focus time counts toward your goal."
        tags={["Focus and rest rounds", "Pause or skip", "Counts toward your goal"]}
      />
      <MobilePanel label="Pomodoro focus round in dark mode" color="#D6CCFA">
        <Phone size="sm" screen="pomodoro-focus-dark" className="left-1/2 top-11 -translate-x-1/2" />
      </MobilePanel>
      <PhonePair
        label="Pomodoro timer setup and a focus round"
        back={{ screen: "pomodoro-setup", label: "Pomodoro setup" }}
        front={{ screen: "pomodoro-focus-dark", label: "Pomodoro focus round in dark mode" }}
        blob={{ color: "#D6CCFA", rotate: 10 }}
      />
    </FeatureRow>
  );
}

function Feature05() {
  return (
    <FeatureRow>
      <PhonePair
        label="Trophies, and a new trophy unlocked"
        back={{ screen: "badge-unlocked", children: <BadgeUnlockedAnimation /> }}
        front={{ screen: "trophies", label: "Trophies" }}
        // Shorter than the design's 720 so the pill stays behind the phones, not the heading.
        blob={{ color: "#F5E49C", rotate: -10, width: 560 }}
      />
      <FeatureText
        dark
        number="05"
        numberColor={{ mobile: "#D8F07A", desktop: "#D8F07A" }}
        title={["Badges for", "showing up."]}
        body="Earn trophies as you keep going. Spin them, flip them and see what each one asks for. The next one is always in view."
        tags={["Spin and flip", "See what is next up"]}
        // The design's blob and phone reach into this column; keep the text readable above them.
        className="relative z-10"
      />
      <MobilePanel label="Trophies" color="#C4E1F6">
        <Phone size="sm" screen="trophies" className="left-1/2 top-11 -translate-x-1/2" />
      </MobilePanel>
    </FeatureRow>
  );
}

/** The dark Nonchalife Plus section: Pomodoro (04) and Trophies (05). */
export default function Plus() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 desk:px-(--m)" style={{ "--m": u(48) } as CSSProperties}>
      <section
        id="plus"
        data-dark
        className="flex flex-col gap-[72px] rounded-[40px] bg-ink px-6 py-[72px] text-bg desk:gap-(--gap) desk:rounded-[48px] desk:px-(--px) desk:py-(--py)"
        style={{ "--gap": u(100), "--px": u(96), "--py": u(120) } as CSSProperties}
      >
        <div className="flex flex-col items-start desk:items-center desk:text-center">
          <PlusBadge />
          <h2 className="mt-6 font-display text-[44px] font-extrabold leading-[1.02] tracking-[-0.05em] desk:mt-8 desk:text-[clamp(44px,6.11vw,88px)] desk:leading-none">
            More room,
            <br />
            when you want it.
          </h2>
          <p className="mt-4 text-[17px] font-medium leading-normal text-faint desk:mt-6 desk:max-w-[620px] desk:text-[clamp(17px,1.46vw,21px)] desk:leading-[1.45]">
            The free app stays free. Plus is for the days you want more than three habits and a little more focus.
          </p>
        </div>
        <Feature04 />
        <Feature05 />
      </section>
    </div>
  );
}
