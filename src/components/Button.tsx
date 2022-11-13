import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
} from "react"

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & {
    fill?: boolean
    color?: string
    backgroundColor?: string
  }

export default function Button({
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${className} bg-blue-400 hover:bg-blue-500 disabled:bg-gray-400 shadow-2xl transition-all text-white py-1 px-3 rounded-md disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  )
}
