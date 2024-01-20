import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./views/guestPages/HomePage"
import LoginPage from "./views/guestPages/LoginPage"
import Dasboard from "./views/auth/Dasboard"
import ProtectedRoute from "./protectedRoute"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dasboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
