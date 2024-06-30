import "./MovieDeleteButton.css";
import deleteIcon from "../assets/xmark-solid.svg";

let MovieDeleteButton = (props : any) => {
    return (
        <span className="delete-btn" onClick={props.deleteMovie}>
            <img src={deleteIcon} alt="Delete" />
        </span>
    );
}

export default MovieDeleteButton;