import '../../styles/auth/Dashboard.css'
import NavBarAuth from '../../components/navbarAuth'
import { useAuthStore } from '../../state'
const Dashboard = () => {
const name = useAuthStore.getState().user?.username
  return (
    <>
      <div>
        <NavBarAuth />
      </div>
      <div className='show-info'>
          <p className='text'>Bienvenido { name } </p>
      </div>
    </>

  )
}

export default Dashboard