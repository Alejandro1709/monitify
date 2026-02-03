import { motion } from 'motion/react'
import {
  Calendar,
  CreditCard,
  Edit,
  MoreVertical,
  Pause,
  Trash2,
} from 'lucide-react'
import {
  categoryLabels,
  currencySymbols,
  statusLabels,
  type Subscription,
} from '@/types/subscription'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

interface Props {
  subscription: Subscription
  onEdit: (subscription: Subscription) => void
  onDelete: (id: string) => void
  onToggleStatus: (id: string) => void
}

function SubscriptionCard({
  subscription,
  onEdit,
  onDelete,
  onToggleStatus,
}: Props) {
  const getStatusVariant = () => {
    switch (subscription.status) {
      case 'active':
        return 'default'
      case 'paused':
        return 'secondary'
      case 'cancelled':
        return 'destructive'
    }
  }

  const getCardIcon = () => {
    switch (subscription.cardType) {
      case 'visa':
        return 'VISA'
      case 'mastercard':
        return 'MC'
      case 'amex':
        return 'AMEX'
      default:
        return '••••'
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -2 }}
      className="group bg-card rounded-xl p-5 shadow border border-border transition-all duration-200"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
            style={{
              backgroundColor: `${subscription.color}15`,
              color: subscription.color,
            }}
          >
            {subscription.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">
              {subscription.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {categoryLabels[subscription.category]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant={getStatusVariant()}>
            {statusLabels[subscription.status]}
          </Badge>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(subscription)}>
                <Edit className="h-4 w-4 mr-2" />
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onToggleStatus(subscription.id)}>
                <Pause className="h-4 w-4 mr-2" />
                {subscription.status === 'active' ? 'Pausar' : 'Activar'}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDelete(subscription.id)}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-foreground">
              {currencySymbols[subscription.currency]}
              20.00
              <span className="text-sm font-normal text-muted-foreground">
                /mes
              </span>
            </p>
            {subscription.billingCycle === 'annual' && (
              <p className="text-xs text-muted-foreground">
                ({currencySymbols[subscription.currency]}
                {subscription.amount.toFixed(2)}/año)
              </p>
            )}
          </div>

          <div className="text-right text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <span>DATE</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground mt-1">
              <CreditCard className="h-3.5 w-3.5" />
              <span>
                {getCardIcon()} •••• {subscription.cardLastFour}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SubscriptionCard
