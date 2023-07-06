

import React from 'react'
import { Outlet } from 'react-router'
import { ErrorBoundary } from '@/components/error-boudnary'
import { PageError } from '@/components/lib'


function App() {
  return (
    <ErrorBoundary fallbackRender={PageError}>
      <Outlet />
    </ErrorBoundary>
  )
}

export default App
