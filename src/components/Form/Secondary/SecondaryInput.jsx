import "./SecondaryInput.css"

const SecondaryInput = ({type, label}) => {
    return (
        <div className="secondary-input-container">
            <label className="secondary-label" htmlFor="">{label}</label>
            <input className="secondary-input" type={type} required/>
        </div>
    )
}

export default SecondaryInput