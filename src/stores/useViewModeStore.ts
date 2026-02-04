import { create } from 'zustand'

interface Store {
  viewMode: 'subscriptions' | 'expenses'
  changeViewMode: (viewMode: 'subscriptions' | 'expenses') => void
}

export const useViewModeStore = create<Store>()((set) => ({
  viewMode: 'subscriptions',
  changeViewMode: (viewMode) => set(() => ({ viewMode })),
}))
