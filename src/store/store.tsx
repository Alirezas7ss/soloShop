import { create } from 'zustand';

export type typeSidebar = {
    showSidebar: boolean;
    setShowSidebar: (id: boolean) => void;
  };
  export const showSidebar = create<typeSidebar>((set) => ({
    showSidebar: false,
    setShowSidebar: () => set((state) => ({ showSidebar: !state.showSidebar } )),
  }));