import DecrementButton from "./components/DecrementButton";
import IncrementButton from "./components/IncrementButton";
import ResetButton from "./components/ResetButton";

import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  const decrement = (dnum = 1) => {
    setValue(value - dnum);
  }

  const increment = (inum = 1) => {
    setValue(value + inum)
  }

  const reset = () => {
    setValue(0);
  }

  return (
    <div className="counter">
      <h1>Počítadlo</h1>
      <h2>{value}</h2>
      <IncrementButton increment={() => increment()} />
      <DecrementButton decrement={() => decrement()} />
      <ResetButton reset={reset} />
    </div>
  );
}

export default App;