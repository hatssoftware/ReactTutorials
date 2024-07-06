import { useState } from "react";

const App = () => {
  const [credentials, setCredentials] = useState<[string, string]>(["", ""]);
  const [names, setNames] = useState<object[]>([{name: "", password: ""}]);
  const [inline, setInline] = useState<[React.CSSProperties, React.CSSProperties]>([{border: "none"}, {border: "none"}]);
  const [error, setError] = useState([false, false]);

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();

        
        if (credentials[0] && credentials[1]) {
          if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/.test(credentials[1])) {
            setInline([{border: "none"}, {border: "2px solid red"}])
            setError([false, true]);
          } else {
            setCredentials(["", ""]);
            setInline([{border: "none"}, {border: "none"}]);
            setError([false, false]);

            setNames((names) => {
              return [...names, {name: credentials[0], password: credentials[1]}];
            });
          }

        } else {
          if (!credentials[0] && !credentials[1]) { 
            setInline([{border: "2px solid red"}, {border: "2px solid red"}])
            setError([true, true]);
          } else
          if (credentials[0]) { 
            setInline([{border: "none"}, {border: "2px solid red"}])
            setError([false, true]);
          } else
          if (credentials[1]) { 
            setInline([{border: "2px solid red"}, {border: "none"}]) 
            setError([true, false]);

            if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/.test(credentials[1])) {
              setInline([{border: "none"}, {border: "2px solid red"}])
              setError((error) => {
                return [[...error][0], false];
              });
            } 
          } 
        }
        
      }}>
        <input style={inline[0]} type="text" className="form__input" placeholder="Uživatelské jméno" value={ credentials[0] } 
        onChange={(e) => { setCredentials((credentials) => {
          return [e.target.value, [...credentials][1]]
        }) }} />
        {error[0] && <p className="error" id="error1">Chybné jméno</p>}
        <input style={inline[1]} type="password" className="form__input" placeholder="Heslo" value = { credentials[1] } 
        onChange={(e) => { setCredentials((credentials) => {
          return [credentials[0], e.target.value]
        }) }}/>
        {error[1] && <p className="error" id="error2">Chybné heslo</p>}
        <input type="submit" value="Zaregistrovat"/>  
      </form>   

      { names.map((jmeno : any, index : number) => {
        if (index > 0) {
          return <p className="form__result" key={index}>{ jmeno.name };{ jmeno.password }</p>
        }
      }) } 
    </>
  )
}

export default App
