import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/authService'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(email, password)
      navigate('/')
    } catch {
      setError('Credenciales incorrectas')
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-16 bg-gray-800 p-6 rounded shadow">
      <h2 className="text-xl mb-4 text-indigo-400">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full p-2 rounded bg-gray-700 text-white"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-2 rounded bg-gray-700 text-white"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-full bg-indigo-500 py-2 rounded">
          Entrar
        </button>

        {error && <p className="text-red-400">{error}</p>}
      </form>
    </div>
  )
}
