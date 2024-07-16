import React from "react";

const MoviesContext = React.createContext({deleteMovie : (id : number) => {}, movies : [{}]});

export default MoviesContext;