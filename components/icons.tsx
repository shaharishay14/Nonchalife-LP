type IconProps = { size: number | string; strokeWidth?: number; className?: string };

function Icon({ size, strokeWidth = 1.75, className, d }: IconProps & { d: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={d} />
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => <Icon {...p} d="M5 12h14M13 6l6 6-6 6" />;
export const ArrowDown = (p: IconProps) => <Icon {...p} d="M12 5v14M6 13l6 6 6-6" />;
export const Flame = (p: IconProps) => (
  <Icon {...p} d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.2 1-3.6 2.2-4.8.3 1.6 1.1 2.6 2.3 3C11 9 11 6 12 3z" />
);
export const Plus = (p: IconProps) => <Icon strokeWidth={2.75} {...p} d="M12 5.5v13M5.5 12h13" />;
export const Check = (p: IconProps) => <Icon strokeWidth={2.75} {...p} d="M5 12.5l4.5 4.5L19 7.5" />;
