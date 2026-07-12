import type { GuessState } from "~/types/index";

export function checkGuessState(guessState: GuessState): string {
  switch (guessState) {
    case "unanswered":
      return "bg-gray-800";
    case "correct":
      return "bg-green-500";
    case "incorrect":
      return "bg-red-500";
    default:
      return "bg-gray-800";
  }
};