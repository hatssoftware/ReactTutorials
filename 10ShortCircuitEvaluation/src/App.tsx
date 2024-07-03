// neříkejte opps, že se tomu říká conditional rendering !!!!

const App = () => {
  const value = false;
  const error = false;
  // pokud X v {X && Y} je true, vypíše se Y
  // pokud je X false, vypíše se X

  const result = NaN && 555;
  console.log(result);

  // pokud X v {X || Y} je true, vypíše se X
  // pokud je X false, vypíše se Y

  const result2 = "" || 0;
  console.log(result2);
  
  // "", 0, null, undefined, Nan = false;
  // NaN.toString() == true;

  if (error) return <h2>Chyba mrdat</h2>

  return (
    <>
      <h1>{ value || "jo!!!!" }</h1> 
      { value && <h1>Supr tajný nadpis!!!!!</h1> }
       { error ? <p>pindik</p> : <p>nepindik</p> }
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab consectetur officia quasi adipisci ipsum architecto. Ad cum rem quidem repellendus vero, dolorem impedit molestias tenetur laborum, voluptatum vitae fugiat aperiam.</p>
       <p>kazda kazda kazda smrdíš hvona</p>
    </>
  )
}

export default App;