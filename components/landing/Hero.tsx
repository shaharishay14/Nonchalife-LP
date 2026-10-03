import type { CSSProperties } from "react";
import GetButton from "@/components/GetButton";
import { ArrowDown } from "@/components/icons";
import { Blob, Floats } from "@/components/landing/Decor";
import Phone from "@/components/landing/Phone";
import { Badge } from "@/components/landing/Pill";
import { u } from "@/lib/units";

const floats = [
  { left: 735, top: 250, size: 12, radius: 3, color: "#F2A27C", rotate: 20, delay: 0 },
  { left: 720, top: 430, size: 9, radius: 5, color: "#141412", rotate: 70, delay: 400 },
  { left: 752, top: 610, size: 11, radius: 3, color: "#9D8CF0", rotate: -30, delay: 900 },
  { left: 1030, top: 90, size: 10, radius: 3, color: "#A8CC2E", rotate: 45, delay: 300 },
  { left: 1112, top: 64, size: 8, radius: 4, color: "#6FB3E3", rotate: 10, delay: 1200 },
  { left: 1000, top: 780, size: 12, radius: 3, color: "#E3C443", rotate: -15, delay: 700 },
  { left: 1395, top: 300, size: 9, radius: 3, color: "#F2A27C", rotate: 60, delay: 500 },
].map((f) => ({ ...f, left: u(f.left), top: u(f.top) }));

// The same squares around the mobile art, in its 390 coordinates.
const floatsMobile = [
  { left: 14, top: 40, size: 12, radius: 3, color: "#F2A27C", rotate: 20, delay: 0 },
  { left: 10, top: 420, size: 9, radius: 5, color: "#141412", rotate: 70, delay: 400 },
  { left: 22, top: 640, size: 11, radius: 3, color: "#9D8CF0", rotate: -30, delay: 900 },
  { left: 150, top: 24, size: 10, radius: 3, color: "#A8CC2E", rotate: 45, delay: 300 },
  { left: 330, top: 14, size: 8, radius: 4, color: "#6FB3E3", rotate: 10, delay: 1200 },
  { left: 180, top: 704, size: 12, radius: 3, color: "#E3C443", rotate: -15, delay: 700 },
  { left: 356, top: 690, size: 9, radius: 3, color: "#F2A27C", rotate: 60, delay: 500 },
].map((f) => ({ ...f, left: `${f.left}px`, top: `${f.top}px` }));

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] desk:min-h-(--h)" style={{ "--h": u(860) } as CSSProperties}>
        {/* Desktop art, placed on the 1440 design's coordinates. */}
        <div className="absolute inset-0 hidden desk:block">
          <Blob style={{ left: u(700), top: u(470), width: u(900), height: u(250), borderRadius: u(125), background: "#D8F07A", transform: "rotate(-12deg)" }} />
          <Blob style={{ left: u(1010), top: u(110), width: u(620), height: u(200), borderRadius: u(100), background: "#C4E1F6", transform: "rotate(14deg)" }} />
          <Floats items={floats} />
          <Phone size="lg" screen="activity-dark" label="Activity heatmap in dark mode" style={{ left: u(1070), top: u(130), transform: "rotate(6deg)" }} />
          <Phone size="lg" screen="today" label="Today screen with a finished habit" style={{ left: u(770), top: u(110), transform: "rotate(-6deg)" }} />
        </div>

        <div
          className="relative flex max-w-[600px] flex-col items-start px-6 pt-6 desk:w-(--w) desk:max-w-none desk:pt-(--pt) desk:pr-0 desk:pb-(--pb) desk:pl-(--pl)"
          style={{ "--w": u(716), "--pt": u(150), "--pb": u(80), "--pl": u(96) } as CSSProperties}
        >
          <Badge>A habit tracker for iPhone</Badge>
          <h1 className="mt-[22px] font-display text-[46px] font-extrabold leading-[1.02] tracking-[-0.045em] desk:mt-7 desk:text-[clamp(46px,6.39vw,92px)]">
            Habits, done
            <br />
            <span className="-ml-1 rounded-2xl bg-lime px-2.5 [box-decoration-break:clone] desk:-ml-[0.065em] desk:rounded-[0.24em] desk:px-[0.152em]">
              nonchalantly.
            </span>
          </h1>
          <p
            className="mt-5 text-lg font-medium leading-[1.45] text-body desk:mt-7 desk:max-w-(--pw) desk:text-[clamp(18px,1.53vw,22px)] desk:leading-[1.4]"
            style={{ "--pw": `max(${u(520)}, 340px)` } as CSSProperties}
          >
            Water, reading, the morning run. Tap the card when it’s done and get on with your day.
          </p>
          <div className="mt-7 flex flex-col items-start self-stretch desk:mt-11 desk:flex-row desk:flex-wrap desk:items-center desk:gap-x-7 desk:gap-y-4 desk:self-auto">
            <GetButton tone="dark" className="h-[60px] self-stretch desk:h-16 desk:self-auto desk:px-8" />
            <a
              href="#features"
              className="mt-3 flex h-11 items-center gap-2 text-[17px] font-semibold transition-colors hover:text-body desk:mt-0 desk:h-auto"
            >
              See how it works
              <ArrowDown size={18} />
            </a>
          </div>
        </div>

        {/* Mobile art: the 390 design’s coordinates. Its top stays at the design's y=470, 48px below the text block. */}
        <div className="relative mx-auto mt-12 h-[720px] w-[390px] desk:hidden">
          <Blob style={{ left: -90, top: 290, width: 520, height: 170, borderRadius: 85, background: "#D8F07A", transform: "rotate(-12deg)" }} />
          <Blob style={{ left: 200, top: 10, width: 300, height: 120, borderRadius: 60, background: "#C4E1F6", transform: "rotate(14deg)" }} />
          <Floats items={floatsMobile} />
          <Phone size="sm" screen="activity-dark" label="Activity heatmap in dark mode" style={{ left: 190, top: 50, transform: "rotate(8deg)" }} />
          <Phone size="sm" screen="today" label="Today screen with a finished habit" style={{ left: 34, top: 70, transform: "rotate(-4deg)" }} />
        </div>
      </div>
    </section>
  );
}
