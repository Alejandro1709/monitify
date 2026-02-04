import { Button } from '@/components/ui/button'
import ModeToggler from '@/components/mode-toggler'
import { useViewModeStore } from '@/stores/useViewModeStore'

function ToolBar() {
  const viewMode = useViewModeStore((state) => state.viewMode)

  return (
    <div className="flex flex-row justify-between items-center gap-4 mb-6">
      <ModeToggler />

      {viewMode === 'subscriptions' ? (
        <Button variant="outline" onClick={() => {}} className="cursor-pointer">
          Nueva Suscripción
        </Button>
      ) : (
        <Button variant="outline" onClick={() => {}} className="cursor-pointer">
          Nuevo Gasto
        </Button>
      )}
    </div>
  )
}

export default ToolBar
