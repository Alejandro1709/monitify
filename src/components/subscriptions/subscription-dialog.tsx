import type { Subscription } from '@/types/subscription'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import CreateSubscriptionForm from '@/components/subscriptions/create-subscription-form'
import { useSubscriptionDialogStore } from '@/stores/useSubscriptionDialogStore'

interface Props {
  subscription?: Subscription | null
  onSubmit: (data: Omit<Subscription, 'id' | 'createdAt'>) => void
}

function SubscriptionDialog({ subscription, onSubmit }: Props) {
  const isOpen = useSubscriptionDialogStore((state) => state.isOpen)
  const changeIsOpen = useSubscriptionDialogStore((state) => state.changeIsOpen)

  return (
    <Dialog open={isOpen} onOpenChange={changeIsOpen}>
      <DialogContent className="sm:max-w-125" aria-describedby="">
        <DialogHeader>
          <DialogTitle>
            {subscription ? 'Editar Suscripción' : 'Nueva Suscripción'}
          </DialogTitle>
        </DialogHeader>

        <CreateSubscriptionForm
          subscription={subscription}
          onSubmit={onSubmit}
        />
      </DialogContent>
    </Dialog>
  )
}

export default SubscriptionDialog
