import React from "react";
import FiddlingGroup from "./components/FiddlingGroup";
import { ThemeProvider, useTheme } from "./assets/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome for icons
import "./App.css";

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`container-fluid min-vh-100 text-light d-flex justify-content-center align-items-center ${
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="position-absolute top-0 end-0 p-3">
        <button
          onClick={toggleTheme}
          className="btn btn-outline-light"
          style={{ borderRadius: "50%", width: "50px", height: "50px" }}
        >
          {theme === "dark" ? (
            <i className="fas fa-sun text-warning"></i> // Sun icon for light theme
          ) : (
            <i className="fas fa-moon text-dark"></i> // Moon icon for dark theme
          )}
        </button>
      </div>
      <FiddlingGroup />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
