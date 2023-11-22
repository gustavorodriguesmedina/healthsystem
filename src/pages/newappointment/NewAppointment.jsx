import "./NewAppointment.css"

import SecondaryInput from "../../components/Form/Secondary/SecondaryInput"
import SecondarySelect from "../../components/Form/Secondary/SecondarySelect"
import MainHeader from "../../components/Header/MainHeader/MainHeader"
import PrimaryButton from "../../components/Form/Primary/PrimaryButton"

const NewAppointment = () => {
    return(
        <>
            <MainHeader path="/services" username="Gustavo Medina" description="Agende uma nova consulta."/>
            <main className={`${'new-appointment-container'} ${'container'} ${'anime-left'}`}>
                <form action="" className="appointment-form">
                    <SecondaryInput label="CPF"/>
                    <div className="new-appointment-date">
                        <SecondarySelect value="20/12/2023"  label="Data" size="140px"/>
                        <SecondarySelect value="10:00" label="Hora" size="140px"/>
                    </div>
                    <SecondarySelect value="Unidade Básica de Saúde de Entre Folhas - Centro" label="Unidade"/>
                    <SecondarySelect value="Dr. Rick Sanchez" label="Médico"/>
                    <PrimaryButton text="Cadastrar Consulta" />
                </form>
            </main>
        </>
    )
}

export default NewAppointment