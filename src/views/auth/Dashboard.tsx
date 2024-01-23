import '../../styles/auth/Dashboard.css'
import { useAuthStore } from '../../state'
const Dashboard = () => {
  const name = useAuthStore.getState().user?.username
  const role = useAuthStore.getState().user?.role
  const closeSession = useAuthStore( state => state.logOutUser )
  return (
    <div>
    <p className='text'>Hola</p>
    <p className='text'>{name}</p>
    <p className='text'>{role}</p>
    <button onClick={closeSession} className='text' > Log Out </button>
  </div>
  )
}

export default Dashboard