import "./SecondaryCheckbox.css"

const SecondaryCheckbox = ({label, icon, id}) => {
    return(
        <div className="secondary-checkbox-container">
            <input className="secondary-checkbox" type="checkbox" id={id}/>
            <div className="secondary-checkbox-label-container">
                <img src={icon} alt="" />
                <label htmlFor={id}>{label}</label>
            </div>
        </div>
    )
}

export default SecondaryCheckbox