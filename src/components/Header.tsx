import { Link } from "react-router-dom"
import { Text } from "./Text"

export function Header() {
  return (
    <header className="p-6 w-full flex items-center justify-center gap-3">
      <Text
        asChild
        className="font-bold underline uppercase transition-colors hover:text-purple-300"
      >
        <Link to="/">Listar</Link>
      </Text>
      <Text
        asChild
        className="font-bold underline uppercase transition-colors hover:text-purple-300"
      >
        <Link to="/register">Registrar</Link>
      </Text>
      <Text
        asChild
        className="font-bold underline uppercase transition-colors hover:text-purple-300"
      >
        <Link to="/delete">Deletar</Link>
      </Text>
      <Text
        asChild
        className="font-bold underline uppercase transition-colors hover:text-purple-300"
      >
        <Link to="/edit">Editar</Link>
      </Text>
    </header>
  )
}
