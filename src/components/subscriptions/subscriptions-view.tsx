import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import CategoryFilter from '@/components/subscriptions/category-filter'
import EmptyState from '@/components/subscriptions/empty-state'
import type { Subscription, SubscriptionCategory } from '@/types/subscription'

function SubscriptionsView() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])

  const [selectedCategory, setSelectedCategory] = useState<
    SubscriptionCategory | 'all'
  >('all')

  return (
    <div>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {subscriptions.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            <SubscriptionCard />
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

export default SubscriptionsView
