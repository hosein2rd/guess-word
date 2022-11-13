export type HeaderProps = { title: string; align?: "left" | "right" | "center" }

export default function Header({ title, align }: HeaderProps) {
  return <th align={align || "center"}>{title}</th>
}
