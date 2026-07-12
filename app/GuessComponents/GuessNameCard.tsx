import type { Item } from "~/types/index";

export default function GuessNameCard({ item }: { item: Item }) {
    return (
        <div className="flex items-center justify-center gap-2 rounded-lg bg-gray-800 p-4 shadow-md cursor-pointer hover:bg-gray-700 transition-colors duration-300">
            <p className="text-lg font-semibold text-white">{item.name}</p>
        </div>
    );
}