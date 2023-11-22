import "./AccessRequests.css"

import MainHeader from "../../components/Header/MainHeader/MainHeader"
import AccessRequest from "../../components/AccessRequest/AccessRequest"
import AccessPopup from "../../components/AccessPopup/AccessPopup"
import { useState } from "react"

const AcessRequests = () => {

    let username = "Gustavo Medina"
    let role = "Profissional"
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
            {isPopupOpen && <AccessPopup onClose={closePopup} />}
            <div className="access-requests-container">
                <MainHeader path="/services" username="Gustavo Medina" description="Aprove um acesso."/>
                <main className="access-requests-content anime-left">
                    <AccessRequest onOpenPopup={openPopup} username={username} nickName={nickName} role={role} cpf={cpf} date={date}/>
                </main>
            </div>
        </>
    )
}

export default AcessRequests