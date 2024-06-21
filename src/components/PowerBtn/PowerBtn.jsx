import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faX} from "@fortawesome/free-solid-svg-icons";
import styles from "./PowerBtn.module.css";

function PowerBtn({sequence, onClick }) {
    const PowerIcon = <FontAwesomeIcon className={styles.icon} icon={faPowerOff}/>
    // const offIcon = <FontAwesomeIcon className={styles.icon} icon={faX} />
   
    return (
        <div>     
                <button 
                className={styles.button}
                onClick={onClick}
            >
                {sequence?.length > 0 ? sequence.length : PowerIcon}
            </button>
           
        </div>
    ) 
}

export default PowerBtn;