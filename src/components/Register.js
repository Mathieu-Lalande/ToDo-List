import React, { useState, useEffect } from "react";
import "./LoginRegisterForm.css";

const Register = ({ handleRegister }) => { 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [captcha, setCaptcha] = useState(0);
  const [captchaInput, setCaptchaInput] = useState("");

  const generateCaptcha = () => { //
    const newCaptcha = Math.floor(Math.random() * 100);
    setCaptcha(newCaptcha);
    setCaptchaInput("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      if (Number(captchaInput) === captcha) {
        handleRegister(username, password);
      } else {
        alert("Invalid CAPTCHA code.");
      }
    } else {
      alert("Les mots de passe ne correspondent pas.");
    }
  };  

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2>Inscription</h2>
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
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirme le MDP :</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <div className="form-group-captcha">
      <label for="captcha">Captcha:</label>
        <input
          type="text"
          id="captcha"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          required
          className="form-control"
        />
        <span className="captcha-code">{captcha}</span>
        <button type="button" className="captcha-refresh-btn" onClick={generateCaptcha}>
          Rafraîchir
        </button>
      </div>
      <button type="submit" className="form-btn">Enregistrer</button>
    </form>
  );
};

export default Register;