import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import {
  expenseCategoryIcons,
  expenseCategoryLabels,
  type ExpenseCategory,
} from '@/types/expense'

interface Props {
  selected: ExpenseCategory | 'all'
  counts: Record<ExpenseCategory | 'all', number>
  onChange: (category: ExpenseCategory | 'all') => void
}

const categories: (ExpenseCategory | 'all')[] = [
  'all',
  'food',
  'transport',
  'shopping',
  'entertainment',
  'health',
  'utilities',
  'other',
]

function ExpenseFilter({ selected, counts, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isSelected = selected === category
        const label =
          category === 'all' ? 'Todos' : expenseCategoryLabels[category]
        const icon = category === 'all' ? '📋' : expenseCategoryIcons[category]
        const count = counts[category]

        return (
          <motion.button
            key={category}
            onClick={() => onChange(category)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              'px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5',
              isSelected
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80',
            )}
          >
            <span>{icon}</span>
            <span>{label}</span>
            <span
              className={cn(
                'ml-1 px-1.5 py-0.5 rounded-full text-xs',
                isSelected ? 'bg-primary-foreground/20' : 'bg-background',
              )}
            >
              ({count})
            </span>
          </motion.button>
        )
      })}
    </div>
  )
}

export default ExpenseFilter
