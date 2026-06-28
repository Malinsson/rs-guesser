import type { Route } from "./+types/home";
import HomeContent from "~/HomeContent/HomeContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RS-Guesser" },
    { name: "description", content: "Welcome to RS-Guesser!" },
  ];
}

export default function Home() {
  return <HomeContent />;
}
