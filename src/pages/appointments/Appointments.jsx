import "./Appointments.css"

import Appointment from "../../components/Appointment/Appointment"
import MainHeader from "../../components/Header/MainHeader/MainHeader"

const Appointments = () => {
    return(
        <>
            <MainHeader path="/services" username="Gustavo Medina" description="Veja suas consultas."/>
            <main className={`${'appointments-container'} ${'container'} ${'anime-left'}`}>
                <Appointment date="30/12/2023 - 14:00" unit="Unidade Básica de Saúde de Entre Folhas - Centro" doctor="Dr. Rick Sanchez"/>
                <Appointment date="30/12/2023 - 14:00" unit="Unidade Básica de Saúde de Entre Folhas - Centro" doctor="Dr. Rick Sanchez"/>
                <Appointment date="30/12/2023 - 14:00" unit="Unidade Básica de Saúde de Entre Folhas - Centro" doctor="Dr. Rick Sanchez"/>
            </main>
        </>
    )
}

export default Appointments