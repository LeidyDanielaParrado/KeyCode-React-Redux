import { BrowserRouter, Routes, Route } from "react-router-dom";

import General from "../layouts/General";

import Home from "../pages/Home";
import Store from "../pages/Store";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<General />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>

                <Route path="/store" element={<General />}>
                    <Route index element={<Store />} />
                    <Route path="foods" element={<Store />} />
                    <Route path="locations" element={<Store />} />
                    <Route path="objects" element={<About />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
