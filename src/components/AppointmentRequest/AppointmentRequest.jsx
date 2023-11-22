import NicknameIcon from "../NicknameIcon/NicknameIcon"
import "./AppointmentRequest.css"

const AppointmentRequest = ({userName, unit, cpf, onOpenPopup}) => {

    const handleRequestClick = () => {
        onOpenPopup();
    };

    return(
        <div className="appointment-request-container" onClick={handleRequestClick}>
            <div className="appointment-request-content">
                <h3 className="appointment-request-name">{userName}</h3>
                <span>CPF: {cpf}</span>
                <span className="appointment-request-unit">{unit}</span>
            </div>
            <NicknameIcon username="Gustavo Medina" />
        </div>
    )
}

export default AppointmentRequest