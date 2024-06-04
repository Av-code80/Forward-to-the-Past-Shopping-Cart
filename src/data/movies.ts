export type Movie = {
  id: number;
  title: string;
  genre: string;
  price: number;
};

export const movies: Movie[] = [
  { id: 1, title: "Back to the Future 1", genre: "Sci-Fi", price: 15 },
  { id: 2, title: "Back to the Future 2", genre: "Sci-Fi", price: 15 },
  { id: 3, title: "Back to the Future 3", genre: "Sci-Fi", price: 15 },
  { id: 4, title: "La chèvre", genre: "Comedy", price: 20 },
  { id: 5, title: "The Matrix", genre: "Sci-Fi", price: 20 },
  { id: 6, title: "Inception", genre: "Sci-Fi", price: 20 },
  { id: 7, title: "The Godfather", genre: "Crime", price: 20 },
  { id: 8, title: "Pulp Fiction", genre: "Crime", price: 20 },
  { id: 9, title: "The Dark Knight", genre: "Action", price: 20 },
  { id: 10, title: "Forrest Gump", genre: "Drama", price: 20 },
];
