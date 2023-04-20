import React, { useState } from "react";
import "./LoginRegisterForm.css";

const Register = ({ handleRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      handleRegister(username, password);
    } else {
      alert("Les mots de passe ne correspondent pas.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2>Inscription</h2>
      <div className="form-group">
        <label htmlFor="username">Nom d'utilisateur:</label>
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
        <label htmlFor="password">Mot de passe:</label>
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
        <label htmlFor="confirmPassword">Confirmer le mot de passe:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <button type="submit" className="form-btn">S'inscrire</button>
    </form>
  );
};

export default Register;
