import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {Link} from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getUsers();
    }, [])

    const onDelete = (u) => {
        if(window.confirm("Esti sigur ca vrei sa stergi acest user din Baza de date?")) {
            return
        }

        axiosClient.delete(`/users/${u.id}`)
            .then(() => {
                //TODO show notification
                getUsers()
            })
    }

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/users')
            .then(({data}) => {
                setLoading(false)
                setUsers(data.data)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>Users</h1>
                <Link to="/users/new" className="btn-add">Adaugă</Link>
            </div>
            <div className="card animated fadeInDown">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nume</th>
                            <th>Email</th>
                            <th>Data creării</th>
                            <th>Acțiuni</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map(u => (
                        <tr>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.created_at}</td>
                            <td>
                                <Link className="btn-edit" to={'/users/'+u.id}>Editeaza</Link>
                                &nbsp;
                                <button onClick={ev => onDelete(u)} className="btn-delete">Sterge</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
