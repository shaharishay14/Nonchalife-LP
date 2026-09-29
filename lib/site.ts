import type { Metadata } from "next";

export const SITE_URL = "https://nonchalife.com";
export const SITE_NAME = "Nonchalife";
export const SITE_TITLE = "Nonchalife: habits, done nonchalantly";
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Nonchalife: habits, done nonchalantly. A habit tracker for iPhone.",
};

export const SITE_DESCRIPTION =
  "A habit tracker for iPhone. Water, reading, the morning run. Tap the card when it’s done and get on with your day.";

/**
 * Metadata for an inner page. Page-level `openGraph` and `twitter` replace the
 * root ones (including the image), so they are rebuilt in full here.
 */
export function pageMetadata(path: string, title: string, description: string): Metadata {
  const fullTitle = `${title} · ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [OG_IMAGE] },
  };
}
