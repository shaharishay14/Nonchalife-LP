import { ImageResponse } from "next/og";
import { IconTile, loadDisplayFont } from "@/lib/brand-image";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Square tile: iOS rounds the corners itself.
export default async function AppleIcon() {
  return new ImageResponse(<IconTile size={180} />, { ...size, fonts: [await loadDisplayFont()] });
}
