import { Categories } from "../components/Tag/types";

export type ICategoriesTypes = {
  name: string;
  image: string;
  video: string;
  categories: keyof typeof  Categories;
};

export const videoData: ICategoriesTypes[] = [
  {
    name: "Maggi",
    image: "https://img.youtube.com/vi/N546dnt2qxc/hqdefault.jpg",
    video: "https://img.youtube.com/vi/N546dnt2qxc/hqdefault.jpg",
    categories:
  },
  // {
  //   name: "Naruto",
  //   image: "https://img.youtube.com/vi/VvkHL4FrnbE/hqdefault.jpg",
  //   video: "https://img.youtube.com/vi/VvkHL4FrnbE/fieqge7aYJM.jpg",
  //   categories: ["Aventura", "Ação", "Magia"],
  // },
  // {
  //   name: "Spy x Family",
  //   image: "https://img.youtube.com/vi/aecUbrAIaiU/hqdefault.jpg",
  //   video: "https://img.youtube.com/vi/aecUbrAIaiU/hqdefault.jpg",
  //   categories: ["Aventura", "Ação", "Family"],
  // },

  // {
  //   name: "Kimetsu No Yaba",
  //   image: "https://img.youtube.com/vi/KzviMMv0x4Q/hqdefault.jpg",
  //   video: "https://img.youtube.com/vi/KzviMMv0x4Q/hqdefault.jpg",
  //   categories: ["Aventura", "Ação", "Magia", "Terror"],
  // },
];
