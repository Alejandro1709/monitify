import { Button } from '@/components/ui/button'
import ModeToggler from '@/components/mode-toggler'
import { useViewModeStore } from '@/stores/useViewModeStore'
import { useSubscriptionDialogStore } from '@/stores/useSubscriptionDialogStore'
import { useExpenseDialogStore } from '@/stores/useExpenseDialogStore'

function ToolBar() {
  const viewMode = useViewModeStore((state) => state.viewMode)

  const changeIsOpen = useSubscriptionDialogStore((state) => state.changeIsOpen)

  const changeExpenseDialogIsOpen = useExpenseDialogStore(
    (state) => state.changeIsOpen,
  )

  return (
    <div className="flex flex-row justify-between items-center gap-4 mb-6">
      <ModeToggler />

      {viewMode === 'subscriptions' ? (
        <Button
          variant="outline"
          onClick={() => changeIsOpen(true)}
          className="cursor-pointer"
        >
          Nueva Suscripción
        </Button>
      ) : (
        <Button
          variant="outline"
          onClick={() => changeExpenseDialogIsOpen(true)}
          className="cursor-pointer"
        >
          Nuevo Gasto
        </Button>
      )}
    </div>
  )
}

export default ToolBar
