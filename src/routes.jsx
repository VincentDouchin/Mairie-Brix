import App from './components/App'
import Salle from './components/Salle'
import FourOfour from './components/404'
import Settings from './components/Settings'

const routes = [
    {
        path: '/Mairie-Brix/',
        element: <App />,
    }, {
        path: '/Mairie-Brix/Parametres',
        element: <Settings />
    }, {
        path: '/Mairie-Brix/:Salle',
        element: <Salle />
    }, {
        path: '/Mairie-Brix/*',
        element: <FourOfour />
    },
]
export default routes