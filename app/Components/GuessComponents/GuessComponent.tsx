import { useEffect, useState } from "react";
import type { Item } from "~/types/index";
import GuessImageCard from "./GuessImageCard";
import GuessNameCard from "./GuessNameCard";

function hashString(value: string): number {
    let hash = 0;

    for (let index = 0; index < value.length; index += 1) {
        hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
    }

    return hash;
}

function shuffleItems(items: Item[], salt: string): Item[] {
    const shuffledItems = [...items];

    return shuffledItems.sort((firstItem, secondItem) => {
        const firstHash = hashString(`${salt}-${firstItem.id}-${firstItem.name}-${firstItem.image}`);
        const secondHash = hashString(`${salt}-${secondItem.id}-${secondItem.name}-${secondItem.image}`);

        if (firstHash === secondHash) {
            return firstItem.id - secondItem.id;
        }

        return firstHash - secondHash;
    });
}

function createGuessStates(items: Item[]) {
    return items.reduce<Record<number, "unanswered" | "correct" | "incorrect">>((states, item) => {
        states[item.id] = "unanswered";
        return states;
    }, {});
}

export default function GuessComponent({ items }: { items: Item[] }) {
    const [nameCards, setNameCards] = useState<Item[]>(() => shuffleItems(items, "names"));
    const [imageCards, setImageCards] = useState<Item[]>(() => shuffleItems(items, "images"));
    const [guessStates, setGuessStates] = useState<Record<number, "unanswered" | "correct" | "incorrect">>(() => createGuessStates(items));
    const [guessedNamesByImageId, setGuessedNamesByImageId] = useState<Record<number, Item | null>>(
        () =>
            items.reduce<Record<number, Item | null>>((states, item) => {
                states[item.id] = null;
                return states;
            }, {}),
    );
    const [usedNameIds, setUsedNameIds] = useState<number[]>([]);
    const [draggedItemId, setDraggedItemId] = useState<number | null>(null);

    useEffect(() => {
        setNameCards(shuffleItems(items, "names"));
        setImageCards(shuffleItems(items, "images"));
        setGuessStates(createGuessStates(items));
        setGuessedNamesByImageId(
            items.reduce<Record<number, Item | null>>((states, item) => {
                states[item.id] = null;
                return states;
            }, {}),
        );
        setUsedNameIds([]);
        setDraggedItemId(null);
    }, [items]);

    const handleDragStart = (item: Item) => {
        setDraggedItemId(item.id);
    };

    const handleDrop = (targetItem: Item) => {
        if (draggedItemId === null) {
            return;
        }

        const draggedItem = nameCards.find((item) => item.id === draggedItemId);

        if (!draggedItem || guessStates[targetItem.id] !== "unanswered") {
            setDraggedItemId(null);
            return;
        }

        const isCorrect = draggedItem.id === targetItem.id;

        setGuessStates((currentStates) => ({
            ...currentStates,
            [targetItem.id]: isCorrect ? "correct" : "incorrect",
        }));

        setGuessedNamesByImageId((currentGuesses) => ({
            ...currentGuesses,
            [targetItem.id]: draggedItem,
        }));

        setUsedNameIds((currentUsedIds) =>
            currentUsedIds.includes(draggedItem.id)
                ? currentUsedIds
                : [...currentUsedIds, draggedItem.id],
        );

        setDraggedItemId(null);
    };

    const correctMatches = Object.values(guessStates).filter((guessState) => guessState === "correct").length;
    const allMatched = correctMatches === items.length && items.length > 0;
    const remainingNames = nameCards.filter((item) => !usedNameIds.includes(item.id));

    return (
        <section className="w-full max-w-6xl">
            <div className="mb-8 flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-6 py-4 text-sm text-white/80">
                <p>Drag each name onto the matching image.</p>
                <p>
                    Score {correctMatches}/{items.length}
                </p>
            </div>

            <div className="mb-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {remainingNames.map((item) => (
                    <GuessNameCard
                        key={item.id}
                        item={item}
                        onDragStart={handleDragStart}
                    />
                ))}
            </div>

            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {imageCards.map((item) => (
                    <GuessImageCard
                        key={item.id}
                        item={item}
                        guessState={guessStates[item.id]}
                        guessedItem={guessedNamesByImageId[item.id]}
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