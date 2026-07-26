import type { Item } from "~/types/index";

type GuessNameCardProps = {
    item: Item;
    onDragStart: (item: Item) => void;
    onSelect: (item: Item) => void;
    isSelected: boolean;
};

export default function GuessNameCard({ item, onDragStart, onSelect, isSelected }: GuessNameCardProps) {
    return (
        <div
            className={`flex cursor-grab items-center justify-center gap-2 rounded-lg p-2 md:p-4 shadow-md transition-colors duration-300 hover:bg-gray-700 ${isSelected ? "bg-gray-600 ring ring-white" : "bg-gray-800"}`}
            draggable
            onDragStart={() => onDragStart(item)}
            onClick={() => onSelect(item)}
        >
            <p className="text-md md:text-lg font-semibold text-white">{item.name}</p>
        </div>
    );
}