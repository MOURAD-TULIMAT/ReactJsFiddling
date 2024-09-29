import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/GitHubProfileExplorer.css"; // For additional custom styles

const GitHubProfileExplorer: React.FC = () => {
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
    <div className="container-fluid bg-dark min-vh-100 d-flex justify-content-center align-items-center text-light">
      <div className="profile-explorer-container p-4 bg-dark rounded shadow-lg animate__animated animate__fadeIn">
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
            className="form-control w-50 me-2 animate__animated animate__fadeInDown"
          />
          <button
            type="submit"
            className="btn btn-outline-light animate__animated animate__fadeInRight"
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
              className="btn btn-outline-light mt-3"
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
