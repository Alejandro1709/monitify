import { useExpenseDialogStore } from '@/stores/useExpenseDialogStore'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'

function ExpenseDialog() {
  const isExpenseDialogOpen = useExpenseDialogStore((state) => state.isOpen)
  const changeExpenseDialogIsOpen = useExpenseDialogStore(
    (state) => state.changeIsOpen,
  )

  return (
    <Dialog open={isExpenseDialogOpen} onOpenChange={changeExpenseDialogIsOpen}>
      <DialogContent className="sm:max-w-125" aria-describedby="">
        <DialogHeader>
          <DialogTitle>Nuevo Gasto</DialogTitle>
        </DialogHeader>
        FORM
      </DialogContent>
    </Dialog>
  )
}

export default ExpenseDialog
