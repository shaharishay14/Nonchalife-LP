type LogoProps = {
  className?: string;
  squareClassName?: string;
};

/** The "n" mark with the lime square. Size it with text and square classes. */
export default function Logo({ className = "", squareClassName = "" }: LogoProps) {
  return (
    <span
      className={`flex items-baseline font-display font-extrabold leading-none tracking-[-0.04em] ${className}`}
    >
      n<span aria-hidden="true" className={`block bg-lime ${squareClassName}`} />
    </span>
  );
}
