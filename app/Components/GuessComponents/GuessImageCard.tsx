import type { Item, GuessState } from "~/types/index";
import { checkGuessState } from "~/lib/helperFunctions";

type GuessImageCardProps = {
    item: Item;
    guessState: GuessState;
    onDrop: (item: Item) => void;
};

export default function GuessImageCard({ item, guessState, onDrop }: GuessImageCardProps) {
    return (
        <div
            className={`flex min-h-40 flex-col items-center justify-center gap-2 rounded-lg border border-white/10 ${checkGuessState(guessState)} p-4 shadow-md transition-colors duration-300`}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
                event.preventDefault();
                onDrop(item);
            }}
        >
            <img
                src={item.image}
                className="h-18 z-20 w-auto rounded-lg object-contain select-none pointer-events-none"
            />
            <div className="mt-4 h-8 w-full rounded-md bg-gray-500 p-2 text-center">

            </div>
        </div>
    );
}