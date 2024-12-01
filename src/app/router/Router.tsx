import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routerPaths } from '../../config/routerPaths'
import { Login, Autoservices, Cars, Main, Register, NotFound } from '../../features'
import useAuth from '../../features/auth/store/auth'

const oprionsRouter = {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true
  }
}
const router = createBrowserRouter([
  {
    path: routerPaths.autoservices.from,
    element: <Autoservices />,
  },
  {
    path: routerPaths.cars.from,
    element: <Cars />,
  },
  {
    path: routerPaths.home.from,
    element: <Main />,
  },
  {
    path: routerPaths.notFound.from,
    element: <NotFound />,
  }
], oprionsRouter
)
const authRouter = createBrowserRouter([
  {
    path: routerPaths.register.from,
    element: <Register />
  },
  {
    path: routerPaths.login.from,
    element: <Login />
  },
])
export const Router = () => {

  const isAuth = useAuth((state) => state.isAuth)

  return (
    <RouterProvider router={isAuth ? router : authRouter} future={{ v7_startTransition: true, }} />
  )
}


