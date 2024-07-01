import { useState, useEffect } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect( () => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    })

    // cleanup function
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth)
      })}
  })

  return (
    <div>
      <h1>Šířka okna</h1>
      <h2>{windowWidth} px</h2>
    </div>
  );
}

export default App;