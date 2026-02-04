import { RouterProvider } from 'react-router'
import { appRouter } from './router/app.router'

function MonitifyApp() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default MonitifyApp
