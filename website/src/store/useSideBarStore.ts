// src/store/useSidebarStore.ts
import { create } from 'zustand';

interface SidebarStore {
  content: any | null;
  isVisible: boolean;
  setContent: (content: any) => void;
  setVisibility: (isVisible: boolean) => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  content: null,
  isVisible: false,
  setContent: (content) => set({ content }),
  setVisibility: (isVisible) => set({ isVisible }),
}));
