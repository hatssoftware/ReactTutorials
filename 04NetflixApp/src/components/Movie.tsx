import "./Movie.css";
import data from "../data";

let Movie = () => { 
    return <div>
        {
            data.map((film : any) => {
                const {id, image, title, age, tags, description} = film

                return (
                    <div key={id}>
                        <img src={image} alt="Movie" />
                        <h3>{title}</h3>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                    </div>
                );
            })
        }
    </div>
}

export default Movie;