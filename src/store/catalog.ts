import { IFurniture } from "@/types/Furniture";
import { create } from "zustand";

interface EditorStore {
  furnitures: IFurniture[];
  setFurnitures: (furnitures: IFurniture[]) => void;
  addFurniture: (furniture: IFurniture) => void;
  removeFurniture: (id: number) => void;
  findFurnitureById: (id: number) => IFurniture | undefined;
}

export const useCatalog = create<EditorStore>((set, get) => ({
  furnitures: [
    {
      id: 2,
      title: "A",
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      rotation: 0,
    },
  ],

  setFurnitures: (furnitures: IFurniture[]) =>
    set((state) => ({ ...state, furnitures })),

  findFurnitureById: (id) => get().furnitures.find((item) => item.id === id),

  addFurniture: (furniture) =>
    set((state) => ({
      ...state,
      furnitures: [...state.furnitures, furniture],
    })),

  removeFurniture: (id) =>
    set((state) => ({
      ...state,
      furnitures: state.furnitures.filter((item) => item.id !== id),
    })),
}));
