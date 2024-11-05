import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/system";

import App from "./routes/App.jsx";

import "./styles/tailwind.css";
import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <NextUIProvider>
            <App />
        </NextUIProvider>
    </StrictMode>
);
