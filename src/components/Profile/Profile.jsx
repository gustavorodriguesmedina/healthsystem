import "./Profile.css"

import NicknameIcon from "../NicknameIcon/NicknameIcon"


const Profile = ({username, cpf, createdAt, birthDate}) => {
    return(
        <div className="profile-container">
            <NicknameIcon username="Gustavo Medina"/>
            <div className="profile-container-data">
                <h1 className="profile-container-name">{username}</h1>
                <div className="profile-container-details">
                    <span>CPF:</span>
                    <span>{cpf}</span>
                </div>
                <div className="profile-container-details">
                    <span>Data de nascimento:</span>
                    <span>{birthDate}</span>
                </div>
                <div className="profile-container-details">
                    <span>Criado em:</span>
                    <span>{createdAt}</span>
                </div>

            </div>
        </div>
    )
}

export default Profile