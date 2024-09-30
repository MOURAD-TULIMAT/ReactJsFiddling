import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useTheme } from "../assets/ThemeContext"; // Access theme context
import GitHubProfileExplorer from "../pages/GitHubProfileExplorer";
import "bootstrap/dist/css/bootstrap.min.css";

function FiddlingGroup() {
  const { theme } = useTheme(); // Access the current theme
  const [showList, setShowList] = useState(true);
  const navigate = useNavigate();

  const handleExplorerClick = () => {
    setShowList(false);
  };

  const handleBackClick = () => {
    setShowList(true);
    navigate(-1);
  };

  const items = [
    "Fiddle num 1",
    "Fiddle num 2",
    "Fiddle num 3",
    "Fiddle num 4",
    "Fiddle num 5",
  ];

  return (
    <div
      className={`container my-5 ${
        theme === "dark" ? "text-light" : "text-dark"
      }`}
    >
      <div
        className={`fiddling-container p-4 rounded shadow-lg ${
          theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <div className="d-flex justify-content-between mb-4">
          {!showList && (
            <button
              onClick={handleBackClick}
              className={`btn ${
                theme === "dark" ? "btn-outline-light" : "btn-outline-dark"
              } animate__animated animate__fadeInLeft`}
            >
              Back
            </button>
          )}

          {showList ? (
            <Link
              to="ReactJsFiddling/FiddlingGroup/github-explorer"
              onClick={handleExplorerClick}
              className={`btn ${
                theme === "dark" ? "btn-outline-light" : "btn-outline-dark"
              } animate__animated animate__fadeIn`}
            >
              GitHub Profile Explorer
            </Link>
          ) : (
            <h1 className="animate__animated animate__fadeIn">
              GitHub Profile Explorer
            </h1>
          )}
        </div>

        {showList ? (
          <ul className="list-group list-group-flush">
            {items.map((item, index) => (
              <li
                key={index}
                className={`list-group-item ${
                  theme === "dark"
                    ? "bg-dark text-light border-light"
                    : "bg-light text-dark border-dark"
                } animate__animated animate__fadeInUp`}
              >
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-decoration-none ${
                    theme === "dark" ? "text-light" : "text-dark"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <Routes>
          <Route
            path="ReactJsFiddling/FiddlingGroup/github-explorer"
            element={<GitHubProfileExplorer />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default FiddlingGroup;
