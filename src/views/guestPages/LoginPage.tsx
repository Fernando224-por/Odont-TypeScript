import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../state"
import '../../Styles/guestPages/loginPage.css'
import { useEffect } from "react"
type Inputs = {
  email: string,
  password: string
}
function LoginPage() {
  const navigate = useNavigate()
  const loginUser = useAuthStore(state => state.loginUser)
  const isAuthenticated = useAuthStore.getState().isAuthenticated
  const { register, handleSubmit, formState: {
    errors
  } } = useForm<Inputs>()
  useEffect(() => {
    if ( isAuthenticated === "Authorized" ) {
      navigate('/Odont')
    }
  }, [isAuthenticated, navigate])
  const sendData = handleSubmit(async(data) => {
    console.log(data)
    try {
    await loginUser(data)
    navigate('/Odont')
    } catch (error) {
      console.error('No se pudo autenticar')
    }
  })
  return (
    <div>

      <form onSubmit={sendData}>
        <h3>Login Here</h3>

        <label htmlFor="username">Email</label>
        <input type="email" {...register('email', {
          required: {
            value: true,
            message: 'email is required'
          }, pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
            message: "This email is invalid"
          }
        })} />
        {
          errors.email && (
            <p className="error-msg">{errors.email.message}</p>
          )
        }

        <label htmlFor="password">Password</label>
        <input type="password" {...register('password', {
          required: {
            value: true,
            message: 'password is required'
          }, minLength: {
            value: 8,
            message: 'Your password need minimun 8 characters'
          }
        })} />
        {
          errors.password && (
            <p className="error-msg">{errors.password.message}</p>
          )
        }
        <button className="btn">Log In</button>
      </form>

      <aside>
        <video src="/vid/fondo.mp4" loop muted autoPlay></video>
      </aside>

    </div>
  )
}

export default LoginPage