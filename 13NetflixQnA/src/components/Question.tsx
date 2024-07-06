import { useState } from "react";
import "./Question.css"

const Question = (props : any) => {
    const [show, setShow] = useState(false);

    return (
        <div className="question">
            <h3>{props.question}</h3>
            {show && <p>{props.answer}</p>}
            <button className="reveal-button" onClick={() => {setShow(!show)}}>{show ? "Skrýt odpověď" : "Zobrazit odpověď" }</button>
        </div>
    )
}

export default Question;