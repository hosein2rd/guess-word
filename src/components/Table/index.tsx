import Header, { HeaderProps } from "./Header"
import Row from "./Row"

type TableProps<T = { [key: string]: any }> = {
  headers?: HeaderProps[]
  data?: T[]
}

export default function Table<T = { [key: string]: any }>({
  headers = [],
  data = [],
}: TableProps<T>) {
  return (
    <div className="w-full">
      <table className="w-full">
        <tbody>
          <tr>
            {headers.map((header, index) => (
              <Header key={index} title={header.title} align={header.align} />
            ))}
          </tr>
          {data?.map((d, index) => (
            <tr key={index}>
              {d &&
                Object.keys(d).map((key, i) => (
                  <Row key={i} content={(d as any)[key]} />
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
