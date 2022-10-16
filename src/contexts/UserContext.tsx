import { createContext, ReactNode, useEffect, useState } from "react"
import { faker } from "@faker-js/faker"
import useFetch from "../hooks/useFetch"

export type User = {
  id: number
  name: string
}

type UserContextProps = {
  users: User[]
  generateUser: () => void
  handleAddUser: (user: User) => void
  handleEditUser: (user: User, oldName: string) => void
  handleDeleteUser: (id: number) => void
}

export const UserContext = createContext({} as UserContextProps)

type UserProviderProps = {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([])
  const { data } = useFetch<User[]>("/aula/consultar")

  useEffect(() => {
    if (!data) return
    if (users.length) return
    data.map(() => generateUser())
  }, [data, users])

  function generateUser() {
    const user = {
      id: Math.ceil(Math.random() * 1000),
      name: faker.internet.userName(),
    }
    setUsers((prevState) => [...prevState, user])
  }

  function handleAddUser(user: User) {
    setUsers((prevState) => [...prevState, user])
  }

  function handleDeleteUser(id: number) {
    const newUsers = users.filter((data) => data.id !== id)

    setUsers(newUsers)
  }

  function handleEditUser(user: User, oldName: string) {
    const filteredUsers = users.filter((data) => data.name !== oldName)

    setUsers([...filteredUsers, user])
  }

  return (
    <UserContext.Provider
      value={{
        users,
        generateUser,
        handleAddUser,
        handleEditUser,
        handleDeleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
