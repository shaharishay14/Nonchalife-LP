import Image from "next/image";
import type { CSSProperties } from "react";
import { u } from "@/lib/units";

export type Screen = "today" | "activity" | "activity-dark" | "timer";

type PhoneProps = {
  screen: Screen;
  /** Alt text for the screenshot. Omit when a parent already describes the art. */
  label?: string;
  /** "lg" is the 1440 desktop frame (scales with `--u`), "sm" the 390 mobile frame. */
  size: "lg" | "sm";
  className?: string;
  style?: CSSProperties;
};

const px = (n: number) => `${n}px`;

const frames = {
  lg: { unit: u, w: 330, h: 693, r: 56, inner: 47, notch: { l: 108, t: 10, w: 96, h: 28, r: 14 }, shadow: [40, 70] },
  sm: { unit: px, w: 300, h: 628, r: 48, inner: 39, notch: { l: 102, t: 8, w: 78, h: 23, r: 12 }, shadow: [30, 60] },
};

/** A phone frame holding an app screenshot from `public/screens/`. */
export default function Phone({ screen, label, size, className = "", style }: PhoneProps) {
  const f = frames[size];
  const n = f.unit;
  const dark = screen === "activity-dark";

  return (
    <div
      className={`absolute bg-ink ${className}`}
      style={{
        width: n(f.w),
        height: n(f.h),
        padding: n(9),
        borderRadius: n(f.r),
        boxShadow: `0 ${n(f.shadow[0])} ${n(f.shadow[1])} rgba(20,20,18,0.22)`,
        ...style,
      }}
    >
      <div
        className={`relative size-full overflow-hidden ${dark ? "bg-night2" : "bg-line"}`}
        style={{ borderRadius: n(f.inner) }}
      >
        <Image
          src={`/screens/${screen}.png`}
          alt={label ?? ""}
          fill
          sizes={size === "lg" ? "312px" : "282px"}
          className="object-cover object-top"
        />
        <div
          className="absolute bg-black"
          style={{
            left: n(f.notch.l),
            top: n(f.notch.t),
            width: n(f.notch.w),
            height: n(f.notch.h),
            borderRadius: n(f.notch.r),
          }}
        />
      </div>
    </div>
  );
}
