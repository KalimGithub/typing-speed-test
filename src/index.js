import React from "react";
import ReactDOM from "react-dom/client";
import StyleProvider from "./context/StyleProvider";


import "./style.css"
import App from "./App"

const root = ReactDOM.createRoot( document.getElementById("root"));

root.render(
    <React.StrictMode>
        <themeContextProvider>
            
            <App />
        </themeContextProvider>
    </React.StrictMode>
);