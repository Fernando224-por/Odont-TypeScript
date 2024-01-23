/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../state"
import { useEffect } from "react"

function ProtectedRoute() {
  const loading = useAuthStore(store => store.loading)
  const isAuthenticated = useAuthStore (store => store.isAuthenticated)
  const verifyToken = useAuthStore ( store => store.verifyLogin)
  useEffect(() => {
    verifyToken()
  },[])
  if ( loading ) {
    return <div>loading ...</div>
  }
  if ( !loading && !isAuthenticated  ) {
    return <Navigate to='/'  replace/>  
  }

  return (
    <Outlet />
  )
}

export default ProtectedRoute