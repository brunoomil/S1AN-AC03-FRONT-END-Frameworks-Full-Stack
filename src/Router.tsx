import { Route, Routes } from "react-router-dom"
import { Delete } from "./pages/Delete"
import { Edit } from "./pages/Edit"
import { List } from "./pages/List"
import { Register } from "./pages/Register"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/register" element={<Register />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/delete" element={<Delete />} />
    </Routes>
  )
}
