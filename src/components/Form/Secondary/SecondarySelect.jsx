import "./SecondarySelect.css"

const SecondarySelect = ({value, label, size}) => {

    return(
        <div className="secondary-select-container">
            <label className="secondary-select-label" htmlFor="">{label}</label>
            <select className="secondary-select" style={{width: size}} name="" id="" required>
                <option value="">{value}</option>
            </select>
        </div>
    )
}

export default SecondarySelect