import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#add8e6", // Example light color
      main: "#0000ff", // Example main color
      dark: "#000088", // Example dark color
    },
    success: {
      light: '#81c784', // Light shade
      main: '#4caf50', // Main color that you must define
      dark: '#388e3c', // Dark shade
    },
    orange: {
      light: '#ffb74d', // Light shade
      main: '#ff9800', // Main color that you must define
      dark: '#f57c00', // Dark shade
    },
    // Add other colors as needed
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
