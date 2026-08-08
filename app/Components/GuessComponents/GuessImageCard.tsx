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
            className={`h-40 flex flex-col justify-center items-center ${isDraggedOver ? "scale-[1.02] ring-2 ring-white/80 ring-offset-4 ring-offset-gray-900" : "border-white/10"}`}
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
            <div className="h-36 md:h-40 w-full px-4 md:px-6 bg-[url(/images/styling/button_large.gif)] bg-size-[100%_100%] bg-no-repeat bg-center flex flex-col items-center justify-center">
                <img
                    src={item.image.src ?? `/image/${item.image.id}`}
                    className="h-13 md:h-15 lg:h-18 z-20 w-auto rounded-lg object-contain select-none pointer-events-none"
                />
                <div className={`mt-4 h-8 w-full flex flex-col items-center align-middle rounded-md inset-shadow-sm inset-shadow-green-900 border-2 border-bordergrey transition-all duration-300 ${checkGuessState(guessState)} p-1 text-center`}>
                    <p className="text-lg align-text-center text-center text-white">{guessedItem ? guessedItem.name : ""}</p>
                </div>
            </div>
        </div>
    );
}