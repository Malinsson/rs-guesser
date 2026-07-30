import type { Route } from "./+types/guess";
import GuessComponent from "~/Components/GuessComponents/GuessComponent";
import { getGuessOptions } from "~/data/data";
import type { GuessRoutes } from "~/types/index";

function shuffleItems<T>(items: T[]): T[] {
  const shuffledItems = [...items];

  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffledItems[index], shuffledItems[swapIndex]] = [shuffledItems[swapIndex], shuffledItems[index]];
  }

  return shuffledItems;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Guess the objects" },
    { name: "description", content: "Try to guess the items!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const options = getGuessOptions(params.type as GuessRoutes | undefined);

  if (!options.length) {
    throw new Response("Guess option not found", { status: 404 });
  }

  return {
    nameOptions: shuffleItems(options),
    imageOptions: shuffleItems(options).map(({ id, image }) => ({ id, image })),
  };
}

export default function Guess({ loaderData }: Route.ComponentProps) {
  const { nameOptions, imageOptions } = loaderData;

  return (
    <main className="flex min-h-screen flex-col p-8 gap-8 items-center justify-center bg-gray-900 text-white">
      <GuessComponent nameItems={nameOptions} imageItems={imageOptions} />
    </main>
  );
}