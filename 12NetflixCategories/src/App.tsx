import { useState } from "react";
import allMovies from "./data";
import categories from "./categories";
import CategoryButton from "./components/CategoryButton";

const App = () => {
  const [category, setCategory] = useState("komedie");
 
  const movies = allMovies.filter((movie) => {
    return movie.category == category;
  })

  console.log(movies);
  
  return <>
    <div className="categories">
      {
        categories.map((category, index) => {
          return <CategoryButton name={category} key={index} sc={() => { setCategory(category) }} />
        })
      }
    </div>

    <div className="movies">
    {
      movies.map((movie) => {
        const {id, image, title, age, tags, description} = movie;
        return (
          <div className="movie" key={id}>
            <img src={image} alt={title} className="img-responsive" />
            <div className="descs">
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
  </>;
}

export default App;