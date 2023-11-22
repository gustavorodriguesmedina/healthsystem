import { Link } from 'react-router-dom'
import './Service.css'

const Service = ({serviceIcon, title, link}) => {
    return(
        <Link to={link} className="service-container container">
            <img src={serviceIcon} alt="Ícone de Serviço." />
            <h2>{title}</h2>
        </Link>
    )
} 

export default Service