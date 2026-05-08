import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] font-semibold",
          tone === "dark" ? "text-brand-blue" : "text-brand-yellow",
        )}
      >
        <span
          className={cn(
            "h-px w-6",
            tone === "dark" ? "bg-brand-blue" : "bg-brand-yellow",
          )}
        />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 font-bold tracking-tight",
          "text-3xl md:text-4xl lg:text-5xl",
          "leading-[1.05]",
          tone === "dark" ? "text-ink-900" : "text-paper",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            tone === "dark" ? "text-zinc-600" : "text-zinc-300",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
