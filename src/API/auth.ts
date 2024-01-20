import axios from './axios.ts'

export interface userLog{
  email: string,
  password: string
}

export const login = (user: userLog) => axios.post('/login', user)  