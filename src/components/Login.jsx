import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const predefinedUsername = "admin";
  const predefinedPassword = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === predefinedUsername && password === predefinedPassword) {
      navigate("/navbar"); // Redirect to Navbar
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div className="wrapper">
      <form action="#" onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have any account? <a href="#">Register </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
