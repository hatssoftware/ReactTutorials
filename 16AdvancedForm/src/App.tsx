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
          return [...users, contactInfo]
        })

        setContactInfo({name: "", email: "", age: ""});
      } else {
        console.log("Něco nebylo vyplněno")
      }

    }}>
      <input type="name" placeholder="name" className="input" value={contactInfo.name} 
      onChange={(event) => { setContactInfo((contactInfo : {name : string, email : string, age : string}) => {
        return { name: event.target.value, email: contactInfo.email, age: contactInfo.age }
      }) }}/>
      
      <input type="email" placeholder="e-mail" className="input" value={contactInfo.email}
      onChange={(event) => { setContactInfo((contactInfo : {name : string, email : string, age : string}) => {
        return { name: contactInfo.name, email: event.target.value, age: contactInfo.age}
      }) }}/>

      <input type="number" placeholder="age" className="input" value={contactInfo.age}
      onChange={(event) => { setContactInfo((contactInfo : {name : string, email : string, age: string}) => {
        return { name: contactInfo.name, email: contactInfo.email, age: event.target.value }
      }) }}/>
      
      <button type="submit" role="button" className="submit-button" value="send">
        <FaPaperPlane /> Submit
      </button>
    </form>

    {
      users.map((user : any, index) => {
        return (
          <User {...user} key={index} />
        )
      })
    }
    </>
  )
}

export default App;
