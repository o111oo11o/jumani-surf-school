import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { BoardType } from "@/types";

type BoardCardProps = {
  board: BoardType;
};

export function BoardCard({ board }: BoardCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={board.image}
          alt={board.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-lg font-bold text-dark">
            {board.name}
          </h3>
          <span className="text-xs font-bold text-teal-deep bg-teal-deep/10 px-2 py-1 rounded-pill">
            {board.bestFor}
          </span>
        </div>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          {board.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-bold text-dark">
            {board.price}
          </span>
          <Button
            href={board.ctaHref}
            variant="primary"
            className="text-xs px-4 py-2 min-h-[40px]"
          >
            {board.ctaLabel}
          </Button>
        </div>
      </div>
    </Card>
  );
}
