import { create } from 'zustand';

type ModalName = 'menu' | 'furnitures';

interface ModalStore {
  modals: Record<ModalName, boolean>;
  params: Record<ModalName, string>;
  openModal: (name: ModalName) => void;
  closeModal: (name: ModalName) => void;
  toggleModal: (name: ModalName) => void;
  setParam: ({ name, param }: { name: ModalName; param: string }) => void;
  removeParam: (name: ModalName) => void;
  closeAll: () => void;
}

export const useModals = create<ModalStore>(set => ({
  modals: {
    menu: false,
    furnitures: false,
  },
  params: {
    menu: '',
    furnitures: '',
  },

  openModal: name =>
    set(state => ({
      modals: { ...state.modals, [name]: true },
    })),

  closeModal: name =>
    set(state => ({
      modals: { ...state.modals, [name]: false },
    })),

  toggleModal: name =>
    set(state => ({
      modals: { ...state.modals, [name]: !state.modals[name] },
    })),

  setParam: ({ name, param }: { name: string; param: string }) =>
    set(state => ({ ...state, params: { ...state.params, [name]: param } })),

  removeParam: (name: string) =>
    set(state => ({ ...state, params: { ...state.params, [name]: '' } })),

  closeAll: () =>
    set(state => ({
      modals: Object.keys(state.modals).reduce((acc, key) => {
        acc[key as ModalName] = false;
        return acc;
      }, {} as Record<ModalName, boolean>),
    })),
}));
