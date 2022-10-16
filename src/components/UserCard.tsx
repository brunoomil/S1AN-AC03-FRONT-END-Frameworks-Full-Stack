import { User } from "phosphor-react"
import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { Text } from "../components/Text"

type Props = {
  isDeletePage?: boolean
  handleClick: (userId: number) => void
  user: {
    id: number
    name: string
  }
}

export function UserCard({ user, isDeletePage = false, handleClick }: Props) {
  return (
    <div className="w-full bg-zinc-800 rounded p-4 flex justify-between items-center">
      <div className="flex item-center gap-4">
        <User size={32} color="#fff" />
        <Text asChild className="mt-[3px] w-2/3 text-lg">
          <p>{user.name}</p>
        </Text>
      </div>

      <div className="flex gap-2">
        {!isDeletePage && (
          <Button className="w-24" asChild>
            <Link to="/edit" className="flex justify-center">
              Editar
            </Link>
          </Button>
        )}

        <Button
          onClick={() => handleClick(user.id)}
          className="w-24 bg-red-500 hover:bg-red-400"
        >
          Deletar
        </Button>
      </div>
    </div>
  )
}
