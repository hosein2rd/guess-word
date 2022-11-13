import { ChangeEvent, useState } from "react"
import Button from "./Button"
import Input from "./Input"

type FormProps<T> = { onSubmit: (data: T) => void; disabled?: boolean }

export default function Form<T extends {}>({
  onSubmit,
  disabled,
}: FormProps<T>) {
  const [formData, setFormData] = useState<T | any>(null)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(formData)
        setFormData(null)
      }}
      className="py-4"
    >
      <Input
        disabled={disabled}
        value={formData?.guess || ""}
        name="guess"
        onChange={handleInput}
        className="mr-4"
      />
      <Button disabled={disabled} type="submit">
        submit
      </Button>
    </form>
  )
}
