import "./DeleteAllMovies.css";

const DeleteAllMovies = (props : any) => {
    return <button className="middle-button" onClick={props.deleteAllMovies}>Smazat všechny filmy</button>;
}

export default DeleteAllMovies;