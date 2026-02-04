import { motion } from 'motion/react'
import { CreditCard, Receipt } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useViewModeStore } from '@/stores/useViewModeStore'

function ModeToggler() {
  const viewMode = useViewModeStore((state) => state.viewMode)
  const changeViewMode = useViewModeStore((state) => state.changeViewMode)

  return (
    <div className="inline-flex bg-muted rounded-lg p-1">
      <button
        onClick={() => changeViewMode('subscriptions')}
        className={cn(
          'relative px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2',
          viewMode === 'subscriptions'
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        {viewMode === 'subscriptions' && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-background rounded-md shadow-sm"
            transition={{ type: 'spring', duration: 0.3 }}
          />
        )}

        <CreditCard className="w-4 h-4 relative z-10" />
        <span className="relative z-10">Suscripciones</span>
      </button>

      <button
        onClick={() => changeViewMode('expenses')}
        className={cn(
          'relative px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2',
          viewMode === 'expenses'
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        {viewMode === 'expenses' && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-background rounded-md shadow-sm"
            transition={{ type: 'spring', duration: 0.3 }}
          />
        )}

        <Receipt className="w-4 h-4 relative z-10" />
        <span className="relative z-10">Gastos</span>
      </button>
    </div>
  )
}

export default ModeToggler
