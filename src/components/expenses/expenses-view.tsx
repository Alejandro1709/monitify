import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import ExpenseFilter from '@/components/expenses/expense-filter'
import EmptyState from '@/components/expenses/empty-state'
import ExpenseCard from '@/components/expenses/expense-card'
import type { Expense, ExpenseCategory } from '@/types/expense'

interface Props {
  expenses: Expense[]
  counts: Record<ExpenseCategory | 'all', number>
  onEdit: (expense: Expense) => void
  onDelete: (id: string) => void
  onAddClick: () => void
}

function ExpensesView({
  expenses,
  counts,
  onEdit,
  onDelete,
  onAddClick,
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<
    ExpenseCategory | 'all'
  >('all')

  return (
    <div className="space-y-6">
      <ExpenseFilter
        selected={selectedCategory}
        counts={counts}
        onChange={setSelectedCategory}
      />

      {expenses.length === 0 ? (
        <EmptyState onAddClick={onAddClick} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {expenses.map((expense) => (
              <ExpenseCard
                key={expense.id}
                expense={expense}
                onEdit={() => onEdit(expense)}
                onDelete={() => onDelete(expense.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

export default ExpensesView
