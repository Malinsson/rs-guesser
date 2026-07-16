import { useEffect, useState } from "react";
import type { Item } from "~/types/index";
import GuessImageCard from "./GuessImageCard";
import GuessNameCard from "./GuessNameCard";

function shuffleItems(items: Item[]): Item[] {
    const shuffledItems = [...items];

    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [shuffledItems[index], shuffledItems[swapIndex]] = [shuffledItems[swapIndex], shuffledItems[index]];
    }

    return shuffledItems;
}

function createGuessStates(items: Item[]) {
    return items.reduce<Record<number, "unanswered" | "correct" | "incorrect">>((states, item) => {
        states[item.id] = "unanswered";
        return states;
    }, {});
}

export default function GuessComponent({ items }: { items: Item[] }) {
    const [nameCards, setNameCards] = useState<Item[]>(() => shuffleItems(items));
    const [imageCards, setImageCards] = useState<Item[]>(() => shuffleItems(items));
    const [guessStates, setGuessStates] = useState<Record<number, "unanswered" | "correct" | "incorrect">>(() => createGuessStates(items));
    const [draggedItemId, setDraggedItemId] = useState<number | null>(null);

    useEffect(() => {
        setNameCards(shuffleItems(items));
        setImageCards(shuffleItems(items));
        setGuessStates(createGuessStates(items));
        setDraggedItemId(null);
    }, [items]);

    const handleDragStart = (item: Item) => {
        setDraggedItemId(item.id);
    };

    const handleDrop = (targetItem: Item) => {
        if (draggedItemId === null) {
            return;
        }

        const isCorrect = draggedItemId === targetItem.id;

        setGuessStates((currentStates) => ({
            ...currentStates,
            [targetItem.id]: isCorrect ? "correct" : "incorrect",
        }));

        setDraggedItemId(null);
    };

    const correctMatches = Object.values(guessStates).filter((guessState) => guessState === "correct").length;
    const allMatched = correctMatches === items.length && items.length > 0;

    return (
        <section className="w-full max-w-6xl">
            <div className="mb-8 flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-6 py-4 text-sm text-white/80">
                <p>Drag each name onto the matching image.</p>
                <p>
                    Score {correctMatches}/{items.length}
                </p>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {nameCards.map((item) => (
                    <GuessNameCard
                        key={item.id}
                        item={item}
                        isMatched={guessStates[item.id] === "correct"}
                        onDragStart={handleDragStart}
                    />
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {imageCards.map((item) => (
                    <GuessImageCard
                        key={item.id}
                        item={item}
                        guessState={guessStates[item.id]}
                        onDrop={handleDrop}
                    />
                ))}
            </div>

            {allMatched && (
                <p className="mt-8 rounded-2xl bg-green-500/20 px-6 py-4 text-center text-lg font-semibold text-green-200">
                    You matched everything.
                </p>
            )}
        </section>
    );
}