import { motion } from 'motion/react'
import { MoreVertical, Pencil, Trash2 } from 'lucide-react'
import {
  type Expense,
  expenseCategoryLabels,
  expenseCategoryIcons,
  currencySymbols,
} from '@/types/expense'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

interface Props {
  expense: Expense
  onEdit: (expense: Expense) => void
  onDelete: (id: string) => void
}

function ExpenseCard({ expense, onEdit, onDelete }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-card rounded-xl p-4 card-shadow hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="text-2xl shrink-0">
            {expenseCategoryIcons[expense.category]}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-foreground truncate">
              {expense.description}
            </h3>
            <p className="text-sm text-muted-foreground">
              {expenseCategoryLabels[expense.category]} • DATE
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-foreground whitespace-nowrap">
            {currencySymbols[expense.currency]}
            {expense.amount.toFixed(2)}
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(expense)}>
                <Pencil className="h-4 w-4 mr-2" />
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDelete(expense.id)}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {expense.notes && (
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {expense.notes}
        </p>
      )}
    </motion.div>
  )
}

export default ExpenseCard
