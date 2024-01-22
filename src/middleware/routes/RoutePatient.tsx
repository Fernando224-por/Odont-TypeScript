import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../state"

const RoutePatient = () => {
  const role = useAuthStore.getState().user?.role
  if ( !role ) {
    return <Navigate to='/'  replace/>
  }
  if ( role === 'ADMINISTRADOR' || role === 'ODONTOLOGO' ) {
    return <Navigate to='/'  replace/>
  }
  return (
    <Outlet />
  )
}

export default RoutePatient