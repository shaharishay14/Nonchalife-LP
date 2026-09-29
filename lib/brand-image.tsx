import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Bricolage Grotesque 800, for images rendered with next/og. */
export const loadDisplayFont = async () => ({
  name: "Bricolage",
  data: await readFile(join(process.cwd(), "assets/BricolageGrotesque-ExtraBold.ttf")),
  weight: 800 as const,
  style: "normal" as const,
});

/** Bricolage's descent below the baseline, as a fraction of font size (line-height 1). */
export const DESCENT = 0.166;

/** The app icon: an off-white "n" and a lime square on a near-black tile. */
export function IconTile({ size, radius = 0 }: { size: number; radius?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: "#141412",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: size * 0.04,
          fontFamily: "Bricolage",
          fontSize: size * 0.72,
          lineHeight: `${size * 0.72}px`,
          letterSpacing: "-0.04em",
          color: "#F3F1EC",
          marginTop: -size * 0.06,
          marginLeft: size * 0.04,
        }}
      >
        n
        <div
          style={{
            width: size * 0.19,
            height: size * 0.19,
            borderRadius: size * 0.055,
            background: "#D8F07A",
            // Sit on the baseline: lift by the font's descent.
            marginBottom: size * 0.72 * DESCENT,
          }}
        />
      </div>
    </div>
  );
}
