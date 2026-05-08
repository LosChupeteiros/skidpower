import { cn } from "@/lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  asChild?: boolean;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...rest
}: Props) {
  const sizes = {
    md: "h-11 px-5 text-sm",
    lg: "h-13 px-7 text-base",
  };

  const variants = {
    primary:
      "bg-brand-yellow text-ink-900 hover:bg-[#ffd34d] active:translate-y-px shadow-[0_4px_20px_rgba(255,199,44,0.25)] hover:shadow-[0_6px_28px_rgba(255,199,44,0.35)]",
    outline:
      "border border-paper/25 text-paper hover:border-paper/60 hover:bg-paper/5 active:translate-y-px",
    ghost:
      "text-paper/80 hover:text-paper hover:bg-paper/5",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
        "transition-all duration-200 ease-out",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow",
        "tracking-tight",
        sizes[size],
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
