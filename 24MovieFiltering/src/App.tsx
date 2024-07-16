import Movie from "./components/Movie";
import movies from "./data/data";
import { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([""]);
  const [currentCategory, setCurrentCategory] = useState("Všechny");

  // fetch all categories from each p class tags
  useEffect(() => {
    const tags = movies.map((movie) => movie.tags);
    const uniqueTags = [...new Set(tags.flat())];
    setCategories(uniqueTags);
  }, []);

  return (
    <>
      <div className="filters">
        <input className="input" type="text" name="movie" id="movie" placeholder="Hledaný film" value={value} onChange={(e) => { setValue(e.target.value) }} />
        <select className="input" value={currentCategory} onChange={(e) => { setCurrentCategory(e.target.value) }}>
          <option value="Všechny">Všechny</option>
          {
            categories.map((cat) => {
              return <option>{cat}</option>
            })
          }
        </select>
      </div>
      <div className="all-movies">
        {
          movies.map((movie) => {
            if (movie.title.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1) {
              if (currentCategory === "Všechny" || movie.tags.includes(currentCategory)) {
                return <Movie key={movie.id} {...movie} />
              } 
            }
          }
        )
        }
      </div>
    </>
  )
}

export default App
