import "./Login.css"

import AuthenticationHeader from "../../components/Header/AuthenticationHeader/AuthenticationHeader"
import PrimaryInput from "../../components/Form/Primary/PrimaryInput"
import PrimaryButton from "../../components/Form/Primary/PrimaryButton"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <AuthenticationHeader/>
            <main className="login-content anime-left">
                <h1 className="login-title">SSE</h1>
                <h1 className="login-form-title">Entre em sua conta</h1>
                <form action="" className="login-form">
                    <PrimaryInput placeholder="CPF" type="text"/>
                    <PrimaryInput placeholder="Senha" type="password"/>
                    <PrimaryButton path="/services" text="Entrar" />
                </form>
                <div className="login-register-container">
                    <span className="login-register-question">Não possui conta?</span>
                    <Link className="login-register-link" to="/register" >Registre-se aqui!</Link>
                </div>
            </main>
        </>
    )
}

export default Login