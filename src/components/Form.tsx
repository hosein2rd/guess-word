import { ChangeEvent, useState } from "react"
import Button from "./Button"
import Input from "./Input"

type FormProps<T> = { onSubmit: (data: T) => void }

export default function Form<T extends {}>({ onSubmit }: FormProps<T>) {
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
        value={formData?.guess || ""}
        name="guess"
        onChange={handleInput}
        className="mr-4"
      />
      <Button type="submit">submit</Button>
    </form>
  )
}
