import { Blob } from "@/components/landing/Decor";
import Phone, { type Screen } from "@/components/landing/Phone";
import { u } from "@/lib/units";

type PhonePairProps = {
  /** Describes both phones together. */
  label: string;
  /** The phone tilted left, behind. */
  back: { screen: Screen; label: string };
  /** The phone tilted right, in front. */
  front: { screen: Screen; label: string };
  blob: { color: string; rotate: number };
  className?: string;
};

/** Desktop art: two tilted phones on a soft pill, on the 1440 design's coordinates. */
export default function PhonePair({ label, back, front, blob, className = "" }: PhonePairProps) {
  return (
    <div role="img" aria-label={label} className={`relative hidden desk:block ${className}`} style={{ height: u(740) }}>
      <Blob
        style={{
          left: u(-20),
          top: u(260),
          width: u(720),
          height: u(240),
          borderRadius: u(120),
          background: blob.color,
          transform: `rotate(${blob.rotate}deg)`,
        }}
      />
      <Phone size="lg" {...back} style={{ left: u(10), top: u(40), transform: "rotate(-6deg)" }} />
      <Phone size="lg" {...front} style={{ left: u(270), top: u(10), transform: "rotate(5deg)" }} />
    </div>
  );
}
