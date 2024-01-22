import '../../../styles/auth/Dashboard.css'
import { useAuthStore } from '../../../state'
function Dasboard() {
  const name = useAuthStore.getState().user?.username
  const role = useAuthStore.getState().user?.role
  return (
    <div>
      <p className='text'>Hola</p>
      <p className='text'>{name}</p>
      <p className='text'>{role}</p>
    </div>
  )
}

export default Dasboard