import { Link } from "react-router-dom"
import "./PrimaryButton.css"

const PrimaryButton = ({path, text}) => {
    return(
        <Link to={path} className="primary-button">{text}</Link>
    )
}

export default PrimaryButton