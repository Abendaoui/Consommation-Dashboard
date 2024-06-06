import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <QueryClientProvider client={queryClient}>
      </QueryClientProvider>
    </RouterProvider>
  </React.StrictMode>
)
