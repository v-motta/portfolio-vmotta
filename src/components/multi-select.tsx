import { type VariantProps, cva } from 'class-variance-authority'
import { CheckIcon, ChevronDown, XCircle, XIcon } from 'lucide-react'
import * as React from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { getCleanText } from '@/lib/clean-text'
import { cn } from '@/lib/utils'
import { iconsNode } from './icons/icon-node'

const multiSelectVariants = cva(
  'm-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300',
  {
    variants: {
      variant: {
        default:
          'border-zinc-50/10 text-zinc-50 bg-zinc-800 hover:bg-zinc-800/80',
        secondary:
          'border-zinc-50/10 bg-secondary text-zinc-50 hover:bg-secondary/80',
        destructive:
          'border-transparent bg-red-500 text-zinc-50 hover:bg-red-500/80',
        inverted: 'inverted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface MultiSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof multiSelectVariants> {
  options: {
    label: string
    value: string
  }[]

  onValueChange: (value: string[]) => void
  defaultValue?: string[]
  placeholder?: string
  modalPopover?: boolean
  asChild?: boolean
  className?: string
}

export const MultiSelect = React.forwardRef<
  HTMLButtonElement,
  MultiSelectProps
>(
  (
    {
      options,
      onValueChange,
      variant,
      defaultValue = [],
      placeholder = 'Select options',
      modalPopover = false,
      asChild = false,
      className,
      ...props
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] =
      React.useState<string[]>(defaultValue)
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)

    const handleInputKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key === 'Enter') {
        setIsPopoverOpen(true)
      } else if (event.key === 'Backspace' && !event.currentTarget.value) {
        const newSelectedValues = [...selectedValues]
        newSelectedValues.pop()
        setSelectedValues(newSelectedValues)
        onValueChange(newSelectedValues)
      }
    }

    const toggleOption = (option: string) => {
      const newSelectedValues = selectedValues.includes(option)
        ? selectedValues.filter(value => value !== option)
        : [...selectedValues, option]
      setSelectedValues(newSelectedValues)
      onValueChange(newSelectedValues)
    }

    const handleClear = () => {
      setSelectedValues([])
      onValueChange([])
    }

    const handleTogglePopover = () => {
      setIsPopoverOpen(prev => !prev)
    }

    const toggleAll = () => {
      if (selectedValues.length === options.length) {
        handleClear()
      } else {
        const allValues = options.map(option => option.value)
        setSelectedValues(allValues)
        onValueChange(allValues)
      }
    }

    return (
      <Popover
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
        modal={modalPopover}
      >
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            {...props}
            onClick={handleTogglePopover}
            variant="outline"
            className={cn(
              'flex h-auto min-h-10 w-full items-center justify-between rounded-md border p-1 [&_svg]:pointer-events-auto',
              'border-zinc-400 dark:border-zinc-800',
              className
            )}
          >
            {selectedValues.length > 0 ? (
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-wrap items-center">
                  {selectedValues.map(value => {
                    const option = options.find(o => o.value === value)

                    return (
                      <Badge
                        key={value}
                        className={multiSelectVariants({ variant })}
                        onClick={event => {
                          event.stopPropagation()
                          toggleOption(value)
                        }}
                      >
                        {option && iconsNode[getCleanText(option?.label)]}
                        <span className="mx-2">{option?.label}</span>
                        <XCircle className="h-4 w-4 cursor-pointer" />
                      </Badge>
                    )
                  })}
                </div>
                <div className="flex items-center justify-between">
                  <XIcon
                    className="mx-2 h-4 cursor-pointer text-neutral-400"
                    onClick={event => {
                      event.stopPropagation()
                      handleClear()
                    }}
                  />
                  <Separator
                    orientation="vertical"
                    className="flex h-full min-h-6 bg-zinc-400 dark:bg-zinc-800"
                  />
                  <ChevronDown className="mx-2 h-4 cursor-pointer text-neutral-400" />
                </div>
              </div>
            ) : (
              <div className="mx-auto flex w-full items-center justify-between">
                <span className="mx-3 text-neutral-400 text-sm">
                  {placeholder}
                </span>
                <ChevronDown className="mx-2 h-4 cursor-pointer text-neutral-400" />
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0"
          align="start"
          onEscapeKeyDown={() => setIsPopoverOpen(false)}
        >
          <Command>
            <CommandInput
              placeholder="Search..."
              onKeyDown={handleInputKeyDown}
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  key="all"
                  onSelect={toggleAll}
                  className="cursor-pointer"
                >
                  <div
                    className={cn(
                      'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-zinc-900 dark:border-zinc-50',
                      selectedValues.length === options.length
                        ? 'bg-zinc-800 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900'
                        : 'opacity-50 [&_svg]:invisible'
                    )}
                  >
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <span>(Select All)</span>
                </CommandItem>
                {options.map(option => {
                  const isSelected = selectedValues.includes(option.value)
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => toggleOption(option.value)}
                      className="cursor-pointer"
                    >
                      <div
                        className={cn(
                          'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-zinc-900 dark:border-zinc-50',
                          isSelected
                            ? 'bg-zinc-800 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900'
                            : 'opacity-50 [&_svg]:invisible'
                        )}
                      >
                        <CheckIcon className="h-4 w-4" />
                      </div>
                      {iconsNode[getCleanText(option.label)]}
                      <span>{option.label}</span>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup>
                <div className="flex items-center justify-between">
                  {selectedValues.length > 0 && (
                    <>
                      <CommandItem
                        onSelect={handleClear}
                        className="flex-1 cursor-pointer justify-center"
                      >
                        Clear
                      </CommandItem>
                      <Separator
                        orientation="vertical"
                        className="flex h-full min-h-6 bg-zinc-400 dark:bg-zinc-800"
                      />
                    </>
                  )}
                  <CommandItem
                    onSelect={() => setIsPopoverOpen(false)}
                    className="max-w-full flex-1 cursor-pointer justify-center"
                  >
                    Close
                  </CommandItem>
                </div>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
)

MultiSelect.displayName = 'MultiSelect'
