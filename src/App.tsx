import { Routes, Route, Link } from "react-router-dom";
import FiddlingGroup from "./components/FiddlingGroup";
import { ThemeProvider, useTheme } from "./assets/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome for icons
import "./App.css";
import GitHubProfileExplorer from "./pages/GitHubProfileExplorer";

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`d-flex min-vh-100`}>
      {/* Sidebar */}
      <div
        className={`d-flex flex-column p-3 ${
          theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"
        }`}
        style={{ width: "215px" }}
      >
        <h4 className="mb-4">Fiddling Items</h4>
        <Link to="FiddlingGroup/github-explorer">
          <button
            className={`btn ${
              theme === "dark" ? "btn-outline-dark" : "btn-outline-light"
            } animate__animated animate__fadeInRight`}
          >
            GitHub Explorer
          </button>
        </Link>
      </div>

      {/* Main content area */}
      <div
        className={`container-fluid text-light d-flex justify-content-center align-items-center ${
          theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        {/* Theme Toggle Button */}
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

        {/* Routes */}
        <Routes>
          <Route
            path="FiddlingGroup/github-explorer"
            element={<GitHubProfileExplorer />}
          />
        </Routes>
      </div>
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
