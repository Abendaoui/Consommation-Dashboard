import { Navigate, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, CustomerLayout, AdminLayout } from '../views/layouts'
import Login from '../views/pages/Auth/Login'
import {
  Dashboard,
  Annees,
  Consommations,
  Departments,
  Excels,
  Graphs,
  Operateurs,
  Produits,
  Regions,
  Tables,
} from '../views/pages/Admin'
import { FormData, TableData, GraphData } from '../views/pages/Customers'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to={'/login'} />,
      },
      {
        path: '/login',
        element: <Login />,
        index: true,
      },
    ],
  },
  {
    path: '/',
    element: <CustomerLayout />,
    children: [
      {
        path: '/formdata',
        element: <FormData />,
        index: true,
      },
      {
        path: '/tabledata',
        element: <TableData />,
      },
      {
        path: '/graphdata',
        element: <GraphData />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
        index: true,
      },
      {
        path: 'annees',
        element: <Annees />,
      },
      {
        path: 'departements',
        element: <Departments />,
      },
      {
        path: 'regions',
        element: <Regions />,
      },
      {
        path: 'consommations',
        element: <Consommations />,
      },
      {
        path: 'operateurs',
        element: <Operateurs />,
      },
      {
        path: 'produits',
        element: <Produits />,
      },
      {
        path: 'tables',
        element: <Tables />,
      },
      {
        path: 'graphs',
        element: <Graphs />,
      },
      {
        path: 'excels',
        element: <Excels />,
      },
    ],
  },
  {
    path: '*',
    element: 'Not Found',
  },
])

export default router
