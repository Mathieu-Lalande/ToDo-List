import React, { useState } from "react";
import "./LoginRegisterForm.css";

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => { // handle the submit of the form
    event.preventDefault(); // prevent the default behavior of the form
    handleLogin(username, password); // call the function handleLogin from App.js
  };

  return (  // display the form
    <form onSubmit={handleSubmit} className="form-card"> 
      <h2>Connexion</h2>
      <div className="form-group">
        <label htmlFor="username">Prénom :</label>
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
        <label htmlFor="password">Mot de Passe :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <button type="submit" className="form-btn">Se connecter</button>
    </form>
  );
};

export default Login;