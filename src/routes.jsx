import App from './App'
import Room from './Room'
import FourOfour from './404'
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