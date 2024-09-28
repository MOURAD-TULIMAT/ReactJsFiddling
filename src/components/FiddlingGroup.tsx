import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GitHubProfileExplorer from "../pages/GitHubProfileExplorer";

function FiddlingGroup() {
  const [showList, setShowList] = useState(true);
  const navigate = useNavigate();

  const handleExplorerClick = () => {
    setShowList(false);
  };

  const handleBackClick = () => {
    setShowList(true);
    navigate(-1); // Navigate back to the previous route
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
      <ul className="list-group-item">
        {showList ? (
          <>
            <Link
              to="ReactJsFuddling/FiddlingGroup/github-explorer"
              onClick={handleExplorerClick}
            >
              GitHub Profile Explorer
            </Link>
            {items.map((item, index) => (
              <li key={index} className="list-group-item">
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item}
                </a>
              </li>
            ))}
          </>
        ) : (
          <>
            <button onClick={handleBackClick} className="btn btn-secondary">
              Back
            </button>
            <Link to="ReactJsFuddling/FiddlingGroup/github-explorer">
              GitHub Profile Explorer
            </Link>
          </>
        )}
      </ul>
      <Routes>
        <Route
          path="ReactJsFuddling/FiddlingGroup/github-explorer"
          element={<GitHubProfileExplorer />}
        />
      </Routes>
    </>
  );
}

export default FiddlingGroup;
