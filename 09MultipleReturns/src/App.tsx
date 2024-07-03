import { useState, useEffect } from "react";

const url = "https://cataas.com/cat";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        console.log(response);
      })
      .then((data) => {
        console.log(data);
      })
  }, [])

  if (loading) {
    return <h2>Načítání stránky...</h2>
  } else {
    return <h2>Obsah stránky</h2>
  }
}

export default App;