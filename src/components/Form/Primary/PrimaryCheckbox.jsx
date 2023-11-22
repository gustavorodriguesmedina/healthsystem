import "./PrimaryCheckbox.css"

const PrimaryCheckbox = ({group, label, id}) => {
    return(
        <div className="primary-checkbox-container">
            <input name={group} className="primary-checkbox" type="checkbox" id={id}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default PrimaryCheckbox