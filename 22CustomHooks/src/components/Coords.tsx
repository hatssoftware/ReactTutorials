import useSkibidi from "../utils/useSkibidi";

const apiUrl = "http://api.open-notify.org/iss-now.json";

const Coords = () => {
    const { loading, data } : any = useSkibidi(apiUrl);

    return (
        <div>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    <p>longitude: {data.iss_position.longitude}</p>
                    <p>latitude: {data.iss_position.latitude}</p>
                </div>
            )}
            
        </div>
    );
};

export default Coords;
