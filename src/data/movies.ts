export type MoviesType = {
  id: number;
  title: string;
  category: string;
  price: number;
  imageUrl: string;
};

export const movies: MoviesType[] = [
  {
    id: 1,
    title: "Back to the Future 1",
    category: "Sci-Fi",
    price: 15,
    imageUrl: "assets/images/btf1.jpeg",
  },
  {
    id: 2,
    title: "Back to the Future 2",
    category: "Sci-Fi",
    price: 15,
    imageUrl: "assets/images/btf2.jpeg",
  },
  {
    id: 3,
    title: "Back to the Future 3",
    category: "Sci-Fi",
    price: 15,
    imageUrl: "assets/images/btf3.jpeg",
  },
  {
    id: 4,
    title: "Joker",
    category: "Drama",
    price: 20,
    imageUrl: "/assets/images/joker.jpeg",
  },
  {
    id: 5,
    title: "Midnight Sun",
    category: "Romantic",
    price: 20,
    imageUrl: "assets/images/MidnightSun.jpeg",
  },
  {
    id: 6,
    title: "Ocean8",
    category: "Heist",
    price: 20,
    imageUrl: "/assets/images/Ocean8.jpeg",
  },
  {
    id: 7,
    title: "Seven",
    category: "Drama",
    price: 20,
    imageUrl: "/assets/images/seven.jpg",
  },
  {
    id: 8,
    title: "Pulp Fiction",
    category: "Drama",
    price: 20,
    imageUrl: "assets/images/pulpFiction.jpeg",
  },
  {
    id: 9,
    title: "Parasite",
    category: "Drama",
    price: 20,
    imageUrl: "assets/images/parasit.webp",
  },
  {
    id: 10,
    title: "Sans un bruit",
    category: "Drama",
    price: 20,
    imageUrl: "assets/images/SansUnBruit.jpg",
  },
  {
    id: 11,
    title: "Les Indestructibles2",
    category: "Sci-Fi",
    price: 20,
    imageUrl: "assets/images/LesIndestructibles2.jpeg",
  },
  {
    id: 12,
    title: "Gone Girl",
    category: "Thriller",
    price: 20,
    imageUrl: "assets/images/goneGirl.jpg",
  },
];