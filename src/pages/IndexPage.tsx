import { useState } from 'react'
import ExpensesView from '@/components/expenses/expenses-view'
import SubscriptionsView from '@/components/subscriptions/subscriptions-view'
import ToolBar from '@/components/toolbar'

function IndexPage() {
  const [viewMode, setViewMode] = useState<'subscriptions' | 'expenses'>(
    'subscriptions',
  )

  return (
    <>
      <ToolBar mode={viewMode} onModeChange={setViewMode} />

      {viewMode === 'subscriptions' ? (
        <SubscriptionsView />
      ) : (
        <>
          <ExpensesView />
        </>
      )}
    </>
  )
}

export default IndexPage
