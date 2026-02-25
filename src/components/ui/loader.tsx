import { cn } from "@/lib/utils/cn";

export function Loader({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-col items-center justify-center gap-6 min-h-[60vh]", className)}
      role="status"
      aria-label="Loading"
    >
      <span
        className="block w-10 h-10 rounded-full animate-spin"
        style={{
          border: "3px solid rgba(4,188,172,0.2)",
          borderTopColor: "#04bcac",
        }}
        aria-hidden="true"
      />
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
