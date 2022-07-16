import App from './components/App'
import Room from './components/Room'
import FourOfour from './components/404'
const routes = [
    {
        path: '/Mairie-Brix/',
        element: <App />,
    },
    {
        path: '/Mairie-Brix/:Room',
        element: <Room />
    }, {
        path: '/Mairie-Brix/*',
        element: <FourOfour />
    }
]
export default routes