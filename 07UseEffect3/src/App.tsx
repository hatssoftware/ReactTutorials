let App = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  const joke = "";

  let getJoke = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.setup);
  }

  getJoke();

  return (
    <h1>{joke}</h1>
  )
};

export default App
