import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import UsersForm from "./views/UsersForm.jsx";


const router = createBrowserRouter([
    {
        path:'/',
        element: <DefaultLayout />,
        children: [
            {
              path: '/',
              element: <Navigate to="/users" />
            },
            {
                path:'/dashboard',
                element: <Dashboard />
            },
            {
                path:'/users',
                element: <Users />
            },
            {
                path:'/users/new',
                element: <UsersForm key="userCreate" />
            },
            {
                path:'/users/:id',
                element: <UsersForm key="userUpdate" />
            },
        ]
    },
    {
        path:'/',
        element: <GuestLayout />,
        children: [
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/signup',
                element: <Signup />
            },
        ]
    },
    {
        path:'*',
        element: <NotFound />
    },
])

export default router;
