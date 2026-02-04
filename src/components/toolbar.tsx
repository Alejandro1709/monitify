import { Button } from '@/components/ui/button'
import ModeToggler from '@/components/mode-toggler'

interface Props {
  mode: 'subscriptions' | 'expenses'
  onModeChange: React.Dispatch<
    React.SetStateAction<'subscriptions' | 'expenses'>
  >
  onAddClick: () => void
}

function ToolBar({ mode, onAddClick, onModeChange }: Props) {
  return (
    <div className="flex flex-row justify-between items-center gap-4 mb-6">
      <ModeToggler mode={mode} onModeChange={onModeChange} />

      {mode === 'subscriptions' ? (
        <Button
          variant="outline"
          onClick={onAddClick}
          className="cursor-pointer"
        >
          Nueva Suscripción
        </Button>
      ) : (
        <Button
          variant="outline"
          onClick={onAddClick}
          className="cursor-pointer"
        >
          Nuevo Gasto
        </Button>
      )}
    </div>
  )
}

export default ToolBar
