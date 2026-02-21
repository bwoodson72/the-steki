import { menuCategories, type CategorySlug, type MenuItem } from "./menu";

/** A resolved featured item — MenuItem plus which category it came from. */
export type FeaturedItem = MenuItem & {
  categorySlug: CategorySlug;
  categoryLabel: string;
};

/**
 * Pointers into menuCategories. Add or re-order entries here to change
 * what appears in the Popular Picks section — no other files need editing.
 */
const FEATURED_REFS: { categorySlug: CategorySlug; itemName: string }[] = [
  { categorySlug: "freddo", itemName: "Freddo Cappuccino" },
  { categorySlug: "savory", itemName: "Spanakopita" },
  { categorySlug: "sweets", itemName: "Bougatsa" },
];

function resolveFeatured(): FeaturedItem[] {
  return FEATURED_REFS.flatMap(({ categorySlug, itemName }) => {
    const cat = menuCategories.find((c) => c.slug === categorySlug);
    if (!cat) return [];
    const item = cat.items.find((i) => i.name === itemName);
    if (!item) return [];
    return [{ ...item, categorySlug, categoryLabel: cat.label }];
  });
}

export const featuredItems: FeaturedItem[] = resolveFeatured();
