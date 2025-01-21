import type { SVGProps } from 'react'

interface LoadingIconProps extends SVGProps<SVGSVGElement> {}

export function LoadingIcon(props: LoadingIconProps) {
  return (
    <svg
      className="mx-auto h-5 w-5 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <title>Loading...</title>
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}
