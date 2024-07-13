import Toast from "./components/Toast";
import data from "./data/data";
import { useState } from "react";

const App = () => {
    const [movies, setMovies] = useState(data);
    const [showToast, setShowToast] = useState(false);

    return (
        <div>
            <Toast show={showToast}/>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="text" name="" id="" />
                <input type="submit" value="Přidat" />
            </form>
        </div>
    );
};

export default App;
