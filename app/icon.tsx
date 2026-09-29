import { ImageResponse } from "next/og";
import { IconTile, loadDisplayFont } from "@/lib/brand-image";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(<IconTile size={64} radius={14} />, { ...size, fonts: [await loadDisplayFont()] });
}
