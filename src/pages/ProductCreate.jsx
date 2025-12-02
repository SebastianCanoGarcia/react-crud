import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductForm from '../components/ProductForm'
import { createProduct } from '../services/productService'

export default function ProductCreate() {
  const navigate = useNavigate()

  const initial = { name: '', sku: '', price: 0, quantity: 0, category: '' }

  const handleSubmit = async (data) => {
    await createProduct(data)
    navigate('/')
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Crear producto</h2>
      <ProductForm initialValues={initial} onSubmit={handleSubmit} />
    </div>
  )
}
