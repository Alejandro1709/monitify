import { useMemo } from 'react'
import ExpensesView from '@/components/expenses/expenses-view'
import SubscriptionsView from '@/components/subscriptions/subscriptions-view'
import ToolBar from '@/components/toolbar'
import SubscriptionDialog from '@/components/subscriptions/subscription-dialog'
import { useViewModeStore } from '@/stores/useViewModeStore'
import { useSubscriptionDialogStore } from '@/stores/useSubscriptionDialogStore'
import { useSubscriptionsStore } from '@/stores/useSubscriptionsStore'
import type { Subscription, SubscriptionCategory } from '@/types/subscription'

function IndexPage() {
  const viewMode = useViewModeStore((state) => state.viewMode)

  const subscriptions = useSubscriptionsStore((state) => state.subscriptions)
  const editingSubscription = useSubscriptionsStore(
    (state) => state.editingSubscription,
  )
  const setEditingSubscription = useSubscriptionsStore(
    (state) => state.setEditingSubscription,
  )

  const addSubscription = useSubscriptionsStore(
    (state) => state.addSubscription,
  )

  const updateSubscription = useSubscriptionsStore(
    (state) => state.updateSubscription,
  )

  const changeIsOpen = useSubscriptionDialogStore((state) => state.changeIsOpen)

  const subCategoryCounts = useMemo(() => {
    const counts: Record<SubscriptionCategory | 'all', number> = {
      all: subscriptions.length,
      streaming: 0,
      music: 0,
      gaming: 0,
      productivity: 0,
      cloud: 0,
      fitness: 0,
      news: 0,
      education: 0,
      other: 0,
    }

    subscriptions.forEach((sub) => {
      counts[sub.category]++
    })

    return counts
  }, [subscriptions])

  const handleAddSubscription = () => {
    setEditingSubscription(null)
    changeIsOpen(true)
  }
  const handleEditSubscription = (subscription: Subscription) => {
    setEditingSubscription(subscription)
    changeIsOpen(true)
  }

  const handleSubmitSubscription = (
    data: Omit<Subscription, 'id' | 'createdAt'>,
  ) => {
    if (editingSubscription) {
      updateSubscription(editingSubscription.id, data)
      setEditingSubscription(null)
    } else {
      const newSubscription: Subscription = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      }

      addSubscription(newSubscription)
    }
  }

  return (
    <>
      <ToolBar />

      {viewMode === 'subscriptions' ? (
        <SubscriptionsView
          subscriptions={subscriptions}
          counts={subCategoryCounts}
          onEdit={handleEditSubscription}
          onAddClick={handleAddSubscription}
        />
      ) : (
        <ExpensesView />
      )}

      <SubscriptionDialog
        subscription={editingSubscription}
        onSubmit={handleSubmitSubscription}
      />
    </>
  )
}

export default IndexPage
