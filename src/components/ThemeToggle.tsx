import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "../hooks/useTheme"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-5 w-5" />
      case 'dark':
        return <Moon className="h-5 w-5" />
      case 'system':
        return <Monitor className="h-5 w-5" />
      default:
        return <Sun className="h-5 w-5" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light mode'
      case 'dark':
        return 'Dark mode'
      case 'system':
        return 'System theme'
      default:
        return 'Toggle theme'
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        relative p-2 rounded-lg
        bg-background hover:bg-muted
        border border-border
        text-foreground hover:text-foreground/80
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
        group
      "
      aria-label={getLabel()}
      title={getLabel()}
    >
      <div className="flex items-center justify-center">
        {getIcon()}
      </div>
      
      {/* Optional tooltip */}
      <span className="
        absolute -top-10 left-1/2 -translate-x-1/2
        px-2 py-1 text-xs
        bg-popover text-popover-foreground
        border border-border rounded-md
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200
        pointer-events-none
        whitespace-nowrap
        z-50
      ">
        {getLabel()}
      </span>
    </button>
  )
}

// Alternative dropdown version if you prefer a more explicit UI
export function ThemeDropdown() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative inline-block text-left">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
        className="
          appearance-none bg-background border border-border rounded-lg
          px-4 py-2 pr-8
          text-foreground text-sm
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          cursor-pointer
        "
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}
