import '../styles/auth/navBarAuth.css'
import SideMenuItem from './sideMenuItem'
import { useAuthStore } from '../state'
interface Props {
  useName?: string
}

interface propsItem {
  title: string,
  subtitle: string
  href: string
}


const menuItems: propsItem[] = [
  {title: 'Dashboard', subtitle: 'Este es tu panel', href: '/algo1'},
  {title: 'Tus Citas', subtitle: 'Pide o observa tus citas', href: '/algo2'},
  {title: 'Agendas', subtitle: 'Mira las agendas', href: '/algo3'},
]

const NavBarAuth = ({ useName }: Props) => {
  const logOut = useAuthStore(state => state.logOutUser)
  return (
    <>
    <div className='colorBar'>
      <div className='itemsMenu'>
        <a className='logo'>Odont</a>
        <div className='userName'>
          Bienvenido {useName}
        </div>
        {
          menuItems.map( item  => (
            <SideMenuItem key={item.href} {...item} />
          ))
        }
        <a className='opcItem' onClick={logOut}>
          <p className='opcItemTitle'>LogOut</p>
          <p className='opcItemSubTitle'>Cerrar Sesión</p>
        </a>
      </div>
    </div>
    </>
  )
}

export default NavBarAuth