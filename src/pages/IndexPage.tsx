import { useState } from 'react'
import ExpensesView from '@/components/expenses/expenses-view'
import SubscriptionsView from '@/components/subscriptions/subscriptions-view'
import ToolBar from '@/components/toolbar'
import SubscriptionDialog from '@/components/subscriptions/subscription-dialog'
import { useViewModeStore } from '@/stores/useViewModeStore'
import defaultSubscriptions from '@/data/subscriptions'
import { useSubscriptionDialogStore } from '@/stores/useSubscriptionDialogStore'
import type { Subscription } from '@/types/subscription'

function IndexPage() {
  const viewMode = useViewModeStore((state) => state.viewMode)

  const [subscriptions, setSubscriptions] =
    useState<Subscription[]>(defaultSubscriptions)

  const changeIsOpen = useSubscriptionDialogStore((state) => state.changeIsOpen)

  const handleAddSubscription = () => {
    // setEditingSubscription(null)
    changeIsOpen(true)
  }

  const handleSubmitSubscription = (
    data: Omit<Subscription, 'id' | 'createdAt'>,
  ) => {
    // if (editingSubscription) {
    //   updateSubscription(editingSubscription.id, data)
    // } else {
    //   addSubscription(data)
    // }

    // Add subscription logic goes here

    const newSubscription: Subscription = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }

    setSubscriptions((prev) => [...prev, newSubscription])
  }

  return (
    <>
      <ToolBar />

      {viewMode === 'subscriptions' ? (
        <SubscriptionsView
          subscriptions={subscriptions}
          onAddClick={handleAddSubscription}
        />
      ) : (
        <ExpensesView />
      )}

      <SubscriptionDialog onSubmit={handleSubmitSubscription} />
    </>
  )
}

export default IndexPage
