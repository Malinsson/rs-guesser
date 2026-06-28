import { Link } from "react-router";
import type { Route } from "./+types/home";
import HomeContent from "~/HomeContent/HomeContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RS-Guesser" },
    { name: "description", content: "Welcome to RS-Guesser!" },
  ];
}

export default function Home() {
  return( 
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <HomeContent />
      <Link to="/guess/herbs" className="mt-8 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Guess the Herbs
      </Link>
      <Link to="/guess/seeds" className="mt-4 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
        Guess the Seeds
      </Link>
    </main>
  );
}
