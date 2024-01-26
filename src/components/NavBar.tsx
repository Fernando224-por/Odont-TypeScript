import '../styles/shared/navBar.css'
import { useAuthStore } from '../state'
function NavBar() {
  const logOut = useAuthStore(state => state.logOutUser)
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox"  />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="brand">
            <h1>ODONT</h1>
          </div>
          <div className="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a onClick={logOut}>Cerrar Sesión</a></li>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar