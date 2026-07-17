import type { Item, GuessState } from "~/types/index";
import { checkGuessState } from "~/lib/helperFunctions";

type GuessImageCardProps = {
    item: Item;
    guessState: GuessState;
    guessedItem: Item | null;
    onDrop: (item: Item) => void;
};

export default function GuessImageCard({ item, guessState, guessedItem, onDrop }: GuessImageCardProps) {
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
            <div className="mt-4 mb-2 h-9 flex w-full flex-col items-center rounded-md bg-gray-500 p-2 text-center">
                <p className=" text-white">{guessedItem ? guessedItem.name : ""}</p>
            </div>
        </div>
    );
}