import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  
  return (
    <>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </>
  )
}

export default App;