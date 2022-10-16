import { User, BracketsSquare } from "phosphor-react"
import { FormEvent, useState } from "react"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Heading } from "../components/Heading"
import { Text } from "../components/Text"
import { TextInput } from "../components/TextInput"
import useFetch from "../hooks/useFetch"
import { useUser } from "../hooks/useUser"

export function Register() {
  const { handleAddUser } = useUser()
  const { mutate, loading } = useFetch("/aula/cadastrar", true)
  const [name, setName] = useState("")
  const [code, setCode] = useState("")

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const response = await mutate(
      "post",
      JSON.stringify({ nome: name, cod: code })
    )

    if (response.nome) {
      alert(`Usuário cadastrado com sucesso: ${response.nome} `)
      handleAddUser({
        id: Math.ceil(Math.random() * 1000),
        name: response.nome,
      })
    }
  }

  return (
    <section className="w-screen h-screen bg-zinc-900 flex flex-col items-center">
      <Header />

      <main className="h-full w-full flex">
        <form className="max-w-sm m-auto flex flex-col" onSubmit={handleSubmit}>
          <Heading asChild size="lg" className="mb-1">
            <h1>Cadastrar usuário</h1>
          </Heading>

          <Text className="mb-3">
            Insira os dados e cadastre um usuário na aplicação
          </Text>

          <label htmlFor="name" className="mt-5 flex flex-col gap-2">
            <Text className="font-semibold">Digite um nome</Text>

            <TextInput.Root>
              <TextInput.Icon>
                <User />
              </TextInput.Icon>
              <TextInput.Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                id="name"
              />
            </TextInput.Root>
          </label>

          <label htmlFor="code" className="mt-3 flex flex-col gap-2">
            <Text className="font-semibold">Digite um código</Text>

            <TextInput.Root>
              <TextInput.Icon>
                <BracketsSquare />
              </TextInput.Icon>
              <TextInput.Input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Digite o código"
                id="code"
              />
            </TextInput.Root>
          </label>

          <Button type="submit" className="mt-5">
            {loading ? "Carregando..." : "Cadastrar"}
          </Button>
        </form>
      </main>
    </section>
  )
}
