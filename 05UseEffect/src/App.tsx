import { useState, useEffect } from 'react';

let App = () => {
  const [value, setValue] = useState(0);
  const [test, setTest] = useState(0);

  useEffect(() => {
    const button = document.querySelector('.btn') as HTMLButtonElement;

    if (value >= 1) {
      button.textContent = "Klik číslo " + value.toString();
    } else {
      button.textContent = "Klik";
    }
    
    console.log("useEffect [value], tzv číslo");
  }, [value])

  useEffect(() => {
    document.title = `Titulek ${test}`;
    console.log("useEffect [test], tzv titulek");
    
  }, [test])

  return <>
    <h1>čus</h1>
    <h3>{value}</h3>
    <button className="btn" onClick={() => setValue(value + 1)}>+</button>
    <button className='btn-test' onClick={() => setTest(test + 1) }>Titulek</button>
  </>
}

export default App;