import {useState, useEffect} from "react";

const App = () => {
  const url = "http://api.open-notify.org/iss-now.json"
  const [timestamp, setTimestamp] = useState<Date>(new Date(0));
  const [coords, setCoords] = useState<Array<string>>(["Loading...", "Loading..."]);
  const [mapsEmbed, setEmbed] = useState<string>("");

  const getCoords = async () => {
    const response = await fetch(url);
    const data = await response.json();
    
    setCoords([data.iss_position.latitude, data.iss_position.longitude]);
    setEmbed(`<iframe src="https://maps.google.com/maps?q=${data.iss_position.latitude},${data.iss_position.longitude}&t=k&z=3&ie=UTF8&iwloc=B&amp;output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    const cas = new Date(data.timestamp * 1000);
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
      <div dangerouslySetInnerHTML={ {__html: mapsEmbed} }></div>
    </>
  )
}
export default App;