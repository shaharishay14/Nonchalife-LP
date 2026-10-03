import type { CSSProperties } from "react";
import { Blob, Burst, Floats } from "@/components/landing/Decor";
import HabitCard from "@/components/landing/HabitCard";
import Phone from "@/components/landing/Phone";
import { Tag } from "@/components/landing/Pill";
import { u } from "@/lib/units";

const float = (
  left: number,
  top: number,
  size: number,
  radius: number,
  color: string,
  rotate: number,
  delay: number,
) => ({
  left: u(left),
  top: u(top),
  size,
  radius,
  color,
  rotate,
  delay,
});

type FeatureTextProps = {
  number: string;
  /** Numeral color on mobile and desktop. The designs differ for 02 and 03. */
  numberColor: { mobile: string; desktop: string };
  title: [string, string];
  body: string;
  tags: string[];
  /** Light text and dark tags, for the dark Plus section. */
  dark?: boolean;
  className?: string;
};

export function FeatureText({ number, numberColor, title, body, tags, dark = false, className = "" }: FeatureTextProps) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <span
        aria-hidden="true"
        className="font-display text-8xl font-extrabold leading-[0.8] tracking-[-0.06em] text-(color:--num-m) desk:text-[clamp(96px,10.42vw,150px)] desk:text-(color:--num-d)"
        style={{ "--num-m": numberColor.mobile, "--num-d": numberColor.desktop } as CSSProperties}
      >
        {number}
      </span>
      <h3 className="mt-6 font-display text-[40px] font-extrabold leading-[1.02] tracking-[-0.045em] desk:mt-10 desk:text-[clamp(40px,4.72vw,68px)] desk:leading-none">
        {title[0]}
        <br />
        {title[1]}
      </h3>
      <p
        className={`mt-4 text-[17px] font-medium leading-normal desk:mt-6 desk:max-w-[470px] desk:text-[clamp(17px,1.46vw,21px)] desk:leading-[1.45] ${
          dark ? "text-faint" : "text-body"
        }`}
      >
        {body}
      </p>
      <div className="mt-6 flex flex-wrap gap-2.5 desk:mt-8">
        {tags.map((t) => (
          <Tag key={t} dark={dark}>
            {t}
          </Tag>
        ))}
      </div>
    </div>
  );
}

/** One feature: text and art side by side on desktop, stacked on mobile. */
export function FeatureRow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="desk:grid desk:grid-cols-2 desk:items-center desk:gap-(--g)"
      style={{ "--g": u(64) } as CSSProperties}
    >
      {children}
    </div>
  );
}

/** Mobile art: a rounded colored panel below the text. */
export function MobilePanel({ label, color, children }: { label: string; color: string; children: React.ReactNode }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative mt-8 h-[480px] overflow-hidden rounded-[40px] desk:hidden"
      style={{ background: color }}
    >
      {children}
    </div>
  );
}

const cards01 = {
  water: { title: "Drink water", streak: 4, detail: "6 of 8 glasses", progress: { width: "75%", color: "#C4E1F6" } },
  run: { title: "Morning run", streak: 4, detail: "Tue · Thu · Sat" },
  stretch: { title: "Stretch", streak: 12, detail: "10 minutes" },
};

const burstColors = [
  "#E3C443",
  "#A8CC2E",
  "#6FB3E3",
  "#9D8CF0",
  "#F2A27C",
  "#141412",
  "#A8CC2E",
  "#E3C443",
  "#9D8CF0",
  "#6FB3E3",
  "#F2A27C",
  "#141412",
];

function Feature01() {
  const text = (
    <FeatureText
      number="01"
      numberColor={{ mobile: "#E3C443", desktop: "#E3C443" }}
      title={["One tap.", "Done."]}
      body="Every habit is a big card with one big button. Tap it when you’ve done the thing, then get back to your day."
      tags={["Done or not done", "Counts, like glasses of water", "Minutes"]}
    />
  );
  const label = "Habit cards: Morning run gets ticked done";

  return (
    <FeatureRow>
      {text}
      <MobilePanel label={label} color="#F5E49C">
        <div
          className="absolute inset-x-6 top-1/2 mx-auto flex max-w-[342px] -translate-y-1/2 flex-col gap-3"
          style={{ "--d": "-1400ms" } as CSSProperties}
        >
          <Burst colors={burstColors} style={{ right: 51, top: 162 }} />
          <HabitCard {...cards01.water} />
          <HabitCard {...cards01.run} animated />
          <HabitCard {...cards01.stretch} />
        </div>
      </MobilePanel>
      <div
        role="img"
        aria-label={label}
        className="relative hidden items-center justify-center overflow-hidden bg-butter desk:flex"
        style={{ height: u(680), borderRadius: u(48) }}
      >
        <Floats
          items={[
            float(70, 90, 12, 3, "#F2A27C", 20, 0),
            float(500, 120, 10, 5, "#141412", 60, 500),
            float(90, 560, 11, 3, "#9D8CF0", -25, 900),
            float(510, 570, 12, 3, "#A8CC2E", 35, 300),
          ]}
        />
        <div
          className="relative flex flex-col"
          style={
            {
              "--cu": `calc(1.35 * var(--u))`,
              "--bu": "var(--cu)",
              "--d": "-1400ms",
              width: u(342 * 1.35),
              gap: u(12 * 1.35),
            } as CSSProperties
          }
        >
          <Burst colors={burstColors} style={{ right: u(51 * 1.35), top: u(162 * 1.35) }} />
          <HabitCard {...cards01.water} shadow="md" />
          <HabitCard {...cards01.run} animated shadow="sm" />
          <HabitCard {...cards01.stretch} color="#D6CCFA" done shadow="md" />
        </div>
      </div>
    </FeatureRow>
  );
}

