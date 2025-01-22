import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { LoadingIcon } from '../icons'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-neutral-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-neutral-50 text-neutral-900 hover:bg-neutral-50/90',
        destructive: 'bg-red-900 text-neutral-50 hover:bg-red-900/90',
        outline:
          'border border-neutral-800 bg-neutral-950 hover:bg-neutral-800 hover:text-neutral-50',
        secondary: 'bg-neutral-800 text-neutral-50 hover:bg-neutral-800/80',
        ghost: 'hover:bg-neutral-800 hover:text-neutral-50',
        link: 'text-neutral-50 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        icon: 'h-10 w-10 aspect-square',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isPending?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      isPending = false,
      disabled = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isPending || disabled}
        {...props}
      >
        {isPending ? <LoadingIcon /> : children}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
