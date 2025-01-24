'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="size-8 scale-100 dark:scale-0" />
      <Moon className="absolute size-8 scale-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
