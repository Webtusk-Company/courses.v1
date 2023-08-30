import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Dashboard } from './pages/Dashboard.jsx';
import { Courses } from './pages/Courses.jsx';
import { Website } from './pages/Website.jsx';
import { Settings } from './pages/Settings.jsx';
import { Profile } from './pages/Profile.jsx';
import {Provider} from "react-redux"
import { store } from './app/store.js';

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
      },
      {
        path: "/website",
        element: <Website></Website>
      },
      {
        path: "/settings",
        element: <Settings></Settings>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider
    router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
