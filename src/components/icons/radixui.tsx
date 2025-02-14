import type { SVGProps } from 'react'

interface RadixUIIconProps extends SVGProps<SVGSVGElement> {}

export function RadixUIIcon(props: RadixUIIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="24"
      height="24"
      {...props}
    >
      <title>RadixUI</title>
      <path d="M11.52 24a7.68 7.68 0 01-7.68-7.68 7.68 7.68 0 017.68-7.68V24zm0-24v7.68H3.84V0h7.68zm4.8 7.68a3.84 3.84 0 110-7.68 3.84 3.84 0 010 7.68z" />
    </svg>
  )
}
