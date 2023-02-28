import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [errors, setErrors] = useState(null);
    const {setUser, setToken} = useStateContext()
    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }
        console.log(payload);
        axiosClient.post('/signup', payload)
            .then(({data}) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                    setErrors(response.data.errors)
                }
            })
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onsubmit}>
                    <h1 className="title">
                        Înregistrează-ți contul
                    </h1>
                    {errors && <div className="alert">
                        {Object.keys(errors).map(key => (
                            <p key={key}>{errors[key][0]}</p>
                            ))}
                    </div>
                    }

                    <input ref={nameRef} type="text" placeholder="Nume, Prenume" autoComplete="on" />
                    <input ref={emailRef} type="email" placeholder="Adresă Email"  autoComplete="on" />
                    <input ref={passwordRef} type="password" placeholder="Parola" autoComplete="off" />
                    <input ref={passwordConfirmationRef} type="password" placeholder="Confirmă Parola" autoComplete="off" />
                    <button className="btn btn-block">Înregistrează-te</button>
                    <p className="message">
                        Ai un cont deja? <Link to="/login">Autentifica-te aici</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
