import axios from './axios.ts'
import { userLog } from '../interfaces/userLog.interface.ts'

export const login = (user: userLog) => axios.post('/login', user)  