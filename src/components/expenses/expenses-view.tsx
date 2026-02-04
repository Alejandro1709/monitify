import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import ExpenseFilter from '@/components/expenses/expense-filter'
import EmptyState from '@/components/expenses/empty-state'
import ExpenseCard from '@/components/expenses/expense-card'
import type { Expense, ExpenseCategory } from '@/types/expense'

function ExpensesView() {
  const [expenses, setExpenses] = useState<Expense[]>([])

  const [selectedCategory, setSelectedCategory] = useState<
    ExpenseCategory | 'all'
  >('all')

  return (
    <div className="space-y-6">
      <ExpenseFilter
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />

      {expenses.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {expenses.map((expense) => (
              <ExpenseCard
                key={expense.id}
                expense={expense}
                onEdit={() => {}}
                onDelete={() => {}}
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

export default ExpensesView
