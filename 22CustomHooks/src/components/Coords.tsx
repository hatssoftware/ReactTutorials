import { useEffect, useState } from "react";
import useSkibidi from "../utils/useSkibidi";

const apiUrl = "http://api.open-notify.org/iss-now.json";

const Coords = () => {
    const { loading, coords } = useSkibidi(apiUrl);

    return <div>{loading ? "Loading..." : `${coords[0]}; ${coords[1]}`}</div>;
};

export default Coords;
