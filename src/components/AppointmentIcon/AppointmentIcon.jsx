import './AppointmentIcon.css'

const AppointmentIcon = ({appointmentIcon}) => {
    return(
        <div className='appointment-icon-container'>
            <img src={appointmentIcon} alt="Ícone de atendimento." />
        </div>
    )
}

export default AppointmentIcon