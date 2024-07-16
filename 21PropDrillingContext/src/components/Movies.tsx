const Movies = ({data3, deleteProp} : any) => {
    return <div>
        <h1>Movies</h1>
        {
            data3.map((movie : any) => {
                return <div key={movie.id}>
                    <p>{movie.name}</p>
                    <button type="button" onClick={() => { deleteProp(movie.id) } }>Smazat</button>
                </div>
            })
        }
    </div>;
};

export default Movies;
