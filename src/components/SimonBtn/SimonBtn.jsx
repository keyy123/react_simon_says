import styles from "./SimonBtn.module.css"

function SimonBtn({color, disabled, onClick}){
    let allowableColors = ["red", "blue", "green", "yellow"];
    let btnClass;
    try {

        if(allowableColors.includes(String(color).trim().toLowerCase())){
            for (const [key, val] of Object.entries(styles)) {
                if(String(key).includes(`${color}`)){
                    btnClass = `${key}`;
                    console.log(btnClass, "line 16")
                }
            }

        }else{
            btnClass="no_button";
            throw "illegal color"
        }
    } catch(e) {
        
        throw e
    }
    

    return (
    <div
        data-testid={`${color}_simon_button`}
        className={`${styles[`${btnClass}`]} ${styles.button} `}
        onClick={onClick}
        disabled={disabled}
    >
      {}
    </div>
    )

    
}

export default SimonBtn;