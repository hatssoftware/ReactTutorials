import "./Movie.css";

interface MovieProps {
    title: string,
    image: string,
    minimumAge: number,
    tags: string[],
    description: string
}

const Movie = ({ title, image, minimumAge, tags, description }: MovieProps) => {
    return (
        <div className="movie">
            <img src={image} alt={title} />
            <div className="movie-description">
                <h3>{title}</h3>
                <p>{minimumAge}+</p>
                <p className="tags">{tags.join(" • ")}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Movie
