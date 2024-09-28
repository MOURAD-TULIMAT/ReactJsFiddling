import React, { useState } from "react";

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
    <div>
      <h1>GitHub Profile Explorer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub Username"
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {profileData && (
        <div>
          <h2>{profileData.name}</h2>
          <img
            src={profileData.avatar_url}
            alt={profileData.name}
            width="150"
          />
          <p>{profileData.bio}</p>
          <p>Followers: {profileData.followers}</p>
          <p>Following: {profileData.following}</p>
          <p>Public Repos: {profileData.public_repos}</p>
          <a
            href={profileData.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default GitHubProfileExplorer;
