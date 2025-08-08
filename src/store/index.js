import { create } from 'zustand';

export const useStore = create((set) => ({
  isContactModalOpen: false,

  isSnackbarOpen: false,
  snackbarType: '',
  snackbarText: '',

  openContactModal: () => set((state) => ({ isContactModalOpen: true })),
  closeContactModal: () => set((state) => ({ isContactModalOpen: false })),

  openSnackbar: (type, text) =>
    set((state) => ({ ...state, isSnackbarOpen: true, snackbarType: type, snackbarText: text })),
  closeSnackbar: () => set((state) => ({ ...state, isSnackbarOpen: false, snackbarType: '', snackbarText: '' }))
}));
