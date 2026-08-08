import type { Item } from "~/types/index";

type GuessNameCardProps = {
    item: Item;
    onDragStart: (item: Item) => void;
    onDragEnd: () => void;
    onSelect: (item: Item) => void;
    isSelected: boolean;
};

export default function GuessNameCard({ item, onDragStart, onDragEnd, onSelect, isSelected }: GuessNameCardProps) {

    return (
        <button className={`h-auto cursor-event-auto cursor-grab p-2 md:p-4 text-md md:text-lg text-white bg-[url(/images/styling/button.png)] bg-no-repeat bg-size-[100%_100%] bg-center transition-shadow duration-300 hover:shadow-button hover:inset-ring-2 hover:inset-ring-lightbeige ${isSelected ? "ring ring-white shadow-button" : ""}`}
            draggable
            onDragStart={() => onDragStart(item)}
            onDragEnd={onDragEnd}
            onClick={() => onSelect(item)}
            >{item.name}
        </button>
    );
}