import React, {forwardRef} from "react";
import styles from "./SimonBtn.module.css";

const SimonBtn = forwardRef(({color, disabled, onClick}, ref) => {
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
        ref={ref}
        onClick={onClick}
        className={`${styles[`${btnClass}`]} ${styles.button} `}
        data-testid={`${color}_simon_button`}
        disabled={disabled}
        color={color}
    >
      {}
    </div>
    )

    
});

export default SimonBtn;