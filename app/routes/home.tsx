import type { Route } from "./+types/home";
import NavButtons from "~/HomeContent/NavButtons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RS-Guesser" },
    { name: "description", content: "Welcome to RS-Guesser!" },
  ];
}

export default function Home() {
  return( 
    <main className="bg-[url(/images/styling/bg2.jpg)] bg-repeat-y bg-contain p-6 md:p-16 flex min-h-screen flex-col items-center max-w-7xl mx-auto gap-8">
      <section className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl md:text-7xl">RS-Guesser</h1>
        <p className="text-lg lg:text-2xl text-center max-w-5xl">
          Having trouble seeing the diffrence between your herbs? Are all your seeds loonking the same? Then this is the app for you! Here you can practice your herb and seed recognition skills by guessing the correct herb or seed from a selection of images. Simply drag and drop the image you want to guess into the box below and start guessing!
        </p>
        <div className="flex gap-4">
          <NavButtons />
        </div>
      </section>
    </main>
  );
}
