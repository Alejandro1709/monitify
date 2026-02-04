import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import CategoryFilter from '@/components/subscriptions/category-filter'
import EmptyState from '@/components/subscriptions/empty-state'
import SubscriptionCard from '@/components/subscriptions/subscription-card'
import defaultSubscriptions from '@/data/subscriptions'
import type { Subscription, SubscriptionCategory } from '@/types/subscription'

interface Props {
  onAddClick: () => void
}

function SubscriptionsView({ onAddClick }: Props) {
  const [subscriptions, setSubscriptions] =
    useState<Subscription[]>(defaultSubscriptions)

  const [selectedCategory, setSelectedCategory] = useState<
    SubscriptionCategory | 'all'
  >('all')

  return (
    <div className="space-y-6">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
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
