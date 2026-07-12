import type { Item } from "~/types/index";
import GuessImageCard from "./GuessImageCard";
import GuessNameCard from "./GuessNameCard";

export default function GuessComponent({ item }: { item: Item[] }) {
    return (
    <section>
        <div className="grid grid-cols-5 gap-4 mb-8">
            {item.map((item) => (
                <GuessNameCard key={item.id} item={item} />
            ))}
        </div>

        <div className="grid grid-cols-5 gap-4">
            {item.map((item) => (
                <GuessImageCard key={item.id} item={item} guessState="unanswered" />
            ))}
        </div>
    </section>

    );
}