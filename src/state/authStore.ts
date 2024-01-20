import { StateCreator, create } from "zustand"
import { AuthStatus, User } from "../interfaces"
import { userLog, login } from "../API/auth"
import { devtools, persist } from "zustand/middleware"

export interface authState {
  status: AuthStatus,
  loading: boolean,
  user?: User

  loginUser: (data: userLog) => Promise<void>
}

const storeAPI: StateCreator<authState> = (set) => ({
  status: "Unauthorized",
  loading: false,
  user: undefined,
  loginUser: async (data: userLog) => {
    try {
      const res = await login (data)
      set ({ status: "Authorized", loading: true, user: res.data  })
      console.log('logueado')
    } catch (error) {
      set ({ status: "Unauthorized", loading: false, user: undefined, loginUser: undefined  })
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