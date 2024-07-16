import MoviesContext from "./MoviesContext";
import { useContext } from "react";

const Movies = () => {
    const recieved = useContext(MoviesContext);

    return (
        <div>
            {recieved.movies.map((movie: any) => {
                return (
                    <div key={movie.id}>
                        <p>{movie.name}</p>
                        <button
                            type="button"
                            onClick={() => {
                                recieved.deleteMovie(movie.id);
                            }}
                        >
                            Smazat
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Movies;
