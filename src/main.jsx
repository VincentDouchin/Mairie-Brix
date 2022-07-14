import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactLocation, Router, Outlet } from '@tanstack/react-location'
import { Box, Container } from '@mui/material'
import Header from './Header'
import routes from './routes'
import './index.css'
const reactLocation = new ReactLocation()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router
      location={reactLocation}
      routes={routes}
    >
      <Header />
      <Box sx={{ flexGrow: 1 }}>

        <Container maxWidth="sm" style={{ marginTop: '1em' }} >
          <Outlet />
        </Container >
      </Box >
    </Router>
  </React.StrictMode>
)
