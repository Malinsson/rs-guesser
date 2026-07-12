import type { Item, GuessState } from "~/types/index";
import { checkGuessState } from "~/lib/helperFunctions";

export default function GuessImageCard(
    { item, guessState }: { item: Item; guessState: GuessState }
) {
    return (
        <div className={`flex flex-col items-center justify-center gap-2 rounded-lg ${checkGuessState(guessState)} p-4 shadow-md pointer-events-none`}>
            <img
                src={item.image}
                className="h-18 z-20 w-auto rounded-lg object-contain draggable-none select-none pointer-events-none"
            />
            <div>

            </div>
        </div>
    );
}