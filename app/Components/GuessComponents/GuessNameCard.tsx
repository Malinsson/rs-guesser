import type { Item } from "~/types/index";

type GuessNameCardProps = {
    item: Item;
    isMatched: boolean;
    onDragStart: (item: Item) => void;
};

export default function GuessNameCard({ item, isMatched, onDragStart }: GuessNameCardProps) {
    return (
        <div
            className={`flex items-center justify-center gap-2 rounded-lg p-4 shadow-md transition-colors duration-300 ${isMatched ? "cursor-not-allowed bg-green-600/50 opacity-60" : "cursor-grab bg-gray-800 hover:bg-gray-700"}`}
            draggable={!isMatched}
            onDragStart={() => onDragStart(item)}
        >
            <p className="text-lg font-semibold text-white">{item.name}</p>
        </div>
    );
}