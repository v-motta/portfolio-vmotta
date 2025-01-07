import { ChevronDown, Mouse } from 'lucide-react'

export function ScrollDownIcon() {
  return (
    <>
      <Mouse className="-translate-x-1/2 absolute bottom-16 left-1/2 hidden size-9 text-white lg:block" />
      <ChevronDown
        className="absolute bottom-8 left-1/2 hidden size-7 animate-bounce text-bracket lg:block"
        style={{ translate: '-50%' }}
      />
      <ChevronDown
        className="absolute bottom-6 left-1/2 hidden size-7 translate-x-1/2 animate-bounce text-bracket lg:block"
        style={{ translate: '-50%' }}
      />
    </>
  )
}
