import { create } from 'zustand'

interface Store {
  isOpen: boolean
  changeIsOpen: (open: boolean) => void
}

export const useExpenseDialogStore = create<Store>()((set) => ({
  isOpen: false,
  changeIsOpen: (open) => set(() => ({ isOpen: open })),
}))
