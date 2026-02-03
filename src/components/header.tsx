import { Button } from '@/components/ui/button'

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">Monitify</h2>

          <Button className="cursor-pointer">Logout</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
