import "./Example.css";
import { useState } from "react";
 
export default function Example() {
    const [title, setTitle] = useState("Můj první title");     
    const [buttonText, setButtonText] = useState("Původní text tlačítka");

    let buttonChanged = false;
    const buttonHandler = () => {
        setTitle("Nový text v titlu");
    }

    const button2Handler = () => {
        setTitle("Nový nový text!!!!!!!");
    }

    const deleteAll = () => {
        setTitle("");
    }

    const buttonChange = () => {
        setButtonText("nový text v tlačítku")
    }

    return (
        <div className="text-button-changer">
            <h2>{title}</h2>
            <button type="button" onClick={buttonHandler}>Změnit title</button>
            <button type="button" onClick={button2Handler}>Opět změnit title</button>
            <button type="button" onClick={deleteAll}>Smazat vše</button>
            <button type="button" onClick={buttonChange}>{buttonText}</button>
        </div>
    );
}