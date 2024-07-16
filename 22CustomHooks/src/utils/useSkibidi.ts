import { useState, useEffect } from "react";

const useSkibidi = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<string[]>(["", ""]);

    useEffect(() => {
        const getCoordsAPI = () => {
            fetch(url)
                .then((res) => {
                    return res.json();
                })
                .then((js) => {
                    setLoading(false);
                    return setData(js);
                });
        };

        getCoordsAPI();
    }, [url]);

    return { loading, data };
};

export default useSkibidi;
