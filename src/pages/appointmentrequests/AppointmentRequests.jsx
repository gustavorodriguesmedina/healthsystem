import "./AppointmentRequests.css"

import AppointmentRequest from "../../components/AppointmentRequest/AppointmentRequest"
import MainHeader from "../../components/Header/MainHeader/MainHeader"
import AppointmentPopup from "../../components/AppointmentPopup/AppointmentPopup"
import { useState } from "react"

const AppointmentRequests = () => {

    let username = "Gustavo Medina"
    let unit = "Unidade Básica de Saúde de Entre Folhas - Centro"
    let cpf = "000.000.000-00"
    let date = "30/12/2023 - 14:00"
    let nickName = username.split(' ').map(splits => splits[0]).join('.');

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    
    return( 
        <>
            {isPopupOpen && <AppointmentPopup onClose={closePopup} />}
            <div className="appointment-requests-container">
                <MainHeader path="/services" username={username} description="Aprove uma consulta."/>
                <main className="appointment-requests-content anime-left">
                    <AppointmentRequest onOpenPopup={openPopup} username={username} nickName={nickName} unit={unit} cpf={cpf} date={date}/>
                    <AppointmentRequest onOpenPopup={openPopup} username={username} nickName={nickName} unit={unit} cpf={cpf} date={date}/>
                    <AppointmentRequest onOpenPopup={openPopup} username={username} nickName={nickName} unit={unit} cpf={cpf} date={date}/>
                </main>
            </div>
        </>

    )
}

export default AppointmentRequests
