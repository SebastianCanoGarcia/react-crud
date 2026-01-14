import axios from '../services/axios'

const API = `${window.location.protocol}//${window.location.hostname}:3000/api/products`;


// Helper: fallback to localStorage if API fails
const withFallback = (fn, fallbackFn) => async (...args) => {
  try {
    return await fn(...args)
  } catch (err) {
    // console.warn('API error, using fallback', err)
    return fallbackFn(...args)
  }
}

// LocalStorage fallback implementation
const LS_KEY = 'rc_products_v1'
const readLocal = () => {
  const raw = localStorage.getItem(LS_KEY)
  if(!raw) return []
  return JSON.parse(raw)
}
const writeLocal = (arr) => localStorage.setItem(LS_KEY, JSON.stringify(arr))

const api = {
  getAll: () => axios.get(API).then(r => r.data),
  getOne: (id) => axios.get(`${API}/${id}`).then(r => r.data),
  create: (p) => axios.post(API, p).then(r => r.data),
  update: (id, p) => axios.put(`${API}/${id}`, p).then(r => r.data),
  remove: (id) => axios.delete(`${API}/${id}`).then(r => r.data),
}

const localService = {
  getAll: async () => {
    const arr = readLocal()
    return arr
  },
  getOne: async (id) => {
    const arr = readLocal()
    return arr.find(x => String(x.id) === String(id))
  },
  create: async (p) => {
    const arr = readLocal()
    const id = arr.length ? Math.max(...arr.map(x=>x.id)) + 1 : 1
    const item = { ...p, id }
    arr.push(item)
    writeLocal(arr)
    return item
  },
  update: async (id, p) => {
    const arr = readLocal()
    const idx = arr.findIndex(x=>String(x.id)===String(id))
    if(idx === -1) throw new Error('Not found')
    arr[idx] = { ...arr[idx], ...p }
    writeLocal(arr)
    return arr[idx]
  },
  remove: async (id) => {
    let arr = readLocal()
    arr = arr.filter(x => String(x.id) !== String(id))
    writeLocal(arr)
    return { success: true }
  }
}

// Wrapped methods with fallback
export const getProducts = withFallback(api.getAll, localService.getAll)
export const getProduct = withFallback(api.getOne, localService.getOne)
export const createProduct = withFallback(api.create, localService.create)
export const updateProduct = withFallback(api.update, localService.update)
export const deleteProduct = withFallback(api.remove, localService.remove)
