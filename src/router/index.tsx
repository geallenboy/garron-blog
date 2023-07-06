import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router'

import App from '@/views/App'
import Page404 from '@/views/result/page404'

export const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-gray-100 text-black dark:bg-neutral-900 dark:text-gray-100"></div>}>
      <Component {...props} />
    </Suspense>
  )
}

const Home = Loadable(lazy(() => import('@/views/home')))


export const constantRoutes: any[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      }
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
]

const RouterView = () => {
  return useRoutes(constantRoutes)
}

export default RouterView
