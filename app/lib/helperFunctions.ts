import type { GuessState } from "~/types/index";

export function checkGuessState(guessState: GuessState): string {
  switch (guessState) {
    case "unanswered":
      return "bg-darkbeige";
    case "correct":
      return "bg-green-600";
    case "incorrect":
      return "bg-red-600";
    default:
      return "bg-darkbeige";
  }
};