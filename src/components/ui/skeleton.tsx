import { cn } from "@/lib/utils/cn";

function SkeletonBlock({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn("animate-skeleton-shimmer rounded-sm", className)}
      style={{
        background: dark
          ? "linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.05) 75%)"
          : "linear-gradient(90deg, var(--color-sand-warm) 25%, var(--color-border) 50%, var(--color-sand-warm) 75%)",
        backgroundSize: "400% 100%",
      }}
    />
  );
}

export function PageSkeleton({
  variant = "subpage",
}: {
  variant?: "home" | "subpage";
}) {
  const isHome = variant === "home";

  return (
    <div aria-hidden="true">
      {/* ── Hero ── */}
      <div
        className={cn(
          "bg-dark relative overflow-hidden",
          isHome ? "h-[85vh]" : "h-[50vh]",
        )}
      >
        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Eyebrow badge */}
          <SkeletonBlock
            dark
            className="h-4 w-24 rounded-pill mb-6"
          />
          {/* Heading */}
          <SkeletonBlock
            dark
            className={cn("mb-3", isHome ? "h-12 w-3/4" : "h-9 w-2/3")}
          />
          {/* Subtext */}
          <SkeletonBlock dark className="h-4 w-1/2 mb-8" />
          {/* Button(s) */}
          <div className="flex gap-3">
            <SkeletonBlock dark className="h-12 w-36 rounded-pill" />
            {isHome && (
              <SkeletonBlock dark className="h-12 w-36 rounded-pill" />
            )}
          </div>
        </div>
      </div>

      {/* ── Section A — card grid ── */}
      <div className="py-12 md:py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <SkeletonBlock className="h-3 w-24 rounded-pill mx-auto mb-3" />
            <SkeletonBlock className="h-8 w-64 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-md overflow-hidden border border-border"
              >
                <SkeletonBlock className="h-48 w-full rounded-none" />
                <div className="p-5 space-y-2">
                  <SkeletonBlock className="h-5 w-3/4" />
                  <SkeletonBlock className="h-4 w-full" />
                  <SkeletonBlock className="h-4 w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section B — two-col split ── */}
      <div className="py-12 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <SkeletonBlock className="h-[300px] lg:h-[400px] rounded-md" />
            {/* Text */}
            <div className="space-y-3">
              <SkeletonBlock className="h-3 w-20 rounded-pill" />
              <SkeletonBlock className="h-8 w-3/4" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-2/3" />
              <SkeletonBlock className="h-12 w-36 rounded-pill mt-4" />
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="py-12 md:py-20 bg-dark-soft">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <SkeletonBlock dark className="h-8 w-64 mb-3" />
          <SkeletonBlock dark className="h-4 w-72" />
          <div className="flex gap-3 mt-8">
            <SkeletonBlock dark className="h-12 w-36 rounded-pill" />
            <SkeletonBlock dark className="h-12 w-36 rounded-pill" />
          </div>
        </div>
      </div>
    </div>
  );
}
