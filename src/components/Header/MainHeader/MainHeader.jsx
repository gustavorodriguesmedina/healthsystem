import './MainHeader.css'

import NextAppointment from '../../NextAppointment/NextAppointment'
import { Link, useLocation } from 'react-router-dom'

import PrincipalLogo from '../../../assets/principal-logo.svg'
import ProfileIcon from '../../../assets/icons/profile-icon.svg'

const MainHeader = ({path, username, description}) => {

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header className='main-header-container'>
            <div className='main-header-content container'>
                <Link to={path}>
                    <img className='main-header-profile-image' src={PrincipalLogo} alt="Logo Sistema de Sa˙de EletrÙnico." />
                </Link>
                <div className='main-header-profile'>
                    <div className='main-header-profile-icon'>
                        <img className='main-header-profile-image' src={ProfileIcon} alt="Imagem de perfil." />
                    </div>
                    <div className='main-header-profile-text'>
                        <h1>Ol√°, {username}!</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            {currentPath === '/services' ? <NextAppointment date='10/12/2023 - 14:00' unit='Unidade B√°sica de Sa√∫de de Entre Folhas - Centro' /> : null}
        </header>
    )
}

export default MainHeader