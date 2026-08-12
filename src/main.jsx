import { createRoot } from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Global CSS
import "./assets/styles/global.css";

// Components
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);