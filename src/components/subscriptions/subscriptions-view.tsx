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
}

function SubscriptionsView({ subscriptions, counts, onAddClick }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<
    SubscriptionCategory | 'all'
  >('all')

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
            {subscriptions.map((subscription) => (
              <SubscriptionCard
                key={subscription.id}
                subscription={subscription}
                onEdit={() => {}}
                onDelete={() => {}}
                onToggleStatus={() => {}}
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

export default SubscriptionsView
