import { IFurniture } from '@/types/Furniture';
import { create } from 'zustand';

interface EditorStore {
  furnitures: IFurniture[];
  activeFurniture: number;
  setFurnitures: (furnitures: IFurniture[]) => void;
  setActiveFurniture: (id: number) => void;
  addFurniture: (furniture: IFurniture) => void;
  removeFurniture: (id: number) => void;
  findFurnitureById: (id: number) => IFurniture | undefined;
}

export const useCatalog = create<EditorStore>((set, get) => ({
  furnitures: [],

  activeFurniture: 0,

  setFurnitures: (furnitures: IFurniture[]) =>
    set(state => ({ ...state, furnitures })),

  setActiveFurniture: id => set(state => ({ ...state, activeFurniture: id })),

  findFurnitureById: id => get().furnitures.find(item => item.id === id),

  addFurniture: furniture =>
    set(state => ({
      ...state,
      furnitures: [...state.furnitures, furniture],
    })),

  removeFurniture: id =>
    set(state => ({
      ...state,
      furnitures: state.furnitures.filter(item => item.id !== id),
    })),
}));
