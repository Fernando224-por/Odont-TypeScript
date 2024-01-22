import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./views/guestPages/HomePage"
import LoginPage from "./views/guestPages/LoginPage"
import ProtectedRoute from "./middleware/routes/ProtectedRoute"
import RouteAdministrator from "./middleware/routes/RouteAdministrator"
import RouteOdont from "./middleware/routes/RouteOdont"
import RoutePatient from "./middleware/routes/RoutePatient"
import Dasboard from "./views/auth/Admin/adminDasboard"
import OdontDashboard from "./views/auth/Odont/odontDashboard"
import PatientDashboard from "./views/auth/Patient/PatientDashboard"
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>

          <Route element={<RouteAdministrator />}>
            <Route path="/AdminRoute" element={<Dasboard />} />
          </Route>

          <Route element={<RouteOdont />}>
            <Route path="/Odont" element={<OdontDashboard />} />
          </Route>

          <Route element={<RoutePatient />}>
            <Route path="/Patient" element={<PatientDashboard />} />
          </Route>

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
