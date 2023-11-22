import "./NewAppointmentRequest.css"

import MainHeader from "../../components/Header/MainHeader/MainHeader"
import SecondarySelect from "../../components/Form/Secondary/SecondarySelect"
import PrimaryButton from "../../components/Form/Primary/PrimaryButton"

const NewAppointmentRequest = () => {
    return (
        <>
            <MainHeader path="/services" username="Gustavo Medina" description="Solicite uma nova consulta."/>
            <main className="new-appointment-request-container anime-left">
                <form action="" className="appointment-request-form">
                    <SecondarySelect value="Unidade Básica de Saúde de Entre Folhas - Centro" label="Unidade"/>
                    <PrimaryButton text="Solicitar Agendamento" />
                </form>
            </main>
        </>
    )
}

export default NewAppointmentRequest