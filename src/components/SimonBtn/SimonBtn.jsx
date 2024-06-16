import "./SimonBtn.css"

function SimonBtn({color, disabled}){
    let allowableColors = ["red", "blue", "green", "yellow"];
    if(color !== "none" && !allowableColors.includes(String(color).trim().toLowerCase())){
        color = "custom";
    }
    return (
    <button
        data-testid={`${color === "none" ? "simon_button" : `${color}_simon_button`}`}
        className={`${color === "none" ? "simon_button" : `${color}_simon_button`}`}
    >

    </button>
    )
}

export default SimonBtn;