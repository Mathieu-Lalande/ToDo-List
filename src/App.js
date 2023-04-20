import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  //localStorage.clear();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [currentUser, setCurrentUser] = useState("");
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  const getUserTasks = useCallback(() => { // useCallback allows not to reload the function each time
    const userTasks = JSON.parse(localStorage.getItem("usersTasks")) || {}; // get the tasks of all users
    return userTasks[currentUser] || []; // return the tasks of the current user
  }, [currentUser]);

  const [todos, setTodos] = useState(getUserTasks); // useState allows to load the tasks of the current user

  useEffect(() => { // useEffect allows to load the users from the local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || []; // get the users from the local storage
    setUsers(storedUsers); // load the users
  }, []);

  useEffect(() => { // useEffect allows to save the users in the local storage
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const updateUserTasks = useCallback((newTasks) => { // useCallback allows not to reload the function each time
    const userTasks = JSON.parse(localStorage.getItem("usersTasks")) || {}; // get the tasks of all users
    userTasks[currentUser] = newTasks; // update the tasks of the current user
    localStorage.setItem("usersTasks", JSON.stringify(userTasks)); // save the new tasks in the local storage
  }, [currentUser]);

  useEffect(() => { // useEffect allows to save the tasks of the current user in the local storage
    if (currentUser) { 
      updateUserTasks(todos);
    }
  }, [todos, updateUserTasks, currentUser]);

  const handleRegister = (username, password) => { // handleRegister allows to register a new user
    const newUser = { username, password }; // create a new user
    setUsers([...users, newUser]); // add the new user to the users list
    setCurrentUser(username); // set the current user
    setIsLoggedIn(true); // set the user as logged in
    const userTasks = JSON.parse(localStorage.getItem("usersTasks")) || {}; // get the tasks of all users
    userTasks[username] = []; // add the tasks of the new user
    localStorage.setItem("usersTasks", JSON.stringify(userTasks)); // save the new tasks in the local storage
  };

  const handleLogin = (username, password) => { // handleLogin allows to log in a user
    const user = users.find( // find the user in the users list
      (user) => user.username === username && user.password === password  // check if the username and the password are correct
    );
    if (user) {
      setCurrentUser(username); // set the current user
      setIsLoggedIn(true);  // set the user as logged in
      const userTasks = JSON.parse(localStorage.getItem("usersTasks")) || {}; // get the tasks of all users
      setTodos(userTasks[username] || []); // load the tasks of the current user
    } else {
      alert("Mauvais identifiants"); // display an error message
    }
  };

  const handleLogout = () => { // handleLogout allows to log out a user
    setCurrentUser(""); // set the current user as empty
    setIsLoggedIn(false); // set the user as logged out
    setTodos([]); // set the tasks as empty
  };

  return ( // return the app
    <div className="container">
      <div className="app-wrapper">
        <Header
          isLoggedIn={isLoggedIn} 
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
        <div className="form-wrapper">
          {!isLoggedIn && ( // display the login and register forms if the user is not logged in
            <>
              <Register handleRegister={handleRegister} />
              <Login handleLogin={handleLogin} />
            </>
          )}
          {isLoggedIn && (  // display the form if the user is logged in
            <Form
              currentUser={currentUser}
              users={users}
              setUsers={setUsers}
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          )}
        </div>
        <div className="todos-list-wrapper">
          {isLoggedIn && ( // display the tasks list if the user is logged in
            <TodosList 
              currentUser={currentUser} 
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

  export default App;
