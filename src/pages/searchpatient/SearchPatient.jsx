import "./SearchPatient.css"

import MainHeader from "../../components/Header/MainHeader/MainHeader"
import SecondaryInput from "../../components/Form/Secondary/SecondaryInput"
import Profile from "../../components/Profile/Profile"
import Appointment from "../../components/Appointment/Appointment"

import PatientSearchSvg from "../../assets/icons/patient-search-icon.svg"

const SearchPatient = () => {
    return(
        <>
            {/* <SearchPatientPopup/> */}
            <MainHeader path="/services" username="Gustavo Medina" description="Busque por um paciente."/>
            <main className={`${'search-patient-container'} ${'container'} ${'anime-left'}`}>
                <div className="search-patient-input">
                    <SecondaryInput label="CPF"/>
                    <button className="search-patient-button"><img src={PatientSearchSvg} alt="" /></button>
                </div>
                <div className="search-patient-profile">
                    <Profile username="Gustavo Medina" cpf="000.000.000-00" birthDate="20/10/2002" createdAt="20/10/2023 - 14:00"/>
                </div>
                <div className="search-patient-appointments">
                    <Appointment date="20/10/2023 - 14:00" unit="Unidade Básica de Saúde de Entre Folhas - Centro" doctor="Dr. Rick Sanchez"/>
                    <Appointment date="20/10/2023 - 14:00" unit="Unidade Básica de Saúde de Entre Folhas - Centro" doctor="Dr. Rick Sanchez"/>
                </div>
            </main>
        </>
    )
}

export default SearchPatient