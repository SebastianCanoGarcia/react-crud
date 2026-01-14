import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductEdit from './pages/ProductEdit'
import ProductCreate from './pages/ProductCreate'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { isLogged, logout } from './services/authService'
import { useNavigate } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <header className="bg-gray-800 shadow">
        <div className="max-w-5xl mx-auto py-4 px-4 flex justify-between">
          <Link to="/" className="text-2xl font-bold text-indigo-400">
            Inventory Manager Pro
          </Link>

          {isLogged() && (
            <button
              onClick={() => {
                logout()
                navigate('/login')
              }}
              className="text-sm text-gray-300 hover:text-white"
            >
              Logout
            </button>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <ProductCreate />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <ProductEdit />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  )
}
