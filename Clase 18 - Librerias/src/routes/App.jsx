import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Store from "../pages/Store";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
            </Routes>
        </BrowserRouter>
    );
};

App.propTypes = {};

export default App;
