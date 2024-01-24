import '../../styles/auth/Dashboard.css'
import NavBarAuth from '../../components/navbarAuth'
import { useAuthStore } from '../../state'
const Dashboard = () => {
const name = useAuthStore.getState().user?.username
  return (
    <>
      <div>
        <NavBarAuth useName={name} />
      </div>
    </>

  )
}

export default Dashboard