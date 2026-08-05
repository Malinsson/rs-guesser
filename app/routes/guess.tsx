import type { Route } from "./+types/guess";
import type { GuessRoutes } from "~/types/index";
import GuessComponent from "~/Components/GuessComponents/GuessComponent";
import { getGuessOptions } from "~/data/data";
import { getImageDataUrl } from "~/lib/imageManifest.server";

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
    imageOptions: await Promise.all(
      shuffleItems(options).map(async ({ id, image }) => ({
        id,
        image: {
          id: image.id,
          src: (await getImageDataUrl(image.id)) ?? undefined,
        },
      })),
    ),
  };
}

export default function Guess({ loaderData }: Route.ComponentProps) {
  const { nameOptions, imageOptions } = loaderData;

  return (
    <main className="flex min-h-screen flex-col p-8 gap-8 items-center justify-center bg-lightbeige dark:bg-darkbeige md:mx-16">
      <div className="w-full">
        <img src="/images/styling/backdrop_765_top.gif" alt="Background banner top" className="w-full h-auto" />
        <GuessComponent nameItems={nameOptions} imageItems={imageOptions} />
        <img src="/images/styling/backdrop_765_bottom.gif" alt="Background banner bottom" className="w-full h-auto" />
      </div>
    </main>
  );
}