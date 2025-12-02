import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts, deleteProduct } from '../services/productService'
import ProductItem from '../components/ProductItem'

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const load = async () => {
    setLoading(true)
    try {
      const data = await getProducts()
      setProducts(data)
      setError(null)
    } catch (err) {
      setError('No se pudo cargar la API, se usan datos locales.')
      const data = await getProducts()
      setProducts(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar producto?')) return
    await deleteProduct(id)
    load()
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Productos</h1>
        <Link className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow transition" to="/create">
          Crear producto
        </Link>
      </div>

      {error && <div className="bg-yellow-100 p-2 rounded mb-4 text-yellow-800">{error}</div>}

      {loading ? (
        <div className="text-gray-500">Cargando...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.length === 0 && <div className="text-gray-500">No hay productos.</div>}
          {products.map(p => (
            <ProductItem key={p.id} product={p} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  )
}
