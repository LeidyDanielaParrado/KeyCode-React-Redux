import { BrowserRouter, Routes, Route } from "react-router-dom";

import User from "../pages/User";
import Task from "../pages/Task";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
