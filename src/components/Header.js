import React from 'react'

const Header = ({ isLoggedIn, handleLogout, currentUser }) => { // get the user status, the function to log out the user and the current user
    return (
      <div className="header">
        <h1>Ma ToDo List :</h1>
        {isLoggedIn && ( // display the user info if the user is logged in
          <div className="user-info">
            <p className='name-header'>Bienvenue, {currentUser} !</p> 
            <button onClick={handleLogout} className='button-logout'>Se déconnecter</button>
          </div>
        )}
      </div>
    );
};

export default Header;