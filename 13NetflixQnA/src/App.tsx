import Question from "./components/Question";
import data from "./data/data";

const App = () => {
  
  return (
    <div className="question-wrapper">
    {
      data.map((item) => {
        return <Question key={item.id} {...item} />
      })
    }  
    </div>
  )
}

export default App;