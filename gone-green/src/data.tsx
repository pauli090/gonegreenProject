type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Pineapple",
    desc: "Try this tasty breakfast smoothie to start your day, pairing sweet fruit with nutritious spinach and avocado for a dose of calcium, vitamin C, folate and fibre",
    img: "/p1.jpg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Tigernuts Milk",
    desc: "Try this tasty breakfast smoothie to start your day, pairing sweet fruit with nutritious spinach and avocado for a dose of calcium, vitamin C, folate and fibre",
    img: "/p1.jpg",
    price: 2500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Orange ginger/carrot",
    desc: "Try this tasty breakfast smoothie to start your day, pairing sweet fruit with nutritious spinach and avocado for a dose of calcium, vitamin C, folate and fibre",
    img: "/p1.jpg",
    price: 2200,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "juice",
    title: "Pine Apple Juice",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/m1.png",
    color: "green",
  },
  {
    id: 2,
    slug: "yoghurt",
    title: "Greek Yoghurt",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "white",
  },
  {
    id: 3,
    slug: "salads",
    title: "Gone Green Salads",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/temporary/m3.png",
    color: "green",
  },
];
