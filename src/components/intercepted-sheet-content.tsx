'use client'

import * as SheetPrimitive from '@radix-ui/react-dialog'
import type { VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { SheetOverlay, SheetPortal, sheetVariants } from './ui/sheet'

interface InterceptedSheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

export const InterceptedSheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  InterceptedSheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => {
  const router = useRouter()

  function onDismiss() {
    router.back()
  }

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        onEscapeKeyDown={onDismiss}
        onPointerDownOutside={onDismiss}
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        {children}
        <button
          type="button"
          onClick={onDismiss}
          className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-neutral-950 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-800"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
})
InterceptedSheetContent.displayName = SheetPrimitive.Content.displayName
