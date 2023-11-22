import "./AuthenticationHeader.css"

import PrincipalLogo from '../../../assets/principal-logo.svg'
import { Link } from "react-router-dom"

const AuthenticationHeader = () => {
    return(
        <header className="authentication-header-container">
            <Link to="/login">
                <img src={PrincipalLogo} alt="Logo Sistema de Sa�de Eletr�nico." />
            </Link>
        </header>
    )
}

export default AuthenticationHeader