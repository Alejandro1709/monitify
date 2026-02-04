import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Expense } from '@/types/expense'

interface Store {
  expenses: Expense[]
  editingExpense: Expense | null
  addExpense: (expense: Expense) => void
  setEditingExpense: (expense: Expense | null) => void
  updateExpense: (id: string, updates: Partial<Expense>) => void
  removeExpense: (id: string) => void
}

export const useExpensesStore = create<Store>()(
  persist(
    (set) => ({
      expenses: [],
      editingExpense: null,
      addExpense: (expense) =>
        set((state) => ({
          expenses: [...state.expenses, expense],
        })),
      setEditingExpense: (expense) => set(() => ({ editingExpense: expense })),
      updateExpense: (id, updates) =>
        set((state) => ({
          expenses: state.expenses.map((exp) =>
            exp.id === id ? { ...exp, ...updates } : exp,
          ),
        })),
      removeExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((exp) => exp.id !== id),
        })),
    }),
    { name: 'expenses' },
  ),
)
