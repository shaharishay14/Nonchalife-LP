"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

/** The design's 390x844 screen, drawn at native size and zoomed to fit the phone. */
const SCREEN_WIDTH = 390;

/**
 * The new-badge moment ("Locked in"), from design/screens/BadgeUnlocked.dc.html.
 * Pure CSS: the bu- keyframes live in app/globals.css. Fills its parent, so place it
 * inside a sized, relatively positioned box such as a Phone screen.
 *
 * - CSS zoom (not a transform) scales it, so text and SVG are laid out at their final
 *   size and stay sharp. zoom only takes a number, so it is measured here.
 * - It starts paused and only plays while on screen.
 * - Decorative: hidden from assistive tech and inert, so its buttons can't be focused.
 */
export default function BadgeUnlockedAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(0.8);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setPlaying(entry.isIntersecting));
    const ro = new ResizeObserver(([entry]) => setZoom(entry.contentRect.width / SCREEN_WIDTH));
    io.observe(el);
    ro.observe(el);
    return () => {
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" inert className="bu-root absolute inset-0" data-playing={playing || undefined}>
      <div style={{ zoom }}>
        <div
          style={{
            position: "relative",
            width: "390px",
            height: "844px",
            boxSizing: "border-box",
            overflow: "hidden",
            padding: "0 24px 40px",
            display: "flex",
            flexDirection: "column",
            background: "#0F0F0E",
            color: "#F3F1EC",
            fontFamily: "var(--font-geist), -apple-system, 'Helvetica Neue', sans-serif",
          }}
        >
          <div
            className="bu-cycle"
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              className="bu-chip"
              style={{
                height: "32px",
                padding: "0 14px",
                borderRadius: "16px",
                background: "#1C1B19",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "#D8F07A",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7L12 3z" />
              </svg>
              NEW BADGE
            </span>
            <div
              style={{
                position: "relative",
                marginTop: "36px",
                width: "280px",
                height: "280px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                className="bu-ring"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: "280px",
                  height: "280px",
                  boxSizing: "border-box",
                  borderRadius: "140px",
                  border: "1px solid #2E2D2A",
                }}
              ></span>
              <span
                className="bu-disc"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "30px",
                  top: "30px",
                  width: "220px",
                  height: "220px",
                  borderRadius: "110px",
                  background: "#1C1B19",
                }}
              ></span>
              <span
                className="bu-pulse"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "30px",
                  top: "30px",
                  width: "220px",
                  height: "220px",
                  boxSizing: "border-box",
                  borderRadius: "110px",
                  border: "2px solid #D8F07A",
                }}
              ></span>
              <div className="bu-badge" style={{ position: "relative" }}>
                <div className="bu-float">
                  <svg
                    width="196"
                    height="196"
                    viewBox="0 0 100 100"
                    style={{ display: "block", flexShrink: "0", overflow: "visible" }}
                  >
                    <defs>
                      <linearGradient id="gf-s34" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#EEE9FE" />
                        <stop offset="0.6" stopColor="#D6CCFA" />
                      </linearGradient>
                      <linearGradient id="gi-s34" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#D6CCFA" />
                        <stop offset="1" stopColor="#EEE9FE" />
                      </linearGradient>
                      <clipPath id="cp-s34">
                        <path d="M50 7Q60.53 -2.96 66.46 10.27Q80 5.1 80.41 19.59Q94.9 20 89.73 33.54Q102.96 39.47 93 50Q102.96 60.53 89.73 66.46Q94.9 80 80.41 80.41Q80 94.9 66.46 89.73Q60.53 102.96 50 93Q39.47 102.96 33.54 89.73Q20 94.9 19.59 80.41Q5.1 80 10.27 66.46Q-2.96 60.53 7 50Q-2.96 39.47 10.27 33.54Q5.1 20 19.59 19.59Q20 5.1 33.54 10.27Q39.47 -2.96 50 7Z" />
                      </clipPath>
                    </defs>
                    <ellipse cx="50" cy="95" rx="34" ry="4" fill="#141412" opacity="0.12" />
                    <path
                      d="M50 7Q60.53 -2.96 66.46 10.27Q80 5.1 80.41 19.59Q94.9 20 89.73 33.54Q102.96 39.47 93 50Q102.96 60.53 89.73 66.46Q94.9 80 80.41 80.41Q80 94.9 66.46 89.73Q60.53 102.96 50 93Q39.47 102.96 33.54 89.73Q20 94.9 19.59 80.41Q5.1 80 10.27 66.46Q-2.96 60.53 7 50Q-2.96 39.47 10.27 33.54Q5.1 20 19.59 19.59Q20 5.1 33.54 10.27Q39.47 -2.96 50 7Z"
                      fill="#8574E0"
                      transform="translate(4 6.5) scale(0.92)"
                    />
                    <g transform="translate(4 1.5) scale(0.92)">
                      <path
                        d="M50 7Q60.53 -2.96 66.46 10.27Q80 5.1 80.41 19.59Q94.9 20 89.73 33.54Q102.96 39.47 93 50Q102.96 60.53 89.73 66.46Q94.9 80 80.41 80.41Q80 94.9 66.46 89.73Q60.53 102.96 50 93Q39.47 102.96 33.54 89.73Q20 94.9 19.59 80.41Q5.1 80 10.27 66.46Q-2.96 60.53 7 50Q-2.96 39.47 10.27 33.54Q5.1 20 19.59 19.59Q20 5.1 33.54 10.27Q39.47 -2.96 50 7Z"
                        fill="url(#gf-s34)"
                        stroke="none"
                        strokeWidth="0"
                      />
                      <path d="M50 15A35 35 0 1 1 50 85A35 35 0 1 1 50 15Z" fill="url(#gi-s34)" />
                      <path
                        d="M50 15A35 35 0 1 1 50 85A35 35 0 1 1 50 15Z"
                        fill="none"
                        stroke="#8574E0"
                        strokeOpacity="0.35"
                        strokeWidth="3"
                        transform="translate(0 1.4)"
                      />
                      <path
                        d="M50 15A35 35 0 1 1 50 85A35 35 0 1 1 50 15Z"
                        fill="none"
                        stroke="#9D8CF0"
                        strokeWidth="2.2"
                      />
                      <g clipPath="url(#cp-s34)">
                        <ellipse cx="30" cy="10" rx="50" ry="28" fill="#FFFFFF" opacity="0.35" />
                      </g>
                      <path
                        d=""
                        transform="translate(30.8 31.8) scale(1.6)"
                        fill="none"
                        stroke="#FFFFFF"
                        opacity="0.6"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <text
                        x="50"
                        y="57.18"
                        transform="translate(0 1)"
                        textAnchor="middle"
                        fontWeight="800"
                        fontSize="38"
                        letterSpacing="-1"
                        fill="#FFFFFF"
                        opacity="0.6"
                        style={{ fontFamily: "var(--font-bricolage), 'Helvetica Neue', sans-serif" }}
                      >
                        30
                      </text>
                      <text
                        x="50"
                        y="70.18"
                        transform="translate(0 1)"
                        textAnchor="middle"
                        fontWeight="600"
                        fontSize="8"
                        letterSpacing="1"
                        fill="#FFFFFF"
                        opacity="0.6"
                        style={{ fontFamily: "var(--font-geist), -apple-system, 'Helvetica Neue', sans-serif" }}
                      >
                        DAYS
                      </text>
                      <path
                        d=""
                        transform="translate(30.8 30.8) scale(1.6)"
                        fill="none"
                        stroke="#141412"
                        opacity="1"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <text
                        x="50"
                        y="57.18"
                        transform="translate(0 0)"
                        textAnchor="middle"
                        fontWeight="800"
                        fontSize="38"
                        letterSpacing="-1"
                        fill="#141412"
                        opacity="1"
                        style={{ fontFamily: "var(--font-bricolage), 'Helvetica Neue', sans-serif" }}
                      >
                        30
                      </text>
                      <text
                        x="50"
                        y="70.18"
                        transform="translate(0 0)"
                        textAnchor="middle"
                        fontWeight="600"
                        fontSize="8"
                        letterSpacing="1"
                        fill="#141412"
                        opacity="1"
                        style={{ fontFamily: "var(--font-geist), -apple-system, 'Helvetica Neue', sans-serif" }}
                      >
                        DAYS
                      </text>
                      <g clipPath="url(#cp-s34)">
                        <polygon className="bu-shine" points="-34,-12 -10,-12 26,112 2,112" fill="#FFFFFF" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "3px",
                    background: "#D8F07A",
                    "--dx": "117",
                    "--dy": "-20",
                    "--rot": "90",
                    "--pd": "0ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "16px",
                    height: "8px",
                    borderRadius: "4px",
                    background: "#D6CCFA",
                    "--dx": "136",
                    "--dy": "19",
                    "--rot": "-25",
                    "--pd": "80ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: "#F2A27C",
                    "--dx": "111",
                    "--dy": "63",
                    "--rot": "-70",
                    "--pd": "0ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "3px",
                    background: "#C4E1F6",
                    "--dx": "45",
                    "--dy": "81",
                    "--rot": "-70",
                    "--pd": "80ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "16px",
                    height: "8px",
                    borderRadius: "4px",
                    background: "#F5E49C",
                    "--dx": "4",
                    "--dy": "131",
                    "--rot": "-70",
                    "--pd": "20ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: "#9D8CF0",
                    "--dx": "-60",
                    "--dy": "105",
                    "--rot": "-70",
                    "--pd": "80ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "3px",
                    background: "#D8F07A",
                    "--dx": "-81",
                    "--dy": "56",
                    "--rot": "-45",
                    "--pd": "0ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "16px",
                    height: "8px",
                    borderRadius: "4px",
                    background: "#D6CCFA",
                    "--dx": "-108",
                    "--dy": "25",
                    "--rot": "30",
                    "--pd": "20ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: "#F2A27C",
                    "--dx": "-142",
                    "--dy": "-16",
                    "--rot": "55",
                    "--pd": "20ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "3px",
                    background: "#C4E1F6",
                    "--dx": "-137",
                    "--dy": "-49",
                    "--rot": "-45",
                    "--pd": "40ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "16px",
                    height: "8px",
                    borderRadius: "4px",
                    background: "#F5E49C",
                    "--dx": "-119",
                    "--dy": "-99",
                    "--rot": "55",
                    "--pd": "0ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: "#9D8CF0",
                    "--dx": "-48",
                    "--dy": "-133",
                    "--rot": "55",
                    "--pd": "60ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "3px",
                    background: "#D8F07A",
                    "--dx": "12",
                    "--dy": "-139",
                    "--rot": "30",
                    "--pd": "40ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "16px",
                    height: "8px",
                    borderRadius: "4px",
                    background: "#D6CCFA",
                    "--dx": "50",
                    "--dy": "-149",
                    "--rot": "90",
                    "--pd": "20ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: "#F2A27C",
                    "--dx": "77",
                    "--dy": "-106",
                    "--rot": "30",
                    "--pd": "40ms",
                  } as CSSProperties
                }
              ></span>
              <span
                className="bu-p"
                aria-hidden="true"
                style={
                  {
                    position: "absolute",
                    left: "140px",
                    top: "140px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "3px",
                    background: "#C4E1F6",
                    "--dx": "119",
                    "--dy": "-50",
                    "--rot": "-70",
                    "--pd": "0ms",
                  } as CSSProperties
                }
              ></span>
            </div>
            <div
              className="bu-title"
              style={{
                margin: "36px 0 0",
                fontFamily: "var(--font-bricolage), 'Helvetica Neue', sans-serif",
                fontSize: "44px",
                fontWeight: 800,
                lineHeight: "1",
                letterSpacing: "-0.04em",
                textAlign: "center",
              }}
            >
              Locked in
            </div>
            <p
              className="bu-sub"
              style={{
                margin: "12px 0 0",
                maxWidth: "280px",
                fontSize: "17px",
                lineHeight: "1.4",
                color: "#A8A399",
                textAlign: "center",
              }}
            >
              Read 20 pages, 30 days without a miss.
            </p>
            <div style={{ marginTop: "24px", display: "flex", gap: "8px" }}>
              <span
                className="bu-c1"
                style={{
                  height: "34px",
                  padding: "0 14px",
                  borderRadius: "17px",
                  border: "1px solid #2E2D2A",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#CFCAC0",
                }}
              >
                8 of 17 earned
              </span>
              <span
                className="bu-c2"
                style={{
                  height: "34px",
                  padding: "0 14px",
                  borderRadius: "17px",
                  border: "1px solid #2E2D2A",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#CFCAC0",
                }}
              >
                Next: 100 days
              </span>
            </div>
          </div>
          <div className="bu-cycle" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                type="button"
                className="bu-b1"
                style={{
                  flex: 1,
                  height: "56px",
                  borderRadius: "28px",
                  border: "1px solid #3A3935",
                  background: "transparent",
                  color: "#F3F1EC",
                  fontSize: "17px",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 15V4M8 8l4-4 4 4M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />
                </svg>
                Share
              </button>
              <a
                className="bu-b2"
                style={{
                  flex: 1,
                  height: "56px",
                  borderRadius: "28px",
                  background: "#D8F07A",
                  color: "#141412",
                  fontSize: "17px",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Nice
              </a>
            </div>
            <a
              className="bu-lk"
              style={{
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "15px",
                fontWeight: 500,
                color: "#CFCAC0",
                textDecoration: "none",
              }}
            >
              See all trophies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
