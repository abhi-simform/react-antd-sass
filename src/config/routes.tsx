import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from '@/pages/auth'
import Signin from '@/pages/auth/signin'
import Signup from '@/pages/auth/signup'
import NotFound from '@/pages/NotFound'
import DashboardLayout from '@/pages/dashboard'
import Home from '@/pages/dashboard/home/page'

export const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    path: '/',
    children: [
      {
        path: '/',
        index: true,
        element: <Home />
      }
    ]
  },
  {
    element: <AuthLayout />,
    path: '/auth',
    children: [
      {
        path: 'signin',
        element: <Signin />
      },
      {
        path: 'signup',
        element: <Signup />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
