import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GitHubProfileExplorer from "../pages/GitHubProfileExplorer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/FiddlingGroup.css";

function FiddlingGroup() {
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
    <div className="container my-5 text-light">
      <div className="fiddling-container p-4 bg-dark rounded shadow-lg">
        {showList ? (
          <>
            <Link
              to="ReactJsFiddling/FiddlingGroup/github-explorer"
              onClick={handleExplorerClick}
              className="btn btn-outline-light mb-4 w-100 animate__animated animate__fadeIn"
            >
              GitHub Profile Explorer
            </Link>
            <ul className="list-group list-group-flush">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item bg-dark text-light border-light animate__animated animate__fadeInUp"
                >
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <button
              onClick={handleBackClick}
              className="btn btn-outline-light mb-4 animate__animated animate__fadeInLeft"
            >
              Back
            </button>
            <Link
              to="ReactJsFiddling/FiddlingGroup/github-explorer"
              className="btn btn-outline-light animate__animated animate__fadeInRight"
            >
              GitHub Profile Explorer
            </Link>
          </>
        )}
      </div>
      <Routes>
        <Route
          path="ReactJsFiddling/FiddlingGroup/github-explorer"
          element={<GitHubProfileExplorer />}
        />
      </Routes>
    </div>
  );
}

export default FiddlingGroup;
