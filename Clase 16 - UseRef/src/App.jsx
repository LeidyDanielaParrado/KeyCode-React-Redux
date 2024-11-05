import { useRef, useEffect, useMemo } from "react";
import "./App.css";

function App() {
    const titleRef = useRef();

    useMemo(() => {
        console.log("useMemo");
    }, []);

    useEffect(() => {
        titleRef.current.style = "border: 2px solid red";
        titleRef.current.innerText = "Titulo modificado con React";
        titleRef.current.innerHTML = "<strong>Titulo modificado con React</strong>";
        console.log(titleRef.current);
    }, []);

    return (
        <>
            <h1 ref={titleRef}>Titulo con React</h1>
        </>
    );
}

export default App;
