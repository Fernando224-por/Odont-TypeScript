import axios from './axios.ts'
import { userLog } from '../interfaces/userLog.interface.ts'

export const login = (user: userLog) => axios.post('/login', user)
export const logOut = () => axios.post('/logOut')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const verify = (token: string) => axios.get('/verify',)