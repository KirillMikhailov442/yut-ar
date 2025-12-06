import { CELL_SIZE } from '@/constants/cell';
import { IFurniture } from '@/types/Furniture';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

interface EditorStore {
  activeFurniture: number;
  isDragging: boolean;
  furnitures: IFurniture[];
  size: {
    width: number;
    height: number;
  };
  setSize: (width: number, height: number) => void;
  setSizeWidth: (width: number) => void;
  setSizeHeight: (height: number) => void;
  setDragging: (dragging: boolean) => void;
  setFurnitures: (furnitures: IFurniture[]) => void;
  setFurniturePosition: (id: number, x: number, y: number) => void;
  setFurnitureRotation: (id: number, rotation: number) => void;
  setActiveFurniture: (id: number) => void;
  addFurniture: (furniture: IFurniture) => void;
  removeFurniture: (id: number) => void;
  findFurnitureById: (id: number) => IFurniture | undefined;
}

export const useEditor = create<EditorStore>((set, get) => ({
  activeFurniture: 0,
  isDragging: false,
  furnitures: [],

  size: {
    width: 1000,
    height: 1000,
  },

  setSize: (width, height) =>
    set(state => ({ ...state, size: { width, height } })),

  setSizeWidth: width =>
    set(state => ({ ...state, size: { ...state.size, width } })),

  setSizeHeight: height =>
    set(state => ({ ...state, size: { ...state.size, height } })),

  setDragging: dragging => set(state => ({ ...state, isDragging: dragging })),

  setFurnitures: (furnitures: IFurniture[]) =>
    set(state => ({ ...state, furnitures })),

  setFurniturePosition: (id, x, y) =>
    set(state => ({
      ...state,
      furnitures: state.furnitures.map(item =>
        item.id === id ? { ...item, x, y } : item,
      ),
    })),

  setFurnitureRotation: (id, rotation) =>
    set(state => ({
      ...state,
      furnitures: state.furnitures.map(item =>
        item.id === id ? { ...item, rotation } : item,
      ),
    })),

  setActiveFurniture: id => set(state => ({ ...state, activeFurniture: id })),

  findFurnitureById: id => get().furnitures.find(item => item.id === id),

  addFurniture: furniture =>
    set(state => {
      let width = Math.round(furniture.width / CELL_SIZE / 5) * CELL_SIZE;
      let height = Math.round(furniture.height / CELL_SIZE / 5) * CELL_SIZE;
      const id = `${furniture.id}@${uuidv4()}`;

      if (width < 100) width = 100;
      if (height < 100) height = 100;
      const newFurniture = { ...furniture, width, height, id };
      return {
        ...state,
        furnitures: [...state.furnitures, newFurniture],
      };
    }),

  removeFurniture: id =>
    set(state => ({
      ...state,
      furnitures: state.furnitures.filter(item => item.id !== id),
    })),
}));
