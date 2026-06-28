import type { Item } from "~/types/index";

export default function GuessItem({ item }: { item: Item }) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-800 p-4 shadow-md">
            <img
                src={item.image}
                alt={item.name}
                className="h-32 w-32 rounded-lg object-cover"
            />
            <p className="text-lg font-semibold text-white">{item.name}</p>
        </div>
    );
}