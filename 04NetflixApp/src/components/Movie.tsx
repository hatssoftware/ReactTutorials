import "./Movie.css";
import data from "../data";

let Movie = () => { 
    return <div className="all-movies">
        {
            data.map((film : any) => {
                const {id, image, title, age, tags, description} = film;

                return (
                    <div className="movie" key={id}>
                        <img className="image" src={image} alt="Movie" />
                        <div className="des">
                            <h3>{title}</h3>
                            <p>{age}</p>
                            <p>{tags}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                );
            })
        }
    </div>
}

export default Movie;