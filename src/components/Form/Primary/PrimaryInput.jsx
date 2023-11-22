import "./PrimaryInput.css"

const PrimaryInput = ({placeholder, type}) => {
    return(
        <div className="primary-input-container">
            <input className="primary-input" placeholder={placeholder} type={type} required/>
        </div>
    )
}

export default PrimaryInput