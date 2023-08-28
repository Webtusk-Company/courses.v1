import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Dashboard } from './pages/Dashboard.jsx';
import { Courses } from './pages/Courses.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: '/courses',
        element: <Courses></Courses>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
    router={router}></RouterProvider>
  </React.StrictMode>,
)
