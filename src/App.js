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

import Tintuc from '../src/pages/Student/tintuc';
import TintucAD from '../src/pages/Admin/tintuc';
import TintucGV from '../src/pages/Teacher/tintuc';

import DonThuctap from '../src/pages/Student/dondangky';
import DonThucTapGV from '../src/pages/Teacher/quanlythuctap';
import ThongTinGV from '../src/pages/Teacher/dangkythongtin';

const router = createBrowserRouter([
    {
        path: '/student/dondangky/:slug',
        element: <DonThuctap />,
    },
    {
        path: '/student/tintuc/:slug',
        element: <Tintuc />,
    },
    {
        path: '/admin/tintuc/:slug',
        element: <TintucAD />,
    },
    {
        path: '/teacher/quanlythuctap/:slug',
        element: <DonThucTapGV />,
    },
    {
        path: '/teacher/thongtin/:slug',
        element: <ThongTinGV />,
    },
    {
        path: '/teacher/tintuc/:slug',
        element: <TintucGV />,
    },
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
