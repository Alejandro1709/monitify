import { useState } from 'react'
import ExpensesView from '@/components/expenses/expenses-view'
import SubscriptionsView from '@/components/subscriptions/subscriptions-view'
import ToolBar from '@/components/toolbar'
import SubscriptionDialog from '@/components/subscriptions/subscription-dialog'

function IndexPage() {
  const [viewMode, setViewMode] = useState<'subscriptions' | 'expenses'>(
    'subscriptions',
  )

  const [isSubDialogOpen, setIsSubDialogOpen] = useState<boolean>(false)
  // const [isExpDialogOpen, setIsExpDialogOpen] = useState<boolean>(false)

  const handleOpenDialog = () => {
    if (viewMode === 'subscriptions') {
      setIsSubDialogOpen(true)
      return
    }
  }

  return (
    <>
      <ToolBar
        mode={viewMode}
        onModeChange={setViewMode}
        onAddClick={handleOpenDialog}
      />

      {viewMode === 'subscriptions' ? (
        <SubscriptionsView onAddClick={handleOpenDialog} />
      ) : (
        <>
          <ExpensesView />
        </>
      )}

      <SubscriptionDialog
        open={isSubDialogOpen}
        onOpenChange={setIsSubDialogOpen}
      />
    </>
  )
}

export default IndexPage
