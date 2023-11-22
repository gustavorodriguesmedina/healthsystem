import './NextAppointment.css'

import AppointmentIcon from '../AppointmentIcon/AppointmentIcon'

import AppointmentIconSvg from '../../assets/icons/schedule-icon.svg'

const NextAppointment = ({date, unit}) => {
    return(
        <div className='next-appointment container'>
            <div className='next-appointment-container'>
                <AppointmentIcon appointmentIcon={AppointmentIconSvg}  />
                <div className='next-appointment-text'>
                    <h3>Próxima consulta</h3>
                    <span>{date}</span>
                    <span>{unit}</span>
                </div>
            </div>
        </div>
    )
}

export default NextAppointment