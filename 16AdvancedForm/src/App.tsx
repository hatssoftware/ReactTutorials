import "@fontsource/inter/500.css"; 
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import User from "./components/User";

const App = () => {
  const [contactInfo, setContactInfo] = useState({name: "", email: "", age: ""});
  const [users, setUsers] = useState<object[]>([]);

  return (
    <>
    <form onSubmit={(e) => {
      e.preventDefault();

      if (contactInfo.name && contactInfo.email && contactInfo.age) {
        setUsers((users : any) => {
          return [...users, {...contactInfo, id: new Date().getTime()}]
        })

        setContactInfo({name: "", email: "", age: ""});
      } else {
        console.log("Něco nebylo vyplněno")
      }

    }}>
      <input type="name" name="name" placeholder="name" className="input" value={contactInfo.name} 
      onChange={(e) => { setContactInfo({...contactInfo, [e.target.name]: e.target.value}) }}/>

      <input type="email" name="email" placeholder="e-mail" className="input" value={contactInfo.email}
      onChange={(e) => { setContactInfo({...contactInfo, [e.target.name]: e.target.value}) }}/>

      <input type="number" name="age" placeholder="age" className="input" value={contactInfo.age}
      onChange={(e) => { setContactInfo({...contactInfo, [e.target.name]: e.target.value}) }}/>
      
      <button type="submit" role="button" className="submit-button" value="send">
        <FaPaperPlane /> submit
      </button>
    </form>

    {
      users.map((user : any) => {
        return (
          <User {...user} key={user.id} />
        )
      })
    }
    </>
  )
}

export default App;
