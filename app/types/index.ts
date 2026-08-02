export type Item = {
  id: number;
  name: string;
  image: Image;
};

export type Image = {
  id: string;
  src?: string;
};

export type GuessRoutes = "herbs" | "seeds";

export type GuessState = "unanswered" | "correct" | "incorrect";