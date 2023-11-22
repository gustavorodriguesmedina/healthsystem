import "./NicknameIcon.css"

const NicknameIcon = ({username}) => {

    let nickname = username.split(' ').map(splits => splits[0]).join('.');

    return(
        <div className="nickname-icon">{nickname}</div>
    )
}

export default NicknameIcon