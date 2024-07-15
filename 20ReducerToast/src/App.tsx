import Toast from "./components/Toast";
import { useState, useReducer } from "react";

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_MOVIE":
            return {
                ...state,
                movies: [...state.movies, action.payload],
                showToast: true,
                toastContent: "Film byl přidán",
            };
        case "INVALID_INPUT":
            return {
                ...state,
                showToast: true,
                toastContent: "Neplatný název",
            };
        case "CLOSE_NOTIFICATION":
            return {
                ...state,
                showToast: false,
            };
        case "REMOVE_MOVIE":
            const filteredMovies = state.movies.filter((movie: any) => {
                return movie.id !== action.payload;
            });

            return {
                ...state,
                movies: filteredMovies,
            };
        default:
            throw new Error("Neplatná action");
    }

    return new Error("Neplatná action");
    // return state;
};

const defaultState: any = {
    movies: [],
    showToast: false,
    toastContent: "",
};

const App = () => {
    // const [movies, setMovies] = useState(data);
    // const [showToast, setShowToast] = useState(false);
    const [movieName, setMovieName] = useState("");
    const [state, dispatch]: any = useReducer(reducer, defaultState);

    const closeToast = () => {
        dispatch({
            type: "CLOSE_NOTIFICATION",
        });
    };

    return (
        <div>
            <Toast
                show={state.showToast}
                content={state.toastContent}
                close={closeToast}
            />
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (movieName) {
                        dispatch({
                            type: "ADD_MOVIE",
                            payload: {
                                id: new Date().getTime(),
                                name: movieName,
                            },
                        });
                    } else {
                        dispatch({
                            type: "INVALID_INPUT",
                        });
                    }

                    setMovieName("");
                }}
            >
                <input
                    type="text"
                    onChange={(e) => {
                        setMovieName(e.target.value);
                    }}
                    value={movieName}
                />

                <input type="submit" value="Přidat" />
            </form>
            {state.movies.map((movie: any) => {
                return (
                    <div className="movie" key={movie.id}>
                        <p>{movie.name}</p>
                        <button
                            type="button"
                            onClick={() => {
                                dispatch({
                                    type: "REMOVE_MOVIE",
                                    payload: movie.id,
                                });
                            }}
                        >
                            X
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default App;
