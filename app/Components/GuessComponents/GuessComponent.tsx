import { useEffect, useRef, useState } from "react";
import type { Item } from "~/types/index";
import GuessImageCard from "./GuessImageCard";
import GuessNameCard from "./GuessNameCard";

type ImageItem = Pick<Item, "id" | "image">;

function createGuessStates(items: Item[]) {
    return items.reduce<Record<number, "unanswered" | "correct" | "incorrect">>((states, item) => {
        states[item.id] = "unanswered";
        return states;
    }, {});
}

export default function GuessComponent({
    nameItems,
    imageItems,
}: {
    nameItems: Item[];
    imageItems: ImageItem[];
}) {
    const nameCardRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const imageCardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [nameCards, setNameCards] = useState<Item[]>(() => nameItems);
    const [imageCards, setImageCards] = useState<ImageItem[]>(() => imageItems);
    const [guessStates, setGuessStates] = useState<Record<number, "unanswered" | "correct" | "incorrect">>(() => createGuessStates(nameItems));
    const [guessedNamesByImageId, setGuessedNamesByImageId] = useState<Record<number, Item | null>>(
        () =>
            nameItems.reduce<Record<number, Item | null>>((states, item) => {
                states[item.id] = null;
                return states;
            }, {}),
    );
    const [usedNameIds, setUsedNameIds] = useState<number[]>([]);
    const [draggedItemId, setDraggedItemId] = useState<number | null>(null);
    const [hoveredImageId, setHoveredImageId] = useState<number | null>(null);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    useEffect(() => {
        setNameCards(nameItems);
        setImageCards(imageItems);
        setGuessStates(createGuessStates(nameItems));
        setGuessedNamesByImageId(
            nameItems.reduce<Record<number, Item | null>>((states, item) => {
                states[item.id] = null;
                return states;
            }, {}),
        );
        setUsedNameIds([]);
        setDraggedItemId(null);
        setHoveredImageId(null);
        setSelectedItemId(null);
        nameCardRefs.current = [];
        imageCardRefs.current = [];
    }, [nameItems, imageItems]);

    const handleDragStart = (item: Item) => {
        setSelectedItemId(null);
        setDraggedItemId(item.id);
        setHoveredImageId(null);
    };

    const handleDragEnd = () => {
        setDraggedItemId(null);
        setHoveredImageId(null);
    };

    const handleAttemptGuess = (targetItem: ImageItem, sourceItemId: number | null) => {
        if (sourceItemId === null) {
            return;
        }

        const draggedItem = nameCards.find((item) => item.id === sourceItemId);

        if (!draggedItem || guessStates[targetItem.id] !== "unanswered") {
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
        setHoveredImageId(null);
        setSelectedItemId(null);
    };

    const handleDrop = (targetItem: ImageItem) => {
        handleAttemptGuess(targetItem, draggedItemId);
    };

    const handleDragOverImage = (targetItem: ImageItem) => {
        if (draggedItemId !== null) {
            setHoveredImageId(targetItem.id);
        }
    };

    const handleDragLeaveImage = (targetItem: ImageItem) => {
        if (hoveredImageId === targetItem.id) {
            setHoveredImageId(null);
        }
    };

    const handleNameSelect = (item: Item) => {
        if (selectedItemId === item.id) {
            setSelectedItemId(null);
            return;
        }

        setSelectedItemId(item.id);
    };

    const focusFirstImageCard = () => {
        imageCardRefs.current[0]?.focus();
    };

    const focusFirstRemainingNameCard = () => {
        nameCardRefs.current[0]?.focus();
    };

    const handleNameSelectFromKeyboard = (item: Item) => {
        handleNameSelect(item);
        requestAnimationFrame(() => {
            focusFirstImageCard();
        });
    };

    const handleImageSelect = (targetItem: ImageItem) => {
        handleAttemptGuess(targetItem, selectedItemId);
        requestAnimationFrame(() => {
            focusFirstRemainingNameCard();
        });
    };

    const correctMatches = Object.values(guessStates).filter((guessState) => guessState === "correct").length;
    const allMatched = correctMatches === nameItems.length && nameItems.length > 0;
    const remainingNames = nameCards.filter((item) => !usedNameIds.includes(item.id));

    return (
        <section className="w-full max-w-6xl p-4 md:p-8">
            <div className="mb-8 flex items-center justify-between gap-4 rounded-2xl bg-white/10 px-6 py-4 text-sm text-black/60 md:text-lg">
                <p>Click or drag each name onto the image you think is correct.</p>
                <p>
                    Score {correctMatches}/{nameItems.length}
                </p>
            </div>

            <div className="mb-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {remainingNames.map((item, index) => (
                    <GuessNameCard
                        key={item.id}
                        ref={(element) => {
                            nameCardRefs.current[index] = element;
                        }}
                        item={item}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onSelect={handleNameSelect}
                        onKeyboardSelect={handleNameSelectFromKeyboard}
                        isSelected={selectedItemId === item.id}
                    />
                ))}
            </div>

            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {imageCards.map((item, index) => (
                    <GuessImageCard
                        key={item.id}
                        ref={(element) => {
                            imageCardRefs.current[index] = element;
                        }}
                        item={item}
                        guessState={guessStates[item.id]}
                        guessedItem={guessedNamesByImageId[item.id]}
                        isDraggedOver={hoveredImageId === item.id}
                        onDrop={handleDrop}
                        onDragOverImage={handleDragOverImage}
                        onDragLeaveImage={handleDragLeaveImage}
                        onSelect={handleImageSelect}
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
