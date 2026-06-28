import type { Item } from "~/types/index";

export const guessOptions: { [key: string]: Item[] } = {
  herbs: [
    { id: 1, name: "Guam Leaf", image: "/images/herbs/Guam_leaf.webp" },
    { id: 2, name: "Marrentill", image: "/images/herbs/Marrentill.webp" },
    { id: 3, name: "Tarromin", image: "/images/herbs/Tarromin.webp" },
    { id: 4, name: "Harralander", image: "/images/herbs/Harralander.png" },
    { id: 5, name: "Ranarr", image: "/images/herbs/Ranarr_weed.webp" },
    { id: 6, name: "Toadflax", image: "/images/herbs/Toadflax.webp" },
    { id: 7, name: "Irit", image: "/images/herbs/Irit_leaf.png" },
    { id: 8, name: "Avantoe", image: "/images/herbs/Avantoe.webp" },
    { id: 9, name: "Kwuarm", image: "/images/herbs/Kwuarm.webp" },
    { id: 10, name: "Snapdragon", image: "/images/herbs/Snapdragon.webp" },
    { id: 11, name: "Cadantine", image: "/images/herbs/Cadantine.webp" },
    { id: 12, name: "Lantadyme", image: "/images/herbs/Lantadyme.webp" },
    { id: 13, name: "Dwarf Weed", image: "/images/herbs/Dwarf_weed.webp" },
    { id: 14, name: "Torstol", image: "/images/herbs/Torstol.webp" },
    { id: 15, name: "Huasca", image: "/images/herbs/Huasca.webp" },
],
seeds:  [
    { id: 1, name: "Guam", image: "/images/seeds/Guam_seed_5.webp" },
    { id: 2, name: "Marrentill", image: "/images/seeds/Marrentill_seed_5.png" },
    { id: 3, name: "Tarromin", image: "/images/seeds/Tarromin_seed_5.png" },
    { id: 4, name: "Harralander", image: "/images/seeds/Harralander_seed_5.png" },
    { id: 5, name: "Ranarr", image: "/images/seeds/Ranarr_seed_5.png" },
    { id: 6, name: "Toadflax", image: "/images/seeds/Toadflax_seed_5.png" },
    { id: 7, name: "Irit", image: "/images/seeds/Irit_seed_5.png" },
    { id: 8, name: "Avantoe", image: "/images/seeds/Avantoe_seed_5.png" },
    { id: 9, name: "Kwuarm", image: "/images/seeds/Kwuarm_seed_5.png" },
    { id: 10, name: "Snapdragon", image: "/images/seeds/Snapdragon_seed_5.png" },
    { id: 11, name: "Cadantine", image: "/images/seeds/Cadantine_seed_5.png" },
    { id: 12, name: "Lantadyme", image: "/images/seeds/Lantadyme_seed_5.png" },
    { id: 13, name: "Dwarf Weed", image: "/images/seeds/Dwarf_weed_seed_5.png" },
    { id: 14, name: "Torstol", image: "/images/seeds/Torstol_seed_5.png" },
    { id: 15, name: "Huasca", image: "/images/seeds/Huasca_seed_5.webp" },
]
};

export function getGuessOptions(type: string): Item[] {
  return guessOptions[type] || [];
};
