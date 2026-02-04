import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'

interface Props {
  isDialogOpen: boolean
  onChange: (open: boolean) => void
}
function ExpenseDialog({ isDialogOpen, onChange }: Props) {
  return (
    <Dialog open={isDialogOpen} onOpenChange={onChange}>
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
