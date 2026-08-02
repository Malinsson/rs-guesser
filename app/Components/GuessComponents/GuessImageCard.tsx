import type { Item, GuessState } from "~/types/index";
import { checkGuessState } from "~/lib/helperFunctions";

type GuessImageCardProps = {
    item: Pick<Item, "id" | "image">;
    guessState: GuessState;
    guessedItem: Item | null;
    isDraggedOver: boolean;
    onDrop: (item: Pick<Item, "id" | "image">) => void;
    onDragOverImage: (item: Pick<Item, "id" | "image">) => void;
    onDragLeaveImage: (item: Pick<Item, "id" | "image">) => void;
    onSelect: (item: Pick<Item, "id" | "image">) => void;
};

export default function GuessImageCard({
    item,
    guessState,
    guessedItem,
    isDraggedOver,
    onDrop,
    onDragOverImage,
    onDragLeaveImage,
    onSelect,
}: GuessImageCardProps) {
    return (
        <div
            className={`flex min-h-40 flex-col items-center justify-center gap-2 rounded-lg border p-4 shadow-md transition-all duration-300 ${checkGuessState(guessState)} ${isDraggedOver ? "scale-[1.02] ring-2 ring-white/80 ring-offset-4 ring-offset-gray-900" : "border-white/10"}`}
            onDragOver={(event) => {
                event.preventDefault();
                onDragOverImage(item);
            }}
            onDragLeave={() => onDragLeaveImage(item)}
            onDrop={(event) => {
                event.preventDefault();
                onDrop(item);
            }}
            onClick={() => onSelect(item)}
        >
            <img
                src={item.image.src ?? `/image/${item.image.id}`}
                className="h-18 z-20 w-auto rounded-lg object-contain select-none pointer-events-none"
            />
            <div className="mt-4 h-9 flex w-full flex-col items-center align-middle rounded-md bg-gray-500 p-1 text-center">
                <p className="text-lg align-text-center text-center text-white">{guessedItem ? guessedItem.name : ""}</p>
            </div>
        </div>
    );
}