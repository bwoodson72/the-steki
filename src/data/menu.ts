export type MenuItem = {
  name: string;
  description: string;
  priceEUR: number;
};

export type CategorySlug =
  | "espresso"
  | "filter"
  | "freddo"
  | "tea"
  | "sweets"
  | "savory"
  | "breakfast"
  | "cold-drinks";

export type MenuCategory = {
  slug: CategorySlug;
  label: string;
  sectionImage: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    slug: "espresso",
    label: "Espresso",
    sectionImage: "/images/menu/espresso.jpg",
    items: [
      {
        name: "Espresso",
        description:
          "Double shot of our rotating single-origin, pulled short and served in a warmed demitasse.",
        priceEUR: 2.0,
      },
      {
        name: "Americano",
        description:
          "Double espresso lengthened with hot water. Clean and straightforward.",
        priceEUR: 2.5,
      },
      {
        name: "Cappuccino",
        description:
          "Equal parts espresso, steamed milk, and dense foam — a classic ratio.",
        priceEUR: 3.0,
      },
      {
        name: "Flat White",
        description:
          "Double ristretto with silky steamed whole milk and a thin microfoam finish.",
        priceEUR: 3.5,
      },
    ],
  },
  {
    slug: "filter",
    label: "Filter Coffee",
    sectionImage: "/images/menu/filter.jpg",
    items: [
      {
        name: "Greek Coffee",
        description:
          "Finely ground coffee simmered in a briki and poured unfiltered. Choose sketo (unsweetened), metrio (medium), or glykos (sweet).",
        priceEUR: 2.0,
      },
      {
        name: "V60 Pour-Over",
        description:
          "Single-origin light roast brewed to order. Ask your barista about the day's origin and tasting notes.",
        priceEUR: 3.5,
      },
      {
        name: "Batch Brew",
        description:
          "Daily rotating filter served by the cup — a reliable, no-fuss choice.",
        priceEUR: 2.5,
      },
      {
        name: "Cold Brew",
        description:
          "Coarse-ground coffee steeped cold for 18 hours. Smooth, low-acid, served over ice.",
        priceEUR: 3.5,
      },
    ],
  },
  {
    slug: "freddo",
    label: "Freddo & Frappe",
    sectionImage: "/images/menu/freddo.jpg",
    items: [
      {
        name: "Freddo Espresso",
        description:
          "Double espresso shaken vigorously with ice until a thick, creamy foam forms on top.",
        priceEUR: 3.0,
      },
      {
        name: "Freddo Cappuccino",
        description:
          "Freddo espresso topped with cold-frothed whole milk. The quintessential Greek summer coffee.",
        priceEUR: 3.8,
      },
      {
        name: "Frappe",
        description:
          "The original Greek iced coffee — instant Nescafé shaken with water and ice, served with or without evaporated milk.",
        priceEUR: 2.5,
      },
    ],
  },
  {
    slug: "tea",
    label: "Tea & Infusions",
    sectionImage: "/images/menu/tea.jpg",
    items: [
      {
        name: "Greek Mountain Tea",
        description:
          "Dried Sideritis flowers steeped in hot water. Light, floral, and naturally caffeine-free — a staple of the Greek highlands.",
        priceEUR: 2.5,
      },
      {
        name: "Chamomile",
        description:
          "Whole dried chamomile blossoms from Crete, soothing and gently fragrant.",
        priceEUR: 2.5,
      },
      {
        name: "Spearmint",
        description:
          "Fresh-dried spearmint (dyosmos), a traditional Greek digestif served after meals.",
        priceEUR: 2.5,
      },
      {
        name: "Linden Blossom",
        description:
          "Dried linden (tilio) flowers, gentle and honey-scented. A classic before-bed infusion.",
        priceEUR: 2.5,
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
          "Traditional honey doughnuts fried to order, dusted with cinnamon and crushed walnuts.",
        priceEUR: 4.0,
      },
      {
        name: "Bougatsa",
        description:
          "Flaky filo pastry filled with warm semolina custard, finished with powdered sugar and cinnamon.",
        priceEUR: 4.2,
      },
      {
        name: "Melomakarona",
        description:
          "Spiced olive oil and walnut cookies soaked in honey syrup — a recipe unchanged for generations.",
        priceEUR: 1.8,
      },
      {
        name: "Galaktoboureko",
        description:
          "Crisp filo encasing a thick semolina custard, soaked in a light citrus-scented syrup.",
        priceEUR: 4.5,
      },
    ],
  },
  {
    slug: "savory",
    label: "Savory",
    sectionImage: "/images/menu/savory.jpg",
    items: [
      {
        name: "Spanakopita",
        description:
          "Spinach and feta wrapped in layers of crisp filo, baked fresh throughout the day.",
        priceEUR: 3.9,
      },
      {
        name: "Tyropita",
        description:
          "Golden filo filled with a blend of feta and mizithra cheese. Simple and perfect.",
        priceEUR: 3.0,
      },
      {
        name: "Koulouri Thessalonikis",
        description:
          "Sesame-encrusted bread ring from Thessaloniki, served warm. A proper street-food staple.",
        priceEUR: 1.5,
      },
      {
        name: "Dakos",
        description:
          "Barley rusk topped with crushed ripe tomato, crumbled feta, Kalamata olives, and extra-virgin olive oil.",
        priceEUR: 4.5,
      },
    ],
  },
  {
    slug: "breakfast",
    label: "Breakfast",
    sectionImage: "/images/menu/breakfast.jpg",
    items: [
      {
        name: "Greek Yoghurt Bowl",
        description:
          "Thick strained yoghurt with thyme honey, crushed walnuts, and fresh seasonal fruit.",
        priceEUR: 5.0,
      },
      {
        name: "Fried Eggs with Feta",
        description:
          "Two eggs fried in olive oil, topped with crumbled feta, dried oregano, and a grind of black pepper.",
        priceEUR: 5.5,
      },
      {
        name: "Village Toast",
        description:
          "Thick-cut sourdough, toasted and drizzled with extra-virgin olive oil and flaky sea salt.",
        priceEUR: 2.5,
      },
      {
        name: "Tahinopita",
        description:
          "Soft sesame-tahini swirl bread, lightly warmed and served with a drizzle of thyme honey.",
        priceEUR: 3.0,
      },
    ],
  },
  {
    slug: "cold-drinks",
    label: "Cold Drinks",
    sectionImage: "/images/menu/cold-drinks.jpg",
    items: [
      {
        name: "Fresh Lemonade",
        description:
          "Freshly squeezed lemons, cold still water, and a touch of thyme honey. Served over ice.",
        priceEUR: 3.0,
      },
      {
        name: "Fresh Orange Juice",
        description: "Freshly pressed seasonal oranges. No sugar, no water — just the fruit.",
        priceEUR: 3.5,
      },
      {
        name: "Loutraki Sparkling",
        description: "500 ml Loutraki sparkling mineral water.",
        priceEUR: 1.5,
      },
      {
        name: "Zagori Still",
        description: "500 ml Zagori natural mineral water from the Epirus mountains.",
        priceEUR: 1.0,
      },
    ],
  },
];
