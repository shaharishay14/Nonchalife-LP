import { ArrowRight } from "@/components/icons";
import { APP_STORE_URL } from "@/lib/config";

type GetButtonProps = {
  tone: "dark" | "lime";
  /** Size and layout classes from the caller. */
  className?: string;
};

const tones = {
  dark: { live: "bg-ink text-bg hover:bg-night2", soon: "bg-line text-muted" },
  lime: { live: "bg-lime text-ink hover:bg-limeDeep", soon: "bg-night2 text-faint" },
};

/**
 * The "Get it on iPhone" pill. Until NEXT_PUBLIC_APP_STORE_URL is set it shows
 * a muted, non-clickable "Coming soon to iPhone" pill instead. The muted
 * colors keep text contrast above 4.5:1.
 */
export default function GetButton({ tone, className = "" }: GetButtonProps) {
  const base = `flex items-center justify-center gap-2.5 rounded-full text-lg font-semibold ${className}`;

  if (!APP_STORE_URL) {
    return <span className={`${base} cursor-default ${tones[tone].soon}`}>Coming soon to iPhone</span>;
  }

  return (
    <a href={APP_STORE_URL} className={`${base} transition active:scale-[0.97] ${tones[tone].live}`}>
      Get it on iPhone
      <ArrowRight size={20} />
    </a>
  );
}
