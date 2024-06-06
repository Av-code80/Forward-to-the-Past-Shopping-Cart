import { MovieCategory } from "../common/types/enum";
import { MoviesType } from "../common/types/types";


export const movies: MoviesType[] = [
  {
    id: 1,
    title: "Back to the Future 1",
    category: MovieCategory.SciFi,
    price: 15,
    imageUrl: "assets/images/btf1.jpeg",
  },
  {
    id: 2,
    title: "Back to the Future 2",
    category: MovieCategory.SciFi,
    price: 15,
    imageUrl: "assets/images/btf2.jpeg",
  },
  {
    id: 3,
    title: "Back to the Future 3",
    category: MovieCategory.SciFi,
    price: 15,
    imageUrl: "assets/images/btf3.jpeg",
  },
  {
    id: 4,
    title: "Joker",
    category: MovieCategory.Drama,
    price: 20,
    imageUrl: "/assets/images/joker.jpeg",
  },
  {
    id: 5,
    title: "Midnight Sun",
    category: MovieCategory.Drama,
    price: 20,
    imageUrl: "assets/images/MidnightSun.jpeg",
  },
  {
    id: 6,
    title: "Ocean8",
    category: MovieCategory.Comedy,
    price: 20,
    imageUrl: "/assets/images/Ocean8.jpeg",
  },
  {
    id: 7,
    title: "Seven",
    category: MovieCategory.Drama,
    price: 20,
    imageUrl: "/assets/images/seven.jpg",
  },
  {
    id: 8,
    title: "Pulp Fiction",
    category: MovieCategory.Drama,
    price: 20,
    imageUrl: "assets/images/pulpFiction.jpeg",
  },
  {
    id: 9,
    title: "Parasite",
    category: MovieCategory.Drama,
    price: 20,
    imageUrl: "assets/images/parasit.webp",
  },
  {
    id: 10,
    title: "Sans un bruit",
    category: MovieCategory.Drama,
    price: 20,
    imageUrl: "assets/images/SansUnBruit.jpg",
  },
  {
    id: 11,
    title: "Les Indestructibles2",
    category: MovieCategory.SciFi,
    price: 20,
    imageUrl: "assets/images/LesIndestructibles2.jpeg",
  },
  {
    id: 12,
    title: "Gone Girl",
    category: MovieCategory.Thriller,
    price: 20,
    imageUrl: "assets/images/goneGirl.jpg",
  },
];