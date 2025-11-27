import { IFurniture } from '@/types/Furniture';
import { create } from 'zustand';

interface EditorStore {
  isDragging: boolean;
  furnitures: IFurniture[];
  setDragging: (dragging: boolean) => void;
  setFurniturePosition: (id: number, x: number, y: number) => void;
  addFurniture: (furniture: IFurniture) => void;
  removeFurniture: (id: number) => void;
  findFurnitureById: (id: number) => IFurniture | undefined;
}

export const useEditor = create<EditorStore>((set, get) => ({
  isDragging: false,
  furnitures: [
    {
      id: 1,
      title: 'A',
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      rotation: 0,
    },
  ],

  setDragging: dragging => set(state => ({ ...state, isDragging: dragging })),

  setFurniturePosition: (id, x, y) =>
    set(state => ({
      ...state,
      furnitures: state.furnitures.map(item =>
        item.id === id ? { ...item, x, y } : item,
      ),
    })),

  findFurnitureById: id => get().furnitures.find(item => item.id === id),

  addFurniture: furniture =>
    set(state => ({ ...state, furnitures: [...state.furnitures, furniture] })),

  removeFurniture: id =>
    set(state => ({
      ...state,
      furnitures: state.furnitures.filter(item => item.id !== id),
    })),
}));
