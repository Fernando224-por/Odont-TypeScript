import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./views/guestPages/HomePage"
import LoginPage from "./views/guestPages/LoginPage"
import ProtectedRoute from "./middleware/routes/ProtectedRoute"
import Dashboard from "./views/auth/Dashboard"
function App() {
  return (
    <BrowserRouter>
    

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
