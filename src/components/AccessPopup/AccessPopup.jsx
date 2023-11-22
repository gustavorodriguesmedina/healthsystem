import "./AccessPopup.css"

import TertiaryButton from "../Form/Tertiary/TertiaryButton"

import AppointmentIcon from "../AppointmentIcon/AppointmentIcon"
import AppointmentIconSvg from '../../assets/icons/schedule-icon.svg'
import CloseIcon from '../../assets/icons/close-icon.svg'


const AccessPopup = ({onClose}) => {
    return(
        <div className="access-popup-container">
            <div className={`${'access-popup-content'} ${'container'} ${'anime-up'}`}>
                <div className="access-popup-close">
                    <img onClick={onClose} src={CloseIcon} alt="" />
                </div>
                <div className="access-popup-header">
                    <AppointmentIcon appointmentIcon={AppointmentIconSvg}/>
                    <h1>Solicitação de Acesso</h1>
                </div>
                <div className="access-popup-text">
                    <span className="access-popup-text-name">Gustavo Medina</span>
                    <div className="access-popup-text-details">
                        <span>CPF:</span>
                        <span>000.000.000-00</span>
                    </div>
                    <div className="access-popup-text-details">
                        <span>Tipo:</span>
                        <span>Profissional</span>
                    </div>
                </div>
                <form action="" className="access-popup-form">
                    <TertiaryButton text="Recusar" backgroundColor='red'/>
                    <TertiaryButton text="Aceitar" backgroundColor='green'/>
                </form>
            </div>
        </div>
    )
}

export default AccessPopup