import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductEdit from './pages/ProductEdit'
import ProductCreate from './pages/ProductCreate'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <header className="bg-gray-800 shadow">
        <div className="max-w-5xl mx-auto py-4 px-4">
          <Link to="/" className="text-2xl font-bold text-indigo-400">
            Inventory Manager Pro
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/create" element={<ProductCreate />} />
          <Route path="/edit/:id" element={<ProductEdit />} />
        </Routes>
      </main>
    </div>
  )
}
