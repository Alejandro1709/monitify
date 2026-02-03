import { useState } from 'react'

import Header from '@/components/header'
import ToolBar from '@/components/toolbar'
import CategoryFilter from './components/subscriptions/category-filter'
import { type SubscriptionCategory } from './types/subscription'

function App() {
  const [viewMode, setViewMode] = useState<'subscriptions' | 'expenses'>(
    'subscriptions',
  )

  const [selectedSubCategory, setSelectedSubCategory] = useState<
    SubscriptionCategory | 'all'
  >('all')

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="space-y-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ToolBar mode={viewMode} onModeChange={setViewMode} />

        {viewMode === 'subscriptions' ? (
          <>
            <CategoryFilter
              selectedCategory={selectedSubCategory}
              onCategoryChange={setSelectedSubCategory}
            />

            <h2>Subscriptions</h2>
          </>
        ) : (
          <>
            <h2>Expenses</h2>
          </>
        )}
      </main>
    </div>
  )
}

export default App
