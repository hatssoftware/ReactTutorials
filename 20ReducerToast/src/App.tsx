import Toast from "./components/Toast";
import { useState, useReducer } from "react";

const reducer = (state: any, action: any) => {
    if (action.type === "ADD_MOVIE") {
        return {
            ...state,
            movies: [...state.movies, action.payload],
            showToast: true,
            toastContent: "Film byl přidán",
        };
    }

    if (action.type === "INVALID_INPUT") {
        return {
            ...state,
            showToast: true,
            toastContent: "Neplatný název",
        };
    }

    if (action.type === "CLOSE_NOTIFICATION") {
        return {
            ...state,
            showToast: false
        };
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
            type: "CLOSE_NOTIFICATION"
        });
    };

    return (
        <div>
            <Toast show={state.showToast} content={state.toastContent} close={closeToast} />
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
                }}
            >
                <input
                    type="text"
                    onChange={(e) => {
                        setMovieName(e.target.value);
                    }}
                />

                <input type="submit" value="Přidat" />
            </form>
            {state.movies.map((movie: any) => {
                return <p key={movie.id}>{movie.name}</p>;
            })}
        </div>
    );
};

export default App;
