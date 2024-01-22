import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../state"

const RouteOdont = () => {
  const role = useAuthStore.getState().user?.role
  if ( !role ) {
    return <Navigate to='/'  replace/>
  }
  if ( role === 'PACIENTE' || role === 'ADMINISTRADOR' ) {
    return <Navigate to='/'  replace/>
  }
  return (
    <Outlet />
  )
}

export default RouteOdont