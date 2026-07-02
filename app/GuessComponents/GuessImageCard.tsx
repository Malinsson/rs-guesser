import type { Item } from "~/types/index";

export default function GuessImageCard({ item }: { item: Item }) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-800 p-4 shadow-md">
            <img
                src={item.image}
                alt={item.name}
                className="h-18 w-auto rounded-lg object-contain"
            />
        </div>
    );
}