import { useState } from 'react'
import ExpensesView from '@/components/expenses/expenses-view'
import SubscriptionsView from '@/components/subscriptions/subscriptions-view'
import ToolBar from '@/components/toolbar'
import SubscriptionDialog from '@/components/subscriptions/subscription-dialog'
import { useViewModeStore } from '@/stores/useViewModeStore'

function IndexPage() {
  const viewMode = useViewModeStore((state) => state.viewMode)

  const [isSubDialogOpen, setIsSubDialogOpen] = useState<boolean>(false)

  const handleOpenDialog = () => {
    if (viewMode === 'subscriptions') {
      setIsSubDialogOpen(true)
      return
    }
  }

  return (
    <>
      <ToolBar />

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
