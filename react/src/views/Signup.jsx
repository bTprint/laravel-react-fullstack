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
                console.log("POST request sent");

                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                console.log("Can't send POST request");

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
                <form onSubmit={onSubmit}>
                    <h1 className="title">
                        Register your account
                    </h1>
                    {errors && <div className="alert">
                        {Object.keys(errors).map(key => (
                            <p key={key}>{errors[key][0]}</p>
                            ))}
                    </div>
                    }

                    <input ref={nameRef} type="text" placeholder="Name, First name" autoComplete="on" />
                    <input ref={emailRef} type="email" placeholder="E-Mail"  autoComplete="on" />
                    <input ref={passwordRef} type="password" placeholder="Password" autoComplete="off" />
                    <input ref={passwordConfirmationRef} type="password" placeholder="Confirm Password" autoComplete="off" />
                    <button className="btn btn-block">Register</button>
                    <p className="message">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
