import "./Appointment.css"

import AppointmentIcon from "../AppointmentIcon/AppointmentIcon"
import AppointmentIconSvg from '../../assets/icons/schedule-icon.svg'

const Appointment = ({date, unit, doctor}) => {
    return(
        <div className='appointment'>
            <div className='appointment-container'>
                <AppointmentIcon appointmentIcon={AppointmentIconSvg}  />
                <div className='appointment-text'>
                    <h3>Consulta</h3>
                    <span>{date}</span>
                    <span>{unit}</span>
                    <span>{doctor}</span>
                </div>
            </div>
        </div>
    )
}

export default Appointment