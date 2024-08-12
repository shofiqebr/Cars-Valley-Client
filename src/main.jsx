import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import AuthProviders from './providers/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <div className='max-w-screen-2xl mx-auto'>

        <RouterProvider router={router} />
      </div>
    </AuthProviders>
  </React.StrictMode>,
)
