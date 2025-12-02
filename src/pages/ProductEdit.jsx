import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../components/ProductForm'
import { getProduct, updateProduct } from '../services/productService'

export default function ProductEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [initial, setInitial] = useState(null)

  useEffect(() => {
    getProduct(id).then(setInitial).catch(() => {})
  }, [id])

  const handleSubmit = async (data) => {
    await updateProduct(id, data)
    navigate('/')
  }

  if (!initial) return <div className="text-gray-500">Cargando...</div>

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Editar producto</h2>
      <ProductForm initialValues={initial} onSubmit={handleSubmit} />
    </div>
  )
}
