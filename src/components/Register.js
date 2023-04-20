import React, { useState } from "react";
import "./LoginRegisterForm.css";

const Register = ({ handleRegister }) => { // handleRegister is a function from App.js
  const [username, setUsername] = useState(""); // useState is a hook from React
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 

  const handleSubmit = (event) => { // handle the submit of the form
    event.preventDefault(); // prevent the default behavior of the form
    if (password === confirmPassword) { // check if the password and the confirmation are the same
      handleRegister(username, password); // call the function handleRegister from App.js
    } else {
      alert("Les mots de passe ne correspondent pas."); // display an alert
    }
  };

  return ( // display the form
    <form onSubmit={handleSubmit} className="form-card">
      <h2>Registration</h2>
      <div className="form-group">
        <label htmlFor="username">User name:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm password :</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <button type="submit" className="form-btn">Register</button>
    </form>
  );
};

export default Register;
