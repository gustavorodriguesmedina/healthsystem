import "./NewDoctor.css"

import PrimaryButton from "../../components/Form/Primary/PrimaryButton"
import SecondaryInput from "../../components/Form/Secondary/SecondaryInput"
import MainHeader from "../../components/Header/MainHeader/MainHeader"

const NewDoctor = () => {
    return(
        <>
            <MainHeader path="/services" username="Gustavo Medina" description="Cadastre um novo m�dico."/>
            <main className={`${'new-doctor-container'} ${'container'} ${'anime-left'}`}>
                <SecondaryInput label="Nome Completo" type="text"/>
                <SecondaryInput label="Email" type="text"/>
                <SecondaryInput label="Data de Nascimento" type="text"/>
                <SecondaryInput label="CPF" type="text"/>
                <SecondaryInput label="Endereço" type="text"/>
                <SecondaryInput label="Senha" type="password"/>
                <SecondaryInput label="Confirmar Senha" type="password"/>
                <PrimaryButton text="Cadastrar Médico"/>
            </main>
        </>
    )
}

export default NewDoctor