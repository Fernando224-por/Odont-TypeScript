import { StateCreator, create } from "zustand"
import { User, userLog } from "../interfaces"
import { logOut, login, verify } from "../API/auth"
import { devtools, persist } from "zustand/middleware"
import Cookies from 'js-cookie'

export interface authState {
  isAuthenticated: boolean,
  loading: boolean,
  user?: User

  loginUser: (data: userLog) => Promise<void>
  logOutUser: () => Promise<void>
  verifyLogin: () => Promise<void>
}

const storeAPI: StateCreator<authState> = (set) => ({
  isAuthenticated: false,
  loading: true,
  user: undefined,
  loginUser: async (data: userLog) => {
    try {
      const res = await login(data)
      set({ isAuthenticated: true, user: res.data })
      console.log('logueado')
    } catch (error) {
      set({ isAuthenticated: false, user: undefined })
      console.log('No Logueado')
    }
  },
  logOutUser: async () => {
    try {
      const res = await logOut()
      if (res.status === 200) {
        set({ isAuthenticated: false, user: undefined })
        Cookies.remove('token')
      }
    } catch (error) {
      console.log(error)
    }

  },
  verifyLogin: async () => {
    const tokenCookie = Cookies.get()
    if ( !tokenCookie.token ) {
      set({isAuthenticated:false, loading: false})
    }
    try {
      const res = await verify(tokenCookie.token)
      if ( !res.data ) {
        set({isAuthenticated:false, loading: false})
        return
      }
      else{
        set({isAuthenticated: true, loading:false})
      }
    } catch (error) {
      set({isAuthenticated:false, loading:false})
    }
  }
})

export const useAuthStore = create<authState>()(
  devtools(
    persist(
      storeAPI,
      {
        name: 'user-Store'
      }
    )
  ),
)