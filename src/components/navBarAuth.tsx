import '../styles/auth/navBarAuth.css'
import { useAuthStore } from '../state'
const NavBarAuth = () => {
  const logOut = useAuthStore(state => state.logOutUser)
  return (
    <>
      <div className='disposition'>
        <a href="#" className="logo">Odonto</a>
        <div className="navbar-btn"></div>
        <div className="menu">
          <div className="menu-items">
            <a onClick={logOut}> Cerrar Sesión</a>
          </div>
        </div>
      </div>

    </>
  )
}

export default NavBarAuth