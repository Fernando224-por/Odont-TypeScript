import '../../styles/auth/Dashboard.css'
import NavBar from '../../components/NavBar'
import { useAuthStore } from '../../state'
const Dashboard = () => {
  const name = useAuthStore.getState().user?.username
  return (
    <>
      <NavBar />
      <div>
        <p className='text'>Bienvenido { name }</p>
      </div>
    </>

  )
}

export default Dashboard