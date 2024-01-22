import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../state"

function ProtectedRoute() {
  const loading = useAuthStore(store => store.loading)
  const isAuthenticated = useAuthStore (store => store.isAuthenticated)
  if ( loading === false) {
    return <div>loading ...</div>
  }
  if ( !loading && isAuthenticated === "Unauthorized" ) {
    return <Navigate to='/'  replace/>  
  }

  return (
    <Outlet />
  )
}

export default ProtectedRoute