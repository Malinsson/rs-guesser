import type { Route } from "./+types/home";
import HomeContent from "~/HomeContent/HomeContent";
import LinkButton from "~/Components/shared/LinkButton";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RS-Guesser" },
    { name: "description", content: "Welcome to RS-Guesser!" },
  ];
}

export default function Home() {
  return( 
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HomeContent />
      <LinkButton href="/guess/herbs" buttonText="Guess the Herbs" />
      <LinkButton href="/guess/seeds" buttonText="Guess the Seeds" />
    </main>
  );
}
