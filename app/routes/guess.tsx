import type { Route } from "./+types/guess";
import GuessComponent from "~/GuessComponents/GuessComponent";
import { getGuessOptions } from "~/data/data";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Guess the items" },
    { name: "description", content: "Try to guess the items!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const options = getGuessOptions(params.type);

  if (!options.length) {
    throw new Response("Guess option not found", { status: 404 });
  }

  return { options };
}

export default function Guess({ loaderData }: Route.ComponentProps) {
  const { options } = loaderData;

  return (
    <main>
      <GuessComponent item={options} />
    </main>
  );
}