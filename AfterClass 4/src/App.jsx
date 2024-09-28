import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import InputContext from "./components/InputContext";

import { InputsContext } from "./context/InputsContext";

function App() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const listInputs = [
        {
            id: 1,
            text: "Name",
            setState: setName,
            type: "text",
            name: "name",
        },
        {
            id: 2,
            text: "Email",
            setState: setEmail,
            type: "email",
            name: "email",
        },
        {
            id: 3,
            text: "Password",
            setState: setPassword,
            type: "password",
            name: "password",
        },
        {
            id: 4,
            text: "Confirm Password",
            setState: setConfirmPassword,
            type: "password",
            name: "confirm-password",
        },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name,
            email,
            password,
            confirmPassword,
        };

        console.log("El usuario fue registrado" + JSON.stringify(user));
    };

    return (
        <>
            <InputsContext.Provider value={{ listInputs: listInputs }}>
                <form className="form" onSubmit={handleSubmit}>
                    {listInputs.map((input) => (
                        <InputContext key={input.id} id={input.id} />
                    ))}

                    <button type="submit">Submit</button>
                </form>
            </InputsContext.Provider>

            <form className="form" onSubmit={handleSubmit}>
                <Input text="Name" setState={setName} type="text" name="name" />
                <Input text="Email" setState={setEmail} type="email" name="email" />
                <Input text="Password" setState={setPassword} type="password" name="password" />
                <Input text="Confirm Password" setState={setConfirmPassword} type="password" name="confirm-password" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default App;
