import type { CSSProperties } from "react";

type Square = {
  left: string;
  top: string;
  size: number;
  radius: number;
  color: string;
  rotate: number;
  delay: number;
};

/** Small drifting squares scattered around the art. */
export function Floats({ items }: { items: Square[] }) {
  return items.map((s, i) => (
    <span
      key={i}
      aria-hidden="true"
      className="float absolute"
      style={
        {
          left: s.left,
          top: s.top,
          width: s.size,
          height: s.size,
          borderRadius: s.radius,
          background: s.color,
          "--r": `${s.rotate}deg`,
          animationDelay: `${s.delay}ms`,
        } as CSSProperties
      }
    />
  ));
}

/** A soft rotated pill shape behind the art. */
export function Blob({ style }: { style: CSSProperties }) {
  return <div aria-hidden="true" className="absolute" style={style} />;
}

/**
 * Twelve squares that shoot out from a point, timed with the done animation.
 * Place it inside a parent that sets `--d` (animation offset) and `--bu` (unit).
 */
export function Burst({ colors, className = "", style }: { colors: string[]; className?: string; style: CSSProperties }) {
  return (
    <div aria-hidden="true" className={`burst pointer-events-none absolute z-[5] size-0 ${className}`} style={style}>
      {colors.map((c, i) => (
        <span key={i} className={`b${i + 1}`} style={{ background: c }} />
      ))}
    </div>
  );
}
