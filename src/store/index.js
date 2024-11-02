import { create } from 'zustand';

export const useStore = create((set) => ({
  isContactModalOpen: false,

  openContactModal: () => set((state) => ({ isContactModalOpen: true })),
  closeContactModal: () => set((state) => ({ isContactModalOpen: false }))
}));
