import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './App.css'
import Root from './pages/Root'
import DashboardPage from './pages/Dashboard'
import ProductPage from './pages/Product'
import ProductDetail from './pages/ProductDetail'

const mainRoutes = [
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'product', element: <ProductPage />, },
      { path: 'product/:id', element: <ProductDetail />, },
    ]
  }
]

const router = createBrowserRouter(mainRoutes)
function App() {
  return <RouterProvider router={router} />
}

export default App
