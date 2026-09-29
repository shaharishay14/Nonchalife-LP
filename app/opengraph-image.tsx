import { ImageResponse } from "next/og";
import { DESCENT, loadDisplayFont } from "@/lib/brand-image";

export const alt = "Nonchalife: habits, done nonchalantly. A habit tracker for iPhone.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#F3F1EC",
        color: "#141412",
        fontFamily: "Bricolage",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 640,
          top: 360,
          width: 820,
          height: 230,
          borderRadius: 115,
          background: "#D8F07A",
          transform: "rotate(-12deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 800,
          top: 70,
          width: 560,
          height: 180,
          borderRadius: 90,
          background: "#C4E1F6",
          transform: "rotate(14deg)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", padding: "72px 80px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 4,
            fontSize: 56,
            lineHeight: "56px",
            letterSpacing: "-0.04em",
          }}
        >
          n
          <div style={{ width: 18, height: 18, borderRadius: 5, background: "#D8F07A", marginBottom: 56 * DESCENT }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: 90,
            fontSize: 112,
            lineHeight: 1.02,
            letterSpacing: "-0.045em",
          }}
        >
          <span>Habits, done</span>
          <span style={{ marginLeft: -8, padding: "0 18px", borderRadius: 28, background: "#D8F07A" }}>
            nonchalantly.
          </span>
        </div>
      </div>
    </div>,
    { ...size, fonts: [await loadDisplayFont()] },
  );
}
