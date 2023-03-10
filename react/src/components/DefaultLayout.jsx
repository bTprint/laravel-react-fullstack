import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import {useEffect} from "react";
import axiosClient from "../axios-client.js";

export default function DefaultLayout() {
    const {user, token, setUser, setToken} = useStateContext()

    if (!token) {
        return <Navigate to="/login" />
    }

    useEffect(() => {
        axiosClient.get('/user')
            .then(({data}) => {
                setUser(data)
            })
    }, [])

    const onLogout = (ev) => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then (() => {
                setUser({})
                setToken(null)
            })
    }

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/Dashboard">Tabloul de bord</Link>
                <Link to="/Users">Utilizatori</Link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        {user.name}
                        &nbsp;
                        <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
