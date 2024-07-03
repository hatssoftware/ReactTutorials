import { useState, useEffect } from "react";

const url = "https://southparkquotes.onrender.com/v1/quotes";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fullQuote, setFullQuote] = useState(["", ""]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => data[0])
      .then((quote) => {
        console.log(quote.quote);
        console.log(quote.character);
    
        setFullQuote([quote.quote, quote.character]);
        setLoading(false);
    }) 
  }, [])

  if (loading) {
    return <h2>Načítání stránky...</h2>
  }
    
  return (
    <>
      <h2>South Park Quotes with React</h2>
      <p className="quote">"{fullQuote[0]}"</p>
      <p className="character">- {fullQuote[1]}</p>
    </>
  )
}

export default App;