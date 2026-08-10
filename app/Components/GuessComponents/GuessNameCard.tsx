import { forwardRef, type ForwardedRef } from "react";
import type { Item } from "~/types/index";

type GuessNameCardProps = {
    item: Item;
    onDragStart: (item: Item) => void;
    onDragEnd: () => void;
    onSelect: (item: Item) => void;
    onKeyboardSelect: (item: Item) => void;
    isSelected: boolean;
};

const GuessNameCard = forwardRef<HTMLButtonElement, GuessNameCardProps>(function GuessNameCard(
    { item, onDragStart, onDragEnd, onSelect, onKeyboardSelect, isSelected },
    ref: ForwardedRef<HTMLButtonElement>,
) {

    return (
        <button
            ref={ref}
            className={`h-auto cursor-event-auto cursor-grab p-4 md:p-6 text-md md:text-lg text-white bg-[url(/images/styling/button.png)] bg-no-repeat bg-size-[100%_100%] bg-center transition-shadow duration-300 hover:shadow-button hover:inset-ring-2 hover:inset-ring-lightbeige ${isSelected ? "ring ring-white shadow-button" : ""}`}
            draggable
            onDragStart={() => onDragStart(item)}
            onDragEnd={onDragEnd}
            onClick={() => onSelect(item)}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onKeyboardSelect(item);
                }
            }}
        >
            {item.name}
        </button>
    );
});

export default GuessNameCard;