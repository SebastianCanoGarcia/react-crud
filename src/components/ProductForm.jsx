import React, { useState } from 'react'

export default function ProductForm({ initialValues, onSubmit }){
  const [form, setForm] = useState(initialValues)

  const handle = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: name === 'price' || name === 'quantity' ? Number(value) : value }))
  }

  const submit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow max-w-md">
      <label className="block mb-2">
        <div className="text-sm font-medium">Nombre</div>
        <input required name="name" value={form.name} onChange={handle} className="w-full border px-2 py-1 rounded" />
      </label>

      <label className="block mb-2">
        <div className="text-sm font-medium">SKU</div>
        <input required name="sku" value={form.sku} onChange={handle} className="w-full border px-2 py-1 rounded" />
      </label>

      <label className="block mb-2">
        <div className="text-sm font-medium">Categoría</div>
        <input name="category" value={form.category} onChange={handle} className="w-full border px-2 py-1 rounded" />
      </label>

      <div className="grid grid-cols-2 gap-2">
        <label className="block mb-2">
          <div className="text-sm font-medium">Precio</div>
          <input required name="price" type="number" step="0.01" value={form.price} onChange={handle} className="w-full border px-2 py-1 rounded" />
        </label>

        <label className="block mb-2">
          <div className="text-sm font-medium">Cantidad</div>
          <input required name="quantity" type="number" value={form.quantity} onChange={handle} className="w-full border px-2 py-1 rounded" />
        </label>
      </div>

      <div className="mt-4">
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Guardar</button>
      </div>
    </form>
  )
}
