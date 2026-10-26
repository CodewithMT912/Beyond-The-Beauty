import { policiesFaqData } from "@/data/policies-faqs";

export const brandLogo = "/logo.png";

export type Product = {
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  imageAlt: string;
  discount?: string;
  badge?: string;
};

export const categories = [
  {
    name: "Skincare",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=720&q=85",
  },
  {
    name: "Makeup",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=720&q=85",
  },
  {
    name: "Hair Care",
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=720&q=85",
  },
  {
    name: "Body Care",
    image:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=720&q=85",
  },
  {
    name: "Fragrances",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=720&q=85",
  },
  {
    name: "Nails",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=720&q=85",
  },
];

export const bestSellers: Product[] = [
  {
    name: "Vitamin C Glow Serum",
    brand: "The Ordinary",
    price: 3200,
    oldPrice: 4000,
    rating: 4.8,
    discount: "20%",
    image:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=720&q=85",
    imageAlt: "Amber glass skincare serum bottle",
  },
  {
    name: "Matte Finish Foundation",
    brand: "Maybelline",
    price: 2000,
    oldPrice: 2500,
    rating: 4.7,
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=720&q=85",
    imageAlt: "Matte liquid foundation",
  },
  {
    name: "Hydrating Face Cream",
    brand: "CeraVe",
    price: 2500,
    oldPrice: 3000,
    rating: 4.9,
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=720&q=85",
    imageAlt: "Hydrating face cream jar",
  },
  {
    name: "Luxury Lipstick",
    brand: "MAC",
    price: 2200,
    oldPrice: 2500,
    rating: 4.8,
    discount: "10%",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=720&q=85",
    imageAlt: "Classic red lipstick",
  },
];

export const newArrivals: Product[] = [
  {
    name: "Glow Toner",
    brand: "The Ordinary",
    price: 2000,
    rating: 4.8,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=720&q=85",
    imageAlt: "Gentle glow facial toner",
  },
  {
    name: "Eyeshadow Palette",
    brand: "Maybelline",
    price: 4500,
    rating: 4.9,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=720&q=85",
    imageAlt: "Neutral eyeshadow palette",
  },
  {
    name: "Hair Repair Mask",
    brand: "L'Oréal Paris",
    price: 3900,
    rating: 4.7,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=720&q=85",
    imageAlt: "Nourishing hair repair treatment",
  },
  {
    name: "Nourishing Body Lotion",
    brand: "CeraVe",
    price: 2200,
    rating: 4.8,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=720&q=85",
    imageAlt: "Soft body lotion bottle",
  },
];

export const brands = [
  "L'Oréal Paris",
  "Maybelline",
  "CeraVe",
  "The Ordinary",
  "MAC",
];

export const faqs = policiesFaqData.faqs.questions;

export const navigation = [
  "Home",
  "Shop",
  "Brands",
  "Categories",
  "Offers",
  "About Us",
  "Contact",
  "Policies & FAQs",
];
