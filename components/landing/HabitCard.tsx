import type { CSSProperties } from "react";
import { Check, Flame, Plus } from "@/components/icons";
import { cu } from "@/lib/units";

type HabitCardProps = {
  title: string;
  streak: number;
  detail: string;
  /** Card background. Omit for a white card. */
  color?: string;
  /** Partial progress fill from the left, e.g. `{ width: "75%", color: "#C4E1F6" }`. */
  progress?: { width: string; color: string };
  done?: boolean;
  /** Loops from not done to done. Feature 01 only. */
  animated?: boolean;
  shadow?: "sm" | "md";
  className?: string;
  style?: CSSProperties;
};

const shadows = {
  sm: `0 ${cu(10)} ${cu(24)} rgba(20,20,18,0.08)`,
  md: `0 ${cu(14)} ${cu(30)} rgba(20,20,18,0.10)`,
};

/** A habit card from the app, drawn in markup (the design does the same). Sized in `--cu` units. */
export default function HabitCard({
  title,
  streak,
  detail,
  color,
  progress,
  done = false,
  animated = false,
  shadow,
  className = "",
  style,
}: HabitCardProps) {
  const button = {
    width: cu(60),
    height: cu(60),
    borderRadius: cu(30),
    borderWidth: cu(2.5),
    boxShadow: `0 ${cu(3)} 0 #141412`,
  };

  return (
    <div
      className={`relative flex items-center overflow-hidden border ${animated ? "card-done" : ""} ${className}`}
      style={{
        height: cu(100),
        borderRadius: cu(32),
        gap: cu(12),
        padding: `0 ${cu(20)} 0 ${cu(24)}`,
        background: color ?? "#FFFFFF",
        borderColor: color ?? "#E6E2DA",
        boxShadow: shadow ? shadows[shadow] : undefined,
        ...style,
      }}
    >
      {progress && (
        <div className="absolute inset-y-0 left-0" style={{ width: progress.width, background: progress.color }} />
      )}
      <div className="relative flex min-w-0 grow flex-col" style={{ gap: cu(8) }}>
        <span
          className="whitespace-nowrap font-display font-bold leading-none tracking-[-0.025em]"
          style={{ fontSize: cu(25) }}
        >
          {title}
        </span>
        <span className="flex items-center font-medium text-body" style={{ gap: cu(6), fontSize: cu(14) }}>
          <Flame size={cu(16)} />
          <span>{streak}</span>
          <span aria-hidden="true">·</span>
          <span>{detail}</span>
        </span>
      </div>
      <span
        className={`relative flex shrink-0 items-center justify-center border-solid border-ink ${
          done ? "bg-ink text-bg" : "bg-card text-ink"
        } ${animated ? "pop" : ""}`}
        style={button}
      >
        {done ? <Check size={cu(26)} /> : <Plus size={cu(24)} />}
        {animated && (
          <span
            className="check absolute flex items-center justify-center bg-ink text-bg"
            style={{ left: cu(-2.5), top: cu(-2.5), width: cu(60), height: cu(60), borderRadius: cu(30) }}
          >
            <Check size={cu(26)} />
          </span>
        )}
      </span>
    </div>
  );
}
