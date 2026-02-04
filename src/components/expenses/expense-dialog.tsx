import { useExpenseDialogStore } from '@/stores/useExpenseDialogStore'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import CreateExpenseForm from './create-expense-form'
import type { Expense } from '@/types/expense'

interface Props {
  expense: Expense | null
  onSubmit: (data: Omit<Expense, 'id' | 'createdAt'>) => void
}

function ExpenseDialog({ expense, onSubmit }: Props) {
  const isExpenseDialogOpen = useExpenseDialogStore((state) => state.isOpen)

  const changeExpenseDialogIsOpen = useExpenseDialogStore(
    (state) => state.changeIsOpen,
  )

  return (
    <Dialog open={isExpenseDialogOpen} onOpenChange={changeExpenseDialogIsOpen}>
      <DialogContent className="sm:max-w-125" aria-describedby="">
        <DialogHeader>
          <DialogTitle>
            {expense ? 'Editar Gasto' : 'Agregar Gasto'}
          </DialogTitle>
        </DialogHeader>

        <CreateExpenseForm expense={expense} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  )
}

export default ExpenseDialog
