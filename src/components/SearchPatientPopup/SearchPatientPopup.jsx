import "./SearchPatientPopup.css"

import AppointmentIcon from "../AppointmentIcon/AppointmentIcon"

import AppointmentIconSvg from '../../assets/icons/schedule-icon.svg'
import TertiaryButton from "../Form/Tertiary/TertiaryButton"
import SecondarySelect from "../Form/Secondary/SecondarySelect"

const SearchPatientPopup = () => {
    return(
        <div className="appointment-popup-container">
            <div className="appointment-popup-content container">
                <div className="appointment-popup-header">
                    <AppointmentIcon appointmentIcon={AppointmentIconSvg}/>
                    <h1>Gerenciar Agendamento</h1>
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

                    <SecondarySelect label="Médico"/>
                    <div className="appointment-popup-form-date">
                        <SecondarySelect label="Data" size="160px"/>
                        <SecondarySelect label="Hora" size="160px"/>
                    </div>
                    <div className="appointment-popup-form-button">
                        <TertiaryButton text="Desmarcar" backgroundColor='red'/>
                        <TertiaryButton text="Salvar" backgroundColor='green'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchPatientPopup