import { ChevronDown, Mouse } from 'lucide-react'

export function ScrollDownIcon() {
  return (
    <div className="hidden lg:block">
      <Mouse className="-translate-x-1/2 absolute bottom-16 left-1/2 block size-9" />
      <ChevronDown
        className="absolute bottom-8 left-1/2 block size-7 animate-bounce text-bracket"
        style={{ translate: '-50%' }}
      />
      <ChevronDown
        className="absolute bottom-6 left-1/2 block size-7 translate-x-1/2 animate-bounce text-bracket"
        style={{ translate: '-50%' }}
      />
    </div>
  )
}
