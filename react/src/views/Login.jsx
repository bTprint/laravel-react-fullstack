import {Link} from "react-router-dom";

export default function Login() {

    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onsubmit}>
                    <h1 className="title">
                        Autentifică-te în contul tau.
                    </h1>
                    <input type="email" placeholder="Adresă Email" autoComplete="on" />
                    <input type="password" placeholder="Parola" autoComplete="on" />
                    <button className="btn btn-block">Autentifică-te</button>
                    <p className="message">
                        Nu ești înregistrat? <Link to="/signup">Creează un cont.</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
