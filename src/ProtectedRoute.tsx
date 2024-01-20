import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "./state"

function ProtectedRoute() {
  const status = useAuthStore(store => store.loading)
  if ( status === false) {
    return <div>loading ...</div>
  }
  if ( !status ) {
    return <Navigate to='/'  replace/>  
  }

  return (
    <Outlet />
  )
}

export default ProtectedRoute