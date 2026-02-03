import { useState } from 'react'
import Header from '@/components/header'
import ToolBar from '@/components/toolbar'
import SubscriptionsView from '@/components/subscriptions/subscriptions-view'
import ExpensesView from '@/components/expenses/expenses-view'

function App() {
  const [viewMode, setViewMode] = useState<'subscriptions' | 'expenses'>(
    'subscriptions',
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="space-y-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ToolBar mode={viewMode} onModeChange={setViewMode} />

        {viewMode === 'subscriptions' ? (
          <SubscriptionsView />
        ) : (
          <>
            <ExpensesView />
          </>
        )}
      </main>
    </div>
  )
}

export default App
