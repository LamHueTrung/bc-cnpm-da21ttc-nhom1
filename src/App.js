import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Route,
} from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from '../src/pages/Login';
import Index from '../src/pages/home';
import XulyLogin from '../src/pages/xulylogin';


const router = createBrowserRouter([
    
    {
        path: '/admin',
        element: <Login />,
    },
    {
        path: '/xuly/',
        element: <XulyLogin />,
    },
    {
        path: '/',
        element: <Index />,
    },
]);
function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
