import { cn } from "@/lib/utils/cn";

type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionEyebrow({ children, className }: SectionEyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-deep",
        className
      )}
    >
      <span className="block h-0.5 w-6 bg-teal-deep" aria-hidden="true" />
      {children}
    </div>
  );
}
