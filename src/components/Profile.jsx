import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile, login, logout } from "../store/profileSlice";

import LisImg from "../assets/lis-skins.png";

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [username, setUsername] = useState(profile.username);
  const [password, setPassword] = useState(profile.password);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(updateProfile({ username, password }));
      dispatch(login());
      alert("Login successful!");
    } else {
      alert("Please enter username and password!");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setUsername("");
    setPassword("");
    alert("You Logged out!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ username, password }));
    alert("Profile edited!");
  };

  return (
    <div className="profile-page">
      <h1 className="profile-title">
        <img src={LisImg} alt="" />
        {profile.isLoggedIn ? "Welcome " + profile.username : "Login"}
      </h1>

      {!profile.isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button class="button">Login</button>
        </form>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button class="button" type="submit">
              Edit Profile
            </button>
          </form>
          <button
            class="logout"
            onClick={handleLogout}
            style={{ marginTop: "1rem" }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
