import type { Item } from "~/types/index";

type GuessNameCardProps = {
    item: Item;
    onDragStart: (item: Item) => void;
};

export default function GuessNameCard({ item, onDragStart }: GuessNameCardProps) {
    return (
        <div
            className="flex cursor-grab items-center justify-center gap-2 rounded-lg bg-gray-800 p-4 shadow-md transition-colors duration-300 hover:bg-gray-700"
            draggable
            onDragStart={() => onDragStart(item)}
        >
            <p className="text-lg font-semibold text-white">{item.name}</p>
        </div>
    );
}