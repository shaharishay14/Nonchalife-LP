import { ArrowRight } from "@/components/icons";
import { APP_STORE_URL } from "@/lib/config";

type GetButtonProps = {
  tone: "dark" | "lime";
  /** Size and layout classes from the caller. */
  className?: string;
};

const tones = {
  dark: "bg-ink text-bg",
  lime: "bg-lime text-ink",
};

/**
 * The "Get it on iPhone" pill. Until NEXT_PUBLIC_APP_STORE_URL is set it shows
 * a muted, non-clickable "Coming soon to iPhone" pill instead.
 */
export default function GetButton({ tone, className = "" }: GetButtonProps) {
  const base = `flex items-center justify-center gap-2.5 rounded-full text-lg font-semibold ${tones[tone]} ${className}`;

  if (!APP_STORE_URL) {
    return <span className={`${base} cursor-default opacity-60`}>Coming soon to iPhone</span>;
  }

  return (
    <a href={APP_STORE_URL} className={base}>
      Get it on iPhone
      <ArrowRight size={20} />
    </a>
  );
}
