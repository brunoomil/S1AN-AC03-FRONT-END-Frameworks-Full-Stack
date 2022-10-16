import { User, BracketsSquare } from "phosphor-react"
import { FormEvent, useState } from "react"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Heading } from "../components/Heading"
import { Text } from "../components/Text"
import { TextInput } from "../components/TextInput"
import useFetch from "../hooks/useFetch"
import { useUser } from "../hooks/useUser"

export function Edit() {
  const { handleEditUser } = useUser()
  const { mutate, loading } = useFetch("/aula/atualizar", true)
  const [name, setName] = useState("")
  const [oldName, setOldName] = useState("")
  const [code, setCode] = useState("")

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const response = await mutate(
      "PUT",
      JSON.stringify({ text: name, text2: code })
    )

    if (response.text) {
      alert(`Usuário editado com sucesso`)
      handleEditUser(
        {
          id: Math.ceil(Math.random() * 1000),
          name: response.text,
        },
        oldName
      )
    }
  }

  return (
    <section className="w-screen h-screen bg-zinc-900 flex flex-col items-center">
      <Header />

      <main className="h-full w-full flex">
        <form className="max-w-sm m-auto flex flex-col" onSubmit={handleSubmit}>
          <Heading asChild size="lg" className="mb-1">
            <h1>Editar usuário</h1>
          </Heading>

          <Text className="mb-3">
            Insira os dados e edite um usuário na aplicação
          </Text>

          <label htmlFor="oldName" className="mt-5 flex flex-col gap-2">
            <Text className="font-semibold">Digite o nome antigo</Text>

            <TextInput.Root>
              <TextInput.Icon>
                <User />
              </TextInput.Icon>
              <TextInput.Input
                value={oldName}
                onChange={(e) => setOldName(e.target.value)}
                placeholder="Digite o nome antigo"
                id="oldName"
              />
            </TextInput.Root>
          </label>

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

          <Button className="mt-5">Cadastrar</Button>
        </form>
      </main>
    </section>
  )
}
