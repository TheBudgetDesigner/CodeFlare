import { ThemeToggle, ThemeDropdown } from './ThemeToggle'

export function ExampleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Example Header/Navigation */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">CodeFlare AI Journey</h1>
          
          {/* Theme controls */}
          <div className="flex items-center gap-4">
            {/* Button version - cycles through themes */}
            <ThemeToggle />
            
            {/* Or use dropdown version - explicit selection */}
            {/* <ThemeDropdown /> */}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Example content showing color usage */}
      <div className="container mx-auto px-4 py-8 space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Primary color example */}
          <div className="p-6 rounded-lg bg-card border border-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Primary Actions</h3>
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Primary Button
            </button>
          </div>

          {/* Secondary color example */}
          <div className="p-6 rounded-lg bg-card border border-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Secondary Actions</h3>
            <button className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity">
              Secondary Button
            </button>
          </div>

          {/* Accent color example */}
          <div className="p-6 rounded-lg bg-card border border-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Accent Features</h3>
            <button className="px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity">
              Accent Button
            </button>
          </div>

          {/* Tip green example */}
          <div className="p-6 rounded-lg bg-card border border-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Success States</h3>
            <div className="px-4 py-2 rounded-lg bg-tip-green text-tip-green-foreground">
              Success Message
            </div>
          </div>

          {/* Destructive example */}
          <div className="p-6 rounded-lg bg-card border border-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Warning States</h3>
            <div className="px-4 py-2 rounded-lg bg-destructive text-destructive-foreground">
              Warning Message
            </div>
          </div>

          {/* Muted content example */}
          <div className="p-6 rounded-lg bg-muted border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">Muted Content</h3>
            <p className="text-muted-foreground">
              This is muted text that adapts to both light and dark themes.
            </p>
          </div>
        </div>

        {/* Gradient examples */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Gradient Examples</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="h-32 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-semibold">Primary Gradient</span>
            </div>
            <div className="h-32 rounded-lg bg-gradient-accent flex items-center justify-center">
              <span className="text-white font-semibold">Accent Gradient</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
