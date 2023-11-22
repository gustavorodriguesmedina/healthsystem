import "./Register.css"

import AuthenticationHeader from "../../components/Header/AuthenticationHeader/AuthenticationHeader"
import PrimaryInput from "../../components/Form/Primary/PrimaryInput"
import PrimaryButton from "../../components/Form/Primary/PrimaryButton"

import PrimaryCheckbox from "../../components/Form/Primary/PrimaryCheckbox"

const Register = () => {

    return(
        <>
            <AuthenticationHeader/>
            <main className="register-content anime-left">
                <h1 className="register-title">SSE</h1>
                <h1 className="register-form-title">Crie sua conta</h1>
                <form action="" className="register-form">
                    <PrimaryInput placeholder="Nome Completo" type="text"/>
                    <PrimaryInput placeholder="Email" type="text"/>
                    <PrimaryInput placeholder="Data de Nascimento" type="text"/>
                    <PrimaryInput placeholder="CPF" type="text"/>
                    <PrimaryInput placeholder="Endereço" type="text"/>
                    <PrimaryInput placeholder="Senha" type="password"/>
                    <PrimaryInput placeholder="Confirmar Senha" type="password"/>
                    <div className="register-checkbox">
                        {/* <SecondaryCheckbox id="patient" label="Paciente" icon={PatientIcon}/>
                        <SecondaryCheckbox id="professional" label="Profissional" icon={ProfessionalIcon}/> */}
                        <PrimaryCheckbox group="register" label="Paciente" id="patient"/>
                        <PrimaryCheckbox group="register" label="Profissional" id="professional"/>
                    </div>
                    <PrimaryButton text="Solicitar Acesso" />
                </form>
            </main>
        </>
    )
}

export default Register