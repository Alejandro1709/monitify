import { Outlet } from 'react-router'
import Header from '@/components/header'

function AppLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="space-y-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
