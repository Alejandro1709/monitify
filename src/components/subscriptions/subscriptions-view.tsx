import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import CategoryFilter from '@/components/subscriptions/category-filter'
import EmptyState from '@/components/subscriptions/empty-state'
import SubscriptionCard from '@/components/subscriptions/subscription-card'
import type { Subscription, SubscriptionCategory } from '@/types/subscription'

interface Props {
  subscriptions: Subscription[]
  counts: Record<SubscriptionCategory | 'all', number>
  onAddClick: () => void
  onEdit: (subscription: Subscription) => void
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}

function SubscriptionsView({
  subscriptions,
  counts,
  onEdit,
  onDelete,
  onToggle,
  onAddClick,
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<
    SubscriptionCategory | 'all'
  >('all')

  const filteredSubscriptions =
    selectedCategory === 'all'
      ? subscriptions
      : subscriptions.filter((sub) => sub.category === selectedCategory)

  return (
    <div className="space-y-6">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        counts={counts}
      />

      {subscriptions.length === 0 ? (
        <EmptyState onAddClick={onAddClick} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSubscriptions.map((subscription) => (
              <SubscriptionCard
                key={subscription.id}
                subscription={subscription}
                onEdit={() => onEdit(subscription)}
                onDelete={() => onDelete(subscription.id)}
                onToggleStatus={() => onToggle(subscription.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

export default SubscriptionsView
