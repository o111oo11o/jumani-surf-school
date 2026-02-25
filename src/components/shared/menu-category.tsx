import type { MenuCategory as MenuCategoryType } from "@/types";

type MenuCategoryProps = {
  category: MenuCategoryType;
};

export function MenuCategorySection({ category }: MenuCategoryProps) {
  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-dark mb-6">
        {category.heading}
      </h3>
      <div className="space-y-4">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="flex items-baseline justify-between gap-4 py-2 border-b border-border last:border-0"
          >
            <div>
              <span className="font-semibold text-dark">{item.name}</span>
              <p className="text-sm text-text-muted mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
