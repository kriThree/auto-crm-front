import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Main } from '../pages/main/Main'
import { paths } from '../../config/paths'
import { Autoservices } from '../pages/autoservices/Autoservices'
import { Cars } from '../pages/cars/Cars'
import NotFound from '../pages/notFound/NotFound'


const router = createBrowserRouter([
  {
    path: paths.autoservices.from,
    element: <Autoservices />,
  },
  {
    path: paths.cars.from,
    element: <Cars />,
  },
  {
    path: paths.home.from,
    element: <Main />,
  },
  {
    path: paths.notFound.from,
    element: <NotFound />,
  }
],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true
    }
  })

export const Router = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true, }} />
  )
}


