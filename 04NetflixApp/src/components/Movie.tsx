import "./Movie.css";
import data from "../data";
import MovieDeleteButton from "./MovieDeleteButton";
import { useState } from "react";

let Movie = () => { 
    const [movies, setMovies] = useState(data);

    const smazatFilm = (ID : number) => {
        const filtrovaneFilmy = movies.filter((film : any) => {
            return film.id !== ID;
        })

        setMovies(filtrovaneFilmy);
    }

    return <div className="all-movies">
        {
            movies.map((film : any) => {
                const {id, image, title, age, tags, description} = film;

                return (
                    <div className="movie" key={id}>
                        <img className="image" src={image} alt="Movie" />
                        <div className="des">
                            <h3>{title}</h3>
                            <p>{age}</p>
                            <p>{tags}</p>
                            <p>{description}</p>
                            <MovieDeleteButton deleteMovie={() => smazatFilm(id)}/>
                        </div>
                    </div>
                );
            })
        }
    </div>
}

export default Movie;