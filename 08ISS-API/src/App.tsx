import {useState, useEffect} from "react";

const App = () => {
  const url = "http://api.open-notify.org/iss-now.json"
  const [timestamp, setTimestamp] = useState<Date>(new Date(0));
  const [coords, setCoords] = useState<Array<number>>([0, 0]);

  const getCoords = async () => {
    const response = await fetch(url);
    const data = await response.json();
    
    setCoords([data.iss_position.latitude, data.iss_position.longitude])

    const cas = new Date(data.timestamp * 1000)
    setTimestamp(cas);
  }

  useEffect(() => {
    getCoords()
  }, [])

  return (
    <>
      <h1>{ timestamp.toLocaleTimeString() }</h1>
      <h3>Zeměpisná šířka: {coords[0]}</h3>
      <h3>Zeměpisná délka: {coords[1]}</h3>
    </>
  )
}

export default App;