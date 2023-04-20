import React from 'react'

const Header = ({ isLoggedIn, handleLogout, currentUser }) => {
    return (
      <div className="header">
        <h1>My To Do List :</h1>
        {isLoggedIn && (
          <div className="user-info">
            <p className='name-header'>Welcome, {currentUser} !</p>
            <button onClick={handleLogout} className='button-logout'>Sign out</button>
          </div>
        )}
      </div>
    );
};

export default Header;