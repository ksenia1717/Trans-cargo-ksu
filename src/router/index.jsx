// import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../components/App/App';

import Home from '../pages/Home/Home' 
import Price from '../pages/Price/Price'
import Calculator from '../pages/Calculator/Calculator'
import Location from '../pages/Location/Location'
import DangerousCargo from '../pages/DangerousCargo/DangerousCargo';
import Application from '../pages/Application/Application';



const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {index: true, element: <Home/>},
            {path: 'prices', element: <Price/>},
            {path: 'calculator', element: <Calculator/>},
            {path: 'location', element:<Location/>},
            {path: 'dangerous-сargo', element: <DangerousCargo/>},
            {path: 'application', element: <Application/>},

        ]
    }
])

export const AppRouter = () => {
    return <RouterProvider router = {router}/>
}

export default router;