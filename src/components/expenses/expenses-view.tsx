import { useState } from 'react'
import ExpenseFilter from '@/components/expenses/expense-filter'
import type { ExpenseCategory } from '@/types/expense'

function ExpensesView() {
  const [selectedCategory, setSelectedCategory] = useState<
    ExpenseCategory | 'all'
  >('all')

  return (
    <div className="space-y-6">
      <ExpenseFilter
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />
    </div>
  )
}

export default ExpensesView
