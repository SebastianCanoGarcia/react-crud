# React CRUD (Generated)

This is a ready-to-use React CRUD scaffold using **Vite**, **React Router**, **Axios** and **Tailwind CSS**.
It also includes graceful fallback to localStorage if no API is available.

## How to use

1. Copy these files into your existing `react-crud` project (or replace).
2. Install dependencies:

```bash
npm install
```

3. Install Tailwind (already in devDependencies) and init if needed:
No extra init required — the config files are included.

4. Start dev server:

```bash
npm run dev
```

5. Default API base used in `src/services/productService.js` is:
`http://localhost:3000/api/products`
You can change it to your Symfony or Node.js API.

If the API is not available, the app will fallback to using `localStorage` mock data.

## Notes
- This scaffold expects a Vite React setup (index.html and basic files). If you're merging into an existing project, keep your `index.html`, `main.jsx` and `vite` config.
- Tailwind requires the `index.css` to include the directives (included below).
