import { useEffect } from "react"
import { Header } from "../components/Header"
import { Heading } from "../components/Heading"
import { UserCard } from "../components/UserCard"
import { User } from "../contexts/UserContext"
import useFetch from "../hooks/useFetch"
import { useUser } from "../hooks/useUser"

export function List() {
  const { users, handleDeleteUser } = useUser()
  const { mutateDelete } = useFetch<User[]>("/aula/consultar")

  async function handleClick(userId: number) {
    await mutateDelete(`/aula/deletar/${userId}/`)

    alert(`Deletado com sucesso`)
    handleDeleteUser(userId)
  }

  return (
    <section className="w-screen h-screen bg-zinc-900 flex flex-col items-center">
      <Header />

      <main className="h-full w-full flex">
        <section className="w-[524px] m-auto flex flex-col">
          <Heading asChild size="lg" className="mb-4">
            <h1>Lista de usuários</h1>
          </Heading>

          <div className="flex flex-col gap-3">
            {users?.map((user) => (
              <UserCard handleClick={handleClick} key={user.id} user={user} />
            ))}
          </div>
        </section>
      </main>
    </section>
  )
}
