import { create } from 'zustand';

interface MenuStore {
  open: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
}

const useMenu = create<MenuStore>(set => ({
  open: false,
  openMenu: () => set(() => ({ open: true })),
  closeMenu: () => set(() => ({ open: false })),
  toggleMenu: () => set(state => ({ open: !state.open })),
}));

export default useMenu;