function Feature02() {
  const text = (
    <FeatureText
      number="02"
      numberColor={{ mobile: "#9D8CF0", desktop: "#6FB3E3" }}
      title={["Some habits", "take minutes."]}
      body="Start a timer right on the card, pause it when life happens, or go full screen and focus. Ten minutes of stretching counts itself."
      tags={["Play and pause", "Full-screen timer"]}
    />
  );

  return (
    <FeatureRow>
      {text}
      <MobilePanel label="A running timer for a Stretch habit" color="#D6CCFA">
        <Phone size="sm" screen="timer" className="left-1/2 top-11 -translate-x-1/2" />
      </MobilePanel>
      <div
        role="img"
        aria-label="Habit timer, started from the Stretch card"
        className="relative hidden desk:order-first desk:block"
        style={{ height: u(740) }}
      >
        <Blob
          style={{
            left: u(-10),
            top: u(300),
            width: u(620),
            height: u(230),
            borderRadius: u(115),
            background: "#C4E1F6",
            transform: "rotate(-12deg)",
          }}
        />
        <Phone size="lg" screen="timer" style={{ left: u(150), top: u(20), transform: "rotate(4deg)" }} />
        <div
          className="absolute"
          style={
            { left: 0, top: u(520), transform: "rotate(-4deg)", "--cu": "var(--u)", width: u(342) } as CSSProperties
          }
        >
          <HabitCard
            title="Stretch"
            streak={12}
            detail="6 of 10 minutes"
            progress={{ width: "60%", color: "#D6CCFA" }}
            done
            shadow="md"
          />
        </div>
        <Floats items={[float(560, 110, 11, 3, "#E3C443", 25, 200), float(40, 180, 9, 5, "#141412", 70, 700)]} />
      </div>
    </FeatureRow>
  );
}

function Feature03() {
  const text = (
    <FeatureText
      number="03"
      numberColor={{ mobile: "#6FB3E3", desktop: "#9D8CF0" }}
      title={["Watch your", "year fill in."]}
      body="Every day you show up paints a square. Missed one? Tomorrow’s square is still there."
      tags={["Every habit, one grid", "Light and dark"]}
    />
  );

  return (
    <FeatureRow>
      {text}
      <MobilePanel label="Activity heatmap with every habit in one grid" color="#C4E1F6">
        <Phone size="sm" screen="activity" className="left-1/2 top-11 -translate-x-1/2" />
      </MobilePanel>
      <div
        role="img"
        aria-label="Activity heatmap in light and dark mode"
        className="relative hidden desk:block"
        style={{ height: u(740) }}
      >
        <Blob
          style={{
            left: u(-20),
            top: u(260),
            width: u(720),
            height: u(240),
            borderRadius: u(120),
            background: "#D6CCFA",
            transform: "rotate(10deg)",
          }}
        />
        <Phone size="lg" screen="activity-dark" style={{ left: u(10), top: u(40), transform: "rotate(-6deg)" }} />
        <Phone size="lg" screen="activity" style={{ left: u(270), top: u(10), transform: "rotate(5deg)" }} />
        <Floats items={[float(600, 640, 11, 3, "#F2A27C", -20, 400), float(0, 40, 10, 3, "#A8CC2E", 40, 1000)]} />
      </div>
    </FeatureRow>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto flex max-w-[1440px] flex-col gap-24 px-6 pt-[88px] pb-24 desk:px-(--pad) desk:pt-(--pt) desk:pb-(--pb) desk:gap-(--gap)"
      style={{ "--pad": u(96), "--pt": u(160), "--pb": u(140), "--gap": u(120) } as CSSProperties}
    >
      <div className="flex flex-col desk:items-center desk:text-center">
        <h2 className="font-display text-[44px] font-extrabold leading-none tracking-[-0.05em] desk:text-[clamp(44px,6.11vw,88px)]">
          Small on purpose.
        </h2>
        <p className="mt-4 text-[17px] font-medium leading-normal text-body desk:mt-6 desk:max-w-[620px] desk:text-[clamp(17px,1.46vw,21px)] desk:leading-[1.45]">
          No dashboards, no productivity theater. Just the handful of things you want to do every day, laid out big
          enough to actually do them.
        </p>
      </div>
      <Feature01 />
      <Feature02 />
      <Feature03 />
    </section>
  );
}
