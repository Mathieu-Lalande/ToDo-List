import React from 'react'

const Header = ({ isLoggedIn, handleLogout, currentUser }) => {
    return (
      <div className="header">
        <h1>Ma liste de tâches :</h1>
        {isLoggedIn && (
          <div className="user-info">
            <p className='name-header'>Bienvenue, {currentUser} !</p>
            <button onClick={handleLogout} className='button-logout'>Se déconnecter</button>
          </div>
        )}
      </div>
    );
};

export default Header;