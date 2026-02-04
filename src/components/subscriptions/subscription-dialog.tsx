import type { Subscription } from '@/types/subscription'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import CreateSubscriptionForm, {
  type FormData,
} from '@/components/subscriptions/create-subscription-form'

interface Props {
  open: boolean
  subscription?: Subscription | null
  onOpenChange: (open: boolean) => void
}

function SubscriptionDialog({ open, subscription, onOpenChange }: Props) {
  const handleCreateSubscription = (data: FormData) => {
    if (subscription) {
      // updateSubscription(editingSubscription.id, data);
    } else {
      // create subscription
      console.log(data)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-125" aria-describedby="">
        <DialogHeader>
          <DialogTitle>
            {subscription ? 'Editar Suscripción' : 'Nueva Suscripción'}
          </DialogTitle>
        </DialogHeader>

        <CreateSubscriptionForm
          open={open}
          onOpenChange={onOpenChange}
          onSubmit={handleCreateSubscription}
        />
      </DialogContent>
    </Dialog>
  )
}

export default SubscriptionDialog
