import type { GuessRoutes, Item } from "~/types/index";

export const guessOptions: Record<GuessRoutes, Item[]> = {
  herbs: [
  { id: 1, name: "Guam Leaf", image: { id: "herb-01" } },
  { id: 2, name: "Marrentill", image: { id: "herb-02" } },
  { id: 3, name: "Tarromin", image: { id: "herb-03" } },
  { id: 4, name: "Harralander", image: { id: "herb-04" } },
  { id: 5, name: "Ranarr", image: { id: "herb-05" } },
  { id: 6, name: "Toadflax", image: { id: "herb-06" } },
  { id: 7, name: "Irit", image: { id: "herb-07" } },
  { id: 8, name: "Avantoe", image: { id: "herb-08" } },
  { id: 9, name: "Kwuarm", image: { id: "herb-09" } },
  { id: 10, name: "Snapdragon", image: { id: "herb-10" } },
  { id: 11, name: "Cadantine", image: { id: "herb-11" } },
  { id: 12, name: "Lantadyme", image: { id: "herb-12" } },
  { id: 13, name: "Dwarf Weed", image: { id: "herb-13" } },
  { id: 14, name: "Torstol", image: { id: "herb-14" } },
  { id: 15, name: "Huasca", image: { id: "herb-15" } },
],
seeds:  [
  { id: 1, name: "Guam", image: { id: "seed-01" } },
  { id: 2, name: "Marrentill", image: { id: "seed-02" } },
  { id: 3, name: "Tarromin", image: { id: "seed-03" } },
  { id: 4, name: "Harralander", image: { id: "seed-04" } },
  { id: 5, name: "Ranarr", image: { id: "seed-05" } },
  { id: 6, name: "Toadflax", image: { id: "seed-06" } },
  { id: 7, name: "Irit", image: { id: "seed-07" } },
  { id: 8, name: "Avantoe", image: { id: "seed-08" } },
  { id: 9, name: "Kwuarm", image: { id: "seed-09" } },
  { id: 10, name: "Snapdragon", image: { id: "seed-10" } },
  { id: 11, name: "Cadantine", image: { id: "seed-11" } },
  { id: 12, name: "Lantadyme", image: { id: "seed-12" } },
  { id: 13, name: "Dwarf Weed", image: { id: "seed-13" } },
  { id: 14, name: "Torstol", image: { id: "seed-14" } },
  { id: 15, name: "Huasca", image: { id: "seed-15" } },
],
};

export function getGuessOptions(type: GuessRoutes | undefined): Item[] {
  if (!type) {
    return [];
  }

  return guessOptions[type] || [];
}
