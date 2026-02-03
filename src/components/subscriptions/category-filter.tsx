import { motion } from 'motion/react'
import { categoryLabels, type SubscriptionCategory } from '@/types/subscription'

interface Props {
  selectedCategory: SubscriptionCategory | 'all'
  onCategoryChange: (category: SubscriptionCategory | 'all') => void
}

function CategoryFilter({ selectedCategory, onCategoryChange }: Props) {
  const categories: (SubscriptionCategory | 'all')[] = [
    'all',
    'streaming',
    'music',
    'gaming',
    'productivity',
    'cloud',
    'fitness',
    'news',
    'education',
    'other',
  ]

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const isSelected = selectedCategory === category
        // const count = counts[category] || 0
        const label = category === 'all' ? 'Todas' : categoryLabels[category]

        // if (category !== 'all' && count === 0) return null

        return (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            whileTap={{ scale: 0.95 }}
            className={`
              relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors cursor-pointer
              ${
                isSelected
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }
            `}
          >
            {label}
            <span
              className={`ml-1.5 text-xs ${
                isSelected ? 'opacity-80' : 'text-muted-foreground'
              }`}
            >
              (4)
            </span>
          </motion.button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
