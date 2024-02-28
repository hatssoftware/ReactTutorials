import "./ResetButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRestroom } from '@fortawesome/free-solid-svg-icons'

const ResetButton = (props) => {
    return (
        <button className="btn" onClick={props.reset}><FontAwesomeIcon icon={faRestroom} size="2xl"/></button>
    );
}

export default ResetButton;