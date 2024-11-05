import { useState } from "react";
import About from "../pages/About";
import Games from "../pages/Games";
import Home from "../pages/Home.";

const Router = () => {
    const [route, setRoute] = useState("home");

    switch (route) {
        case "home":
            return <Home setRoute={setRoute} />;

        case "games":
            return <Games setRoute={setRoute} />;

        case "about":
            return <About setRoute={setRoute} />;

        default:
            break;
    }
};

export default Router;
