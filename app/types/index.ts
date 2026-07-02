export type Item = {
  id: number;
  name: string;
  image: string;
};

export type GuessRoutes = "herbs" | "seeds";

export type GuessState = "unanswered" | "correct" | "incorrect";