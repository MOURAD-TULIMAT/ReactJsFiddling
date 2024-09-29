import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GitHubProfileExplorer from "../pages/GitHubProfileExplorer";
import "../assets/style/Fruity.css";

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
    <>
      <div className="fiddling-container">
        <ul className="fiddling-list">
          {showList ? (
            <>
              <Link
                to="ReactJsFiddling/FiddlingGroup/github-explorer"
                onClick={handleExplorerClick}
                className="fruity-link"
              >
                🍇 GitHub Profile Explorer 🍉
              </Link>
              {items.map((item, index) => (
                <li key={index} className="fiddle-item fruity-item">
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fruity-link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </>
          ) : (
            <>
              <button onClick={handleBackClick} className="fruity-button">
                🍓 Back 🍓
              </button>
              <Link
                to="ReactJsFiddling/FiddlingGroup/github-explorer"
                className="fruity-link"
              >
                🍇 GitHub Profile Explorer 🍉
              </Link>
            </>
          )}
        </ul>
        <Routes>
          <Route
            path="ReactJsFiddling/FiddlingGroup/github-explorer"
            element={<GitHubProfileExplorer />}
          />
        </Routes>
      </div>
    </>
  );
}

export default FiddlingGroup;
