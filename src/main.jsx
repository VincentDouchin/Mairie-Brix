import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import './styles/index.css'
import 'firebaseui/dist/firebaseui.css'

import routes from './routes'
import { ReactLocation, Router } from '@tanstack/react-location'

const reactLocation = new ReactLocation()
ReactDOM.createRoot(document.getElementById('root')).render(

  < StrictMode >
    <Router
      location={reactLocation}
      routes={routes}
    >

      <Home />
    </Router>
  </StrictMode >
)
