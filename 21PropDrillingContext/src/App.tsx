import { useState } from "react";
import MovieBox from "./components/MovieBox";
import movieData from "./data/data";
import MoviesContext from "./components/MoviesContext";

const App = () => {
    const [movies, setMovies] = useState(movieData);

    const deleteMovie = (id: number) => {
        const filteredMovies = movies.filter((movie) => {
            return movie.id !== id;
        });

        setMovies(filteredMovies);
    };

    return (
        <MoviesContext.Provider value={{deleteMovie, movies}}>
            <MovieBox />
        </MoviesContext.Provider>
    );
};

export default App;
