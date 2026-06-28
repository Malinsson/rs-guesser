import type { Item } from "~/types/index";
import GuessItem from "./GuessItem";

export default function GuessComponent({ item }: { item: Item[] }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {item.map((item) => (
                <GuessItem key={item.id} item={item} />
            ))}
        </div>
    );
}