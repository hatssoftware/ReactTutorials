import "./DecrementButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const DecrementButton = (props) => {
    return (
        <button className="btn" onClick={props.decrement}><FontAwesomeIcon icon={faMinus} size="2xl"/></button>
    );
}

export default DecrementButton;