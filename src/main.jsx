import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import FirebaseProvider from './AuthProvider/FirebaseProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <FirebaseProvider>
   <RouterProvider router={router} />
   </FirebaseProvider>
  </React.StrictMode>
)
