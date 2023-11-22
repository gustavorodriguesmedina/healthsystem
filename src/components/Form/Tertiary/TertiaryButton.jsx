import "./TertiaryButton.css"

const TertiaryButton = ({text, backgroundColor}) => {

    if(backgroundColor === "green"){
        backgroundColor = "var(--color-accept)";
    } else if(backgroundColor === "red"){
        backgroundColor = "var(--color-deny)";
    } else if(backgroundColor === "gray"){
        backgroundColor = "var(--color-blocked)";
    }

    return(
        <button className="tertiary-button" style={{background: backgroundColor}}>{text}</button>
    )
}

export default TertiaryButton