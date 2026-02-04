import { createBrowserRouter, Navigate } from 'react-router'
import AppLayout from '@/layouts/AppLayout'
import IndexPage from '@/pages/IndexPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
])
