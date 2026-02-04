import type { Subscription } from '@/types/subscription'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface Props {
  open: boolean
  subscription?: Subscription | null
  onOpenChange: (open: boolean) => void
}

function SubscriptionDialog({ open, subscription, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-125">
        <DialogHeader>
          <DialogTitle>
            {subscription ? 'Editar Suscripción' : 'Nueva Suscripción'}
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default SubscriptionDialog
