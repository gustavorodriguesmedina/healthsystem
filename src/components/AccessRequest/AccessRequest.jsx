import "./AccessRequest.css"

const AccessRequest = ({userName, role, cpf, nickName, onOpenPopup}) => {

    const handleRequestClick = () => {
        onOpenPopup();
    };

    return(
        <div className="access-request-container" onClick={handleRequestClick}>
            <div className="access-request-content">
                <h3 className="access-request-title">{userName}</h3>
                <span>CPF: {cpf}</span>
                <span className="access-request-unit">Tipo: {role}</span>
            </div>
            <div className="access-request-image">{nickName}</div>
        </div>
    )
}

export default AccessRequest