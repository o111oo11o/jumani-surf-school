import { cn } from "@/lib/utils/cn";

const BARS = [
  { color: "#04bcac", delay: "0ms"   },
  { color: "#42cca3", delay: "100ms" },
  { color: "#6eda96", delay: "200ms" },
  { color: "#c8f17a", delay: "300ms" },
  { color: "#f9f871", delay: "400ms" },
] as const;

export function Loader({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-col items-center justify-center gap-8 min-h-[60vh]", className)}
      role="status"
      aria-label="Loading"
    >
      <div className="flex items-end gap-1.5" aria-hidden="true">
        {BARS.map(({ color, delay }, i) => (
          <span
            key={i}
            className="block w-1.5 h-10 rounded-pill animate-wave-bounce"
            style={{ backgroundColor: color, animationDelay: delay }}
          />
        ))}
      </div>
      <span
        className="font-display text-sm font-bold tracking-widest uppercase"
        style={{ color: "#04bcac", opacity: 0.6 }}
        aria-hidden="true"
      >
        Jumani
      </span>
    </div>
  );
}
