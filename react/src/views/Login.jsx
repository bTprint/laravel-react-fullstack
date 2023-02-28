import {Link} from "react-router-dom";

export default function Login() {

    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">
                        Log in to your account.
                    </h1>
                    <input type="email" placeholder="E-Mail" autoComplete="on" />
                    <input type="password" placeholder="Password" autoComplete="on" />
                    <button className="btn btn-block">Sign in</button>
                    <p className="message">
                        Not registered? <Link to="/signup">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
