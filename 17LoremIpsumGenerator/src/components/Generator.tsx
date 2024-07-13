import { useState } from "react";
import data from "../data/data";
import "./Generator.css";

const Generator = () => {
    const [value, setValue] = useState("1");

    const [paragraphs, setParagraphs] = useState<string[]>([]);

    const generate = (howMuch: string) => {
        setParagraphs([]);
        let parsedValue = parseInt(howMuch);

        if ((parsedValue < 6 && parsedValue > 0) || Number.isNaN(parsedValue)) {
            for (let i = 0; i < parsedValue; i++) {
                setParagraphs((paragraphs: string[]) => {
                    return [...paragraphs, data[i]];
                });
            }
        }
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    generate(value);
                }}
            >
                <label htmlFor="paragraphs">Odstavce: </label>
                <input
                    type="number"
                    name="paragraphs"
                    id="paragraphs"
                    className="generate-input"
                    placeholder="Počet odstavců"
                    min="0"
                    max="5"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <button type="submit" className="generate-button">
                    Vygenerovat
                </button>
            </form>
            {paragraphs.map((p, index) => {
                return (
                    <p className="paragraph" key={index}>
                        {p}
                    </p>
                );
            })}
        </>
    );
};

export default Generator;
