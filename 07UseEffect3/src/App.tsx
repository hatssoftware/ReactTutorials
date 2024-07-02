import { useState, useEffect } from "react";

const App = () => {
  const [joke, setJoke] = useState("Loading...");

  const url = "https://official-joke-api.appspot.com/random_joke"; // max 100 za 15 minut
  const url2 = "https://api.kanye.rest";

  let getJoke = async () => {
    const response = await fetch(url2);
    const data = await response.json();
    setJoke(data.quote);
  }

  useEffect(() => {
    getJoke();
  }, []) // spousti pouze jednou, a uplne na konci renderu

  return (
    <>
      <h1>Citát</h1>
      <h2>{joke}</h2>
    </>
  )
};

export default App
