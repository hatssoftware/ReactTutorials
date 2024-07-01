import { ComponentProps } from "react";
import "./RefreshMovies.css";

const RefreshMovies = (props : any }) => {
    return <button className="middle-button" onClick={props.refreshMovies}>Obnovit filmy</button>;
}

export default RefreshMovies;