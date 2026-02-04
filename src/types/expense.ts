export type ExpenseCategory =
  | 'food'
  | 'transport'
  | 'shopping'
  | 'entertainment'
  | 'health'
  | 'utilities'
  | 'other'

export const expenseCategoryLabels: Record<ExpenseCategory, string> = {
  food: 'Comida',
  transport: 'Transporte',
  shopping: 'Compras',
  entertainment: 'Entretenimiento',
  health: 'Salud',
  utilities: 'Servicios',
  other: 'Otros',
}

export const expenseCategoryIcons: Record<ExpenseCategory, string> = {
  food: '🍔',
  transport: '🚗',
  shopping: '🛍️',
  entertainment: '🎬',
  health: '💊',
  utilities: '💡',
  other: '📦',
}

export const expenseCategoryColors: Record<ExpenseCategory, string> = {
  food: '#F59E0B',
  transport: '#3B82F6',
  shopping: '#EC4899',
  entertainment: '#8B5CF6',
  health: '#10B981',
  utilities: '#6366F1',
  other: '#6B7280',
}

export type Currency = 'USD' | 'PEN'

export const currencySymbols: Record<Currency, string> = {
  USD: '$',
  PEN: 'S/',
}

export interface Expense {
  id: string
  description: string
  amount: number
  currency: Currency
  category: ExpenseCategory
  date: string
  notes?: string
  createdAt: string
}
