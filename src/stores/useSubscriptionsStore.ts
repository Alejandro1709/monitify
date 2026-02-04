import type { Subscription } from '@/types/subscription'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Store {
  subscriptions: Subscription[]
  editingSubscription: Subscription | null
  addSubscription: (subscription: Subscription) => void
  setEditingSubscription: (subscription: Subscription | null) => void
  updateSubscription: (id: string, updates: Partial<Subscription>) => void
}

export const useSubscriptionsStore = create<Store>()(
  persist(
    (set) => ({
      subscriptions: [],
      editingSubscription: null,
      addSubscription: (subscription: Subscription) =>
        set((state) => ({
          subscriptions: [...state.subscriptions, subscription],
        })),
      setEditingSubscription: (subscription) =>
        set(() => ({ editingSubscription: subscription })),
      updateSubscription: (id: string, updates: Partial<Subscription>) =>
        set((state) => ({
          subscriptions: state.subscriptions.map((sub) =>
            sub.id === id ? { ...sub, ...updates } : sub,
          ),
        })),
      // removeSub: (id) =>
      //   set((state) => ({
      //     subscriptions: state.subscriptions.filter((s) => s.id !== id),
      //   })),
    }),
    { name: 'subscriptions' },
  ),
)
