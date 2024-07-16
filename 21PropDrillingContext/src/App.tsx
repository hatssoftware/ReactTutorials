import { useState } from "react";
import MovieBox from "./components/MovieBox";
import movieData from "./data/data";

const App = () => {
    const [movies, setMovies] = useState(movieData);

    const deleteMovie = (id : number) => {
        const filteredMovies = movies.filter((movie) => {
            return movie.id !== id;
        })

        setMovies(filteredMovies);
    }

    return (
        <div>
            <MovieBox data2={movies} deleteProp={deleteMovie} />
        </div>
    );
};

export default App;
