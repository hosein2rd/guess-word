import { InputHTMLAttributes } from "react"

type InputProps = {
  className?: string
  name: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`${className} bg-blue-50 py-1 px-3 rounded-md shadow-md shadow-gray-200`}
      placeholder="Enter guess"
    />
  )
}
