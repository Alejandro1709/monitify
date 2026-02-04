import type { Subscription } from '@/types/subscription'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Store {
  subscriptions: Subscription[]
  editingSubscription: Subscription | null
  addSubscription: (subscription: Subscription) => void
  setEditingSubscription: (subscription: Subscription | null) => void
  updateSubscription: (id: string, updates: Partial<Subscription>) => void
  removeSubscription: (id: string) => void
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
      removeSubscription: (id) =>
        set((state) => ({
          subscriptions: state.subscriptions.filter((sub) => sub.id !== id),
        })),
    }),
    { name: 'subscriptions' },
  ),
)
