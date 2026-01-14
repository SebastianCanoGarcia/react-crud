import axios from 'axios'

const API = `${window.location.protocol}//${window.location.hostname}:3000/api/auth`

export const login = async (email, password) => {
  const res = await axios.post(`${API}/login`, { email, password })
  localStorage.setItem('token', res.data.token)
  return res.data
}

export const logout = () => {
  localStorage.removeItem('token')
}

export const isLogged = () => {
  return !!localStorage.getItem('token')
}

export const getToken = () => {
  return localStorage.getItem('token')
}
