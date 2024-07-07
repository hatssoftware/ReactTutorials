import { FaCircleUser } from "react-icons/fa6";
import "./User.css";

const User = (props : any) => {
    return (
        <div className="user" key={props.index}>
            <div className="user-data">
                <h3>{props.name}</h3>
                <p>{props.email} {props.age}</p>
            </div>
            <FaCircleUser className="item-icon" />
        </div>
    )
}

export default User;