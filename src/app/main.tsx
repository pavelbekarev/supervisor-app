import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes/router.tsx'
import { RouterProvider } from 'react-router-dom'
import QueryProvider from './providers/QueryProvider/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </StrictMode>,
)
