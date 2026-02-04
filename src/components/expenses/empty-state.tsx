import { motion } from 'motion/react'
import { Plus, Receipt } from 'lucide-react'
import { Button } from '@/components/ui/button'

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
        <Receipt className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        Sin gastos registrados
      </h3>
      <p className="text-muted-foreground text-center max-w-sm mb-6">
        Comienza a registrar tus gastos diarios para llevar un mejor control de
        tu dinero.
      </p>
      <Button onClick={() => {}} className="cursor-pointer">
        <Plus className="w-4 h-4" />
        Agregar primer gasto
      </Button>
    </motion.div>
  )
}

export default EmptyState
