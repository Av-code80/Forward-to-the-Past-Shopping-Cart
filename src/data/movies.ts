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
    imageUrl: "/assets/images/btf1.jpg",
  },
  {
    id: 2,
    title: "Back to the Future 2",
    category: "Sci-Fi",
    price: 15,
    imageUrl: "/assets/images/btf2.webp",
  },
  {
    id: 3,
    title: "Back to the Future 3",
    category: "Sci-Fi",
    price: 15,
    imageUrl: "/assets/images/btf3.jpeg",
  },
  {
    id: 4,
    title: "Oceans 8",
    category: "Comedy",
    price: 20,
    imageUrl: "/assets/images/creed.jpeg",
  },
  {
    id: 5,
    title: "Midnight Sun",
    category: "Comedy",
    price: 20,
    imageUrl: "/assets/images/MidnightSun.jpeg",
  },
  {
    id: 6,
    title: "Les indestructibles 2",
    category: "Animation",
    price: 20,
    imageUrl: "/assets/images/inception.jpeg",
  },
  {
    id: 7,
    title: "Sans un bruit",
    category: "Thriller",
    price: 20,
    imageUrl: "/assets/images/LesIndestructibles2.jpeg",
  },
  {
    id: 8,
    title: "Creed II",
    category: "Drame",
    price: 20,
    imageUrl: "/assets/images/MidnightSun.jpeg",
  },
  {
    id: 9,
    title: "Pulp Fiction",
    category: "Thriller",
    price: 20,
    imageUrl: "/assets/images/Ocean8.jpeg",
  },
  {
    id: 10,
    title: "Pulp Fiction",
    category: "Thriller",
    price: 20,
    imageUrl: "/assets/images/pulpFiction.jpeg",
  },
  {
    id: 11,
    title: "Seven",
    category: "Thriller",
    price: 20,
    imageUrl: "/assets/images/SansUnBruit.jpg",
  },
  {
    id: 12,
    title: "Inception",
    category: "Thriller",
    price: 20,
    imageUrl: "/assets/images/seven.jpg",
  },
  {
    id: 13,
    title: "Gone Girl",
    category: "Thriller",
    price: 20,
    imageUrl: "/assets/images/goneGirl.jpg",
  },
];
