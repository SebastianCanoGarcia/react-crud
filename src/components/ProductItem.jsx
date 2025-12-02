import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem({ product, onDelete }) {
  return (
    <div className="bg-white shadow rounded p-4 flex justify-between items-center hover:shadow-md transition">
      <div>
        <h3 className="font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-600">SKU: {product.sku}</p>
        <p className="text-gray-600">Precio: ${product.price}</p>
        <p className="text-gray-600">Cantidad: {product.quantity}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-500 transition"
          onClick={() => onDelete(product.id)}
        >
          Eliminar
        </button>
        <Link
          to={`/edit/${product.id}`}
          className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
        >
          Editar
        </Link>
      </div>
    </div>
  )
}
