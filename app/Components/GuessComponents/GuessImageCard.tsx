import type { Item, GuessState } from "~/types/index";
import { checkGuessState } from "~/lib/helperFunctions";
import { useCallback, useState } from "react";

export default function GuessImageCard(
    { item, guessState }: { item: Item; guessState: GuessState }
) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = useCallback(() => {
        setIsImageLoaded(true);
    }, []);


    return (
        <div className={`flex flex-col items-center justify-center gap-2 rounded-lg ${checkGuessState(guessState)} p-4 shadow-md pointer-events-none`}>
            <img
                src={item.image}
                onLoad={handleImageLoad}
                className="h-18 z-20 w-auto rounded-lg object-contain draggable-none select-none pointer-events-none"
            />
            <div className="bg-gray-500 w-full rounded-md p-2 text-center h-8 mt-4">

            </div>
        </div>
    );
}