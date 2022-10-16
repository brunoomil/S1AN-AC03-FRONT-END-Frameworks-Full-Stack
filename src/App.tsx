import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./contexts/UserContext"
import { Router } from "./Router"

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Router />
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
