import { useState } from 'react'
import Header from '@/components/header'
import ToolBar from '@/components/toolbar'

function App() {
  const [viewMode, setViewMode] = useState<'subscriptions' | 'expenses'>(
    'subscriptions',
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ToolBar mode={viewMode} onModeChange={setViewMode} />
      </main>
    </div>
  )
}

export default App
