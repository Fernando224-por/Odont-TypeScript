import { StateCreator, create } from "zustand"
import { AuthStatus, User, userLog } from "../interfaces"
import { login } from "../API/auth"
import { devtools, persist } from "zustand/middleware"

export interface authState {
  isAuthenticated: AuthStatus,
  loading: boolean,
  user?: User

  loginUser: (data: userLog) => Promise<void>
}

const storeAPI: StateCreator<authState> = (set) => ({
  isAuthenticated: "Unauthorized",
  loading: false,
  user: undefined,
  loginUser: async (data: userLog) => {
    try {
      const res = await login (data)
      set ({ isAuthenticated: "Authorized", loading: true, user: res.data  })
      console.log('logueado')
    } catch (error) {
      set ({ isAuthenticated: "Unauthorized", loading: false, user: undefined, loginUser: undefined  })
      console.log('No Logueado')
    }
  }
})

export const useAuthStore = create<authState>()(
  devtools(
    persist(
      storeAPI,
      {
        name:'user-Store'
      }
    )
  )
)