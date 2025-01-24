import * as React from 'react'

import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-zinc-400 bg-transparent px-3 py-1 text-base transition-colors md:text-sm',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600/30 focus-visible:ring-offset-2',
          'ring-offset-transparent placeholder:text-neutral-600',
          'dark:border-zinc-700 dark:focus-visible:ring-zinc-400/30 dark:placeholder:text-neutral-400',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
