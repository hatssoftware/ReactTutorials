import { useState, useEffect } from "react";

const useSkibidi = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [coords, setCoords] = useState<string[]>(["", ""]);

    const getCoordsAPI = () => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((js) => {
                setLoading(false);
                return setCoords([
                    js.iss_position.longitude,
                    js.iss_position.latitude,
                ]);
            });
    };

    useEffect(() => {
        getCoordsAPI();
    }, []);

    return { loading, coords };
};

export default useSkibidi;
