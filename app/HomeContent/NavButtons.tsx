import LinkButton from "~/Components/shared/LinkButton";
import { guessOptions } from "~/data/data";
import type { GuessRoutes } from "~/types";

export default function NavButtons() {
  return (
    <div className="flex items-center justify-center gap-4">
      {Object.entries(guessOptions).map(([route]) => {
        const typedRoute = route as GuessRoutes;

        return (
           <LinkButton 
           key={typedRoute} 
           href={`/guess/${typedRoute}`} 
           buttonText={`Guess the ${typedRoute}`} 
           />
        );
      })}
    </div>
  );
}