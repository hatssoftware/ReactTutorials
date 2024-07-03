import { useState } from "react";
import Book from "./Book";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>demo schování komponenty v react</h1>
      <button onClick={() => {setShow(!show)}}>Ukaž / skryj</button>
      {show && <Book />}
    </>
  );
}

export default App;