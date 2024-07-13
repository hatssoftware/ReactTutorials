import { useRef } from "react";

const App = () => {
    const refInput: React.MutableRefObject<HTMLInputElement | null> =
        useRef(null);
    const refHeading: React.MutableRefObject<HTMLInputElement | null> =
        useRef(null);
    const refLink : any = useRef(null);

    return (
        <div>
            <h1 ref={refHeading}>Formulář</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(refInput.current?.value);

                    if (refHeading.current && refInput.current) {
                        refHeading.current.style.fontSize = "72px";
                        console.log(refHeading.current.textContent);
                        refHeading.current.textContent = refInput.current.value;
                    }

                    if (refLink.current) {
                      console.log(refLink.current.textContent);
                      refLink.current.href = "https://stvr.cz";
                    }
                }}
            >
                <input type="text" ref={refInput} />
                <input type="submit" />
                <a href="https://google.com" ref={refLink}>GOOGOGLE</a>
            </form>
        </div>
    );
};

export default App;
