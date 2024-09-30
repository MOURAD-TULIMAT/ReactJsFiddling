import React, { useState } from "react";
import { useTheme } from "../assets/ThemeContext"; // Access theme context
import "bootstrap/dist/css/bootstrap.min.css";

const GitHubProfileExplorer: React.FC = () => {
  const { theme } = useTheme(); // Access the current theme
  const [username, setUsername] = useState<string>("");
  const [profileData, setProfileData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchGitHubProfile = async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setProfileData(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setProfileData(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      fetchGitHubProfile(username);
    }
  };

  return (
    <div
      className={`container-fluid min-vh-100 d-flex justify-content-center align-items-center ${
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="profile-explorer-container p-4 rounded shadow-lg animate__animated animate__fadeIn">
        <h1 className="text-center mb-4">GitHub Profile Explorer</h1>
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center mb-4 search-form"
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub Username"
            className={`form-control w-50 me-2 animate__animated animate__fadeInDown ${
              theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          />
          <button
            type="submit"
            className={`btn ${
              theme === "dark" ? "btn-outline-light" : "btn-outline-dark"
            } animate__animated animate__fadeInRight`}
          >
            Search
          </button>
        </form>

        {error && (
          <p className="text-danger text-center animate__animated animate__shakeX">
            {error}
          </p>
        )}

        {profileData && (
          <div className="profile-details text-center animate__animated animate__fadeInUp">
            <h2>{profileData.name}</h2>
            <img
              src={profileData.avatar_url}
              alt={profileData.name}
              width="150"
              className="rounded-circle mt-3"
            />
            <p className="mt-3">{profileData.bio}</p>
            <p>Followers: {profileData.followers}</p>
            <p>Following: {profileData.following}</p>
            <p>Public Repos: {profileData.public_repos}</p>
            <a
              href={profileData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${
                theme === "dark" ? "btn-outline-light" : "btn-outline-dark"
              } mt-3`}
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubProfileExplorer;
