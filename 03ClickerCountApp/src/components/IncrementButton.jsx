import "./IncrementButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const IncrementButton = (props) => {
    return (
        <button className="btn" onClick={props.increment}><FontAwesomeIcon icon={faPlus} size="2xl" /></button>
    );
}

export default IncrementButton;