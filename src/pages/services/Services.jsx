import "./Services.css"

import MainHeader from "../../components/Header/MainHeader/MainHeader"
import Service from "../../components/Service/Service"

import ServiceAppointmentsIcon from "../../assets/icons/service-appointments-icon.svg"
import ServiceSearchIcon from "../../assets/icons/service-search-icon.svg"
import ServiceNewAppointmentIcon from "../../assets/icons/service-new-appointment-icon.svg"
import ServiceNewDoctorIcon from "../../assets/icons/service-new-doctor-icon.svg"
import ServiceAppointmentsRequestsIcon from "../../assets/icons/service-appointments-requests-icon.svg"
import ServiceNewAppointmentsRequestIcon from "../../assets/icons/service-new-appointment-request-icon.svg"
import ServiceAccessRequestsIcon from "../../assets/icons/service-access-requests-icon.svg"

const Services = () => {
    return(
        <>
            <MainHeader path="/login" username='Gustavo Medina' description='Acesse os serviços disponíveis.' />
            <main className="services-container anime-left"> 
                <Service link="/appointments" serviceIcon={ServiceAppointmentsIcon} title='Consultas'/>
                <Service link="/newappointmentrequest" serviceIcon={ServiceNewAppointmentsRequestIcon} title='Solicitar Agendamento'/>
                <Service link="/newappointment" serviceIcon={ServiceNewAppointmentIcon} title='Agendar Paciente'/>
                <Service link="/appointmentrequests" serviceIcon={ServiceAppointmentsRequestsIcon} title='Solicitações de Agendamento'/>
                <Service link="/accessrequests" serviceIcon={ServiceAccessRequestsIcon} title='Solicitações de Acesso'/>
                <Service link="/searchpatient" serviceIcon={ServiceSearchIcon} title='Buscar Paciente'/>
                <Service link="/newdoctor" serviceIcon={ServiceNewDoctorIcon} title='Cadastrar Médico'/>
            </main>
        </>
    )
}

export default Services