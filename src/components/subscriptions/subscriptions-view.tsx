import CategoryFilter from '@/components/subscriptions/category-filter'
import type { SubscriptionCategory } from '@/types/subscription'

interface Props {
  selectedCategory: SubscriptionCategory | 'all'
  onCategoryChange: (category: SubscriptionCategory | 'all') => void
}

function SubscriptionsView({ selectedCategory, onCategoryChange }: Props) {
  return (
    <div>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />

      <h2>Subscriptions</h2>
    </div>
  )
}

export default SubscriptionsView
