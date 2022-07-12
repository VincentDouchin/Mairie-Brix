import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactLocation, Router, Outlet } from '@tanstack/react-location'
import Header from './Header'
import routes from './routes'
import './index.css'
const reactLocation = new ReactLocation()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Router
      location={reactLocation}
      routes={routes}
    >
      <Outlet />
    </Router>
  </React.StrictMode>
)
