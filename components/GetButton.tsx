import { ArrowRight } from "@/components/icons";
import { APP_STORE_URL } from "@/lib/config";

type GetButtonProps = {
  tone: "dark" | "lime";
  /** Size and layout classes from the caller. */
  className?: string;
};

const tones = {
  dark: "bg-ink text-bg hover:bg-night2",
  lime: "bg-lime text-ink hover:bg-limeDeep",
};

/** The "Get it on iPhone" pill, linking to the App Store. */
export default function GetButton({ tone, className = "" }: GetButtonProps) {
  return (
    <a
      href={APP_STORE_URL}
      className={`flex items-center justify-center gap-2.5 rounded-full text-lg font-semibold transition active:scale-[0.97] ${tones[tone]} ${className}`}
    >
      Get it on iPhone
      <ArrowRight size={20} />
    </a>
  );
}
