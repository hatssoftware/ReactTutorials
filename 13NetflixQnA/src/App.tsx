import Question from "./components/Question";

const App = () => {
  
  return (
    <div className="question-wrapper">
      <Question question="Kolik stojí měsíční předplatné?" answer="Měsíční předplatné stojí 340,- Kč / měsíc."/>
      <Question question="Jak mohu platit?" answer="Platit můžete bankovním převodem, kartou nebo hotově."/>
      <Question question="Jak mohu zrušit předplatné?" answer="Předplatné můžete zrušit kdykoliv v nastavení vašeho účtu."/>
    </div>
  )
}

export default App;