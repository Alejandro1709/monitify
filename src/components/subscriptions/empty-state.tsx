import { motion } from 'motion/react'
import { CreditCard, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <CreditCard className="w-10 h-10 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        Sin suscripciones
      </h3>
      <p className="text-muted-foreground text-center max-w-sm mb-6">
        Agrega tu primera suscripción para comenzar a llevar el control de tus
        gastos recurrentes.
      </p>
      <Button className="cursor-pointer" onClick={() => {}}>
        <Plus className="w-4 h-4 mr-2" />
        Agregar suscripción
      </Button>
    </motion.div>
  )
}

export default EmptyState
