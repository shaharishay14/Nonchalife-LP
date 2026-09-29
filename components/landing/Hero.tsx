import { ArrowDown, ArrowRight } from "@/components/icons";
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

function Headline() {
  return (
    <h1 className="mt-[22px] font-display text-[46px] font-extrabold leading-[1.02] tracking-[-0.045em] desk:mt-7 desk:text-[clamp(46px,6.39vw,92px)]">
      Habits, done
      <br />
      <span className="-ml-1 rounded-2xl bg-lime px-2.5 [box-decoration-break:clone] desk:-ml-[0.065em] desk:rounded-[0.24em] desk:px-[0.152em]">
        nonchalantly.
      </span>
    </h1>
  );
}

const lede = "Water, reading, the morning run. Tap the card when it’s done and get on with your day.";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile */}
      <div className="desk:hidden">
        <div className="mx-auto flex max-w-[600px] flex-col items-start px-6 pt-6">
          <Badge>A habit tracker for iPhone</Badge>
          <Headline />
          <p className="mt-5 text-lg font-medium leading-[1.45] text-body">{lede}</p>
          <a
            href="#get"
            className="mt-7 flex h-[60px] items-center justify-center gap-2.5 self-stretch rounded-[30px] bg-ink text-lg font-semibold text-bg"
          >
            Get it on iPhone
            <ArrowRight size={20} />
          </a>
          <a href="#features" className="mt-3 flex h-11 items-center gap-2 text-[17px] font-semibold">
            See how it works
            <ArrowDown size={18} />
          </a>
          <span className="mt-2 text-[15px] font-medium text-muted">Free to download</span>
        </div>
        {/* Art: the 390 design's coordinates, offset by the text block above it. */}
        <div className="relative mx-auto h-[720px] w-[390px]">
          <Blob style={{ left: -90, top: 290, width: 520, height: 170, borderRadius: 85, background: "#D8F07A", transform: "rotate(-12deg)" }} />
          <Blob style={{ left: 200, top: 10, width: 300, height: 120, borderRadius: 60, background: "#C4E1F6", transform: "rotate(14deg)" }} />
          <Phone size="sm" screen="activity-dark" label="Activity heatmap in dark mode" style={{ left: 190, top: 50, transform: "rotate(8deg)" }} />
          <Phone size="sm" screen="today" label="Today screen with a finished habit" style={{ left: 34, top: 70, transform: "rotate(-4deg)" }} />
        </div>
      </div>

      {/* Desktop */}
      <div className="relative mx-auto hidden max-w-[1440px] desk:block" style={{ minHeight: u(860) }}>
        <Blob style={{ left: u(700), top: u(470), width: u(900), height: u(250), borderRadius: u(125), background: "#D8F07A", transform: "rotate(-12deg)" }} />
        <Blob style={{ left: u(1010), top: u(110), width: u(620), height: u(200), borderRadius: u(100), background: "#C4E1F6", transform: "rotate(14deg)" }} />
        <Floats items={floats} />
        <Phone size="lg" screen="activity-dark" label="Activity heatmap in dark mode" style={{ left: u(1070), top: u(130), transform: "rotate(6deg)" }} />
        <Phone size="lg" screen="today" label="Today screen with a finished habit" style={{ left: u(770), top: u(110), transform: "rotate(-6deg)" }} />

        <div className="relative flex flex-col items-start" style={{ padding: `${u(150)} 0 ${u(80)} ${u(96)}`, width: u(716) }}>
          <Badge>A habit tracker for iPhone</Badge>
          <Headline />
          <p className="mt-7 text-[clamp(18px,1.53vw,22px)] font-medium leading-[1.4] text-body" style={{ maxWidth: `max(${u(520)}, 340px)` }}>
            {lede}
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a href="#get" className="flex h-16 items-center gap-2.5 rounded-[32px] bg-ink px-8 text-lg font-semibold text-bg">
              Get it on iPhone
              <ArrowRight size={20} />
            </a>
            <a href="#features" className="flex items-center gap-2 text-[17px] font-semibold">
              See how it works
              <ArrowDown size={18} />
            </a>
          </div>
          <span className="mt-5 text-[15px] font-medium text-muted">Free to download</span>
        </div>
      </div>
    </section>
  );
}
