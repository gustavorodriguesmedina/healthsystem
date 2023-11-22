import "./AppointmentPopup.css"

import AppointmentIcon from "../AppointmentIcon/AppointmentIcon"

import TertiaryButton from "../Form/Tertiary/TertiaryButton"
import SecondarySelect from "../Form/Secondary/SecondarySelect"

import AppointmentIconSvg from '../../assets/icons/schedule-icon.svg'
import CloseIcon from "../../assets/icons/close-icon.svg"

const AppointmentPopup = ({onClose}) => {

    return(
        <div className="appointment-popup-container">
            <div className={`${'appointment-popup-content'} ${'container'} ${'anime-up'}`}>
                <div className="appointment-popup-close">
                    <img onClick={onClose} src={CloseIcon} alt="" />
                </div>
                <div className="appointment-popup-header">
                    <AppointmentIcon appointmentIcon={AppointmentIconSvg}/>
                    <h1>Solicitação de Agendamento</h1>
                </div>
                <div className="appointment-popup-text">
                    <span className="appointment-popup-text-name">Gustavo Medina</span>
                    <div className="appointment-popup-text-details">
                        <span>CPF:</span>
                        <span>000.000.000-00</span>
                    </div>
                    <div className="appointment-popup-text-details">
                        <span>Unidade:</span>
                        <span>Unidade Básica de Saúde de Entre Folhas - Centro</span>
                    </div>
                </div>
                <form action="" className="appointment-popup-form">

                    <SecondarySelect value="Dr. Rick Sanchez" label="Médico"/>
                    <div className="appointment-popup-form-date">
                        <SecondarySelect value="20/12/2023" label="Data" size="160px"/>
                        <SecondarySelect value="10:00" label="Hora" size="160px"/>
                    </div>
                    <div className="appointment-popup-form-button">
                        <TertiaryButton text="Recusar" backgroundColor='red'/>
                        <TertiaryButton text="Agendar" backgroundColor='green'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AppointmentPopup