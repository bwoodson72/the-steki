export type MenuItem = {
  name: string;
  description: string;
  priceEUR: number;
};

export type MenuCategory = {
  slug: "coffee" | "sweets";
  label: string;
  sectionImage: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    slug: "coffee",
    label: "Coffee",
    sectionImage: "/images/menu/coffee.jpg",
    items: [
      {
        name: "Single-Origin Espresso",
        description:
          "Rotating single-origin bean pulled as a 30 ml espresso. Ask your barista about today's origin.",
        priceEUR: 2.5,
      },
      {
        name: "Filter Brew",
        description:
          "V60 or Chemex — brewed to order with a light-roast bean chosen for its clarity and sweetness.",
        priceEUR: 3.5,
      },
    ],
  },
  {
    slug: "sweets",
    label: "Sweets",
    sectionImage: "/images/menu/sweets.jpg",
    items: [
      {
        name: "Loukoumades",
        description:
          "Traditional Greek honey doughnuts dusted with cinnamon and crushed walnuts.",
        priceEUR: 4.0,
      },
      {
        name: "Bougatsa Slice",
        description:
          "Flaky filo pastry filled with warm semolina custard, finished with powdered sugar.",
        priceEUR: 3.5,
      },
    ],
  },
];
