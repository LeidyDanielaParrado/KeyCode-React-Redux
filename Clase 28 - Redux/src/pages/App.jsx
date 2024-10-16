import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userSlice.js";

import Card from "../components/Card";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            addUser({
                name: "John Doe",
                email: "jhon@mail.com",
                photo: "https://cdn-icons-png.flaticon.com/512/219/219986.png",
            })
        );
    });

    return (
        <>
            <Card />
        </>
    );
}

export default App;
