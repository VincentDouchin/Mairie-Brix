import App from './App'
import Room from './Room'
import FourOfour from './404'
const routes = [
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/:Room',
        element: <Room />
    }, {
        path: '/*',
        element: <FourOfour />
    }
]
export default routes