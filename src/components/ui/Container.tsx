import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
};

export function Container({ children, className, as: As = "div" }: Props) {
  return (
    <As className={cn("mx-auto w-full max-w-7xl px-6 md:px-10", className)}>
      {children}
    </As>
  );
}
