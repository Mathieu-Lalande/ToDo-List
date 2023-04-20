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

  const getUserTasks = useCallback(() => {
    const userTasks = JSON.parse(localStorage.getItem("usersTasks")) || {};
    return userTasks[currentUser] || [];
  }, [currentUser]);

  const [todos, setTodos] = useState(getUserTasks);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const updateUserTasks = useCallback((newTasks) => {
    const userTasks = JSON.parse(localStorage.getItem("usersTasks")) || {};
    userTasks[currentUser] = newTasks;
    localStorage.setItem("usersTasks", JSON.stringify(userTasks));
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      updateUserTasks(todos);
    }
  }, [todos, updateUserTasks, currentUser]);

  const handleRegister = (username, password) => {
    const newUser = { username, password };
    setUsers([...users, newUser]);
    setCurrentUser(username);
    setIsLoggedIn(true);
    const userTasks = JSON.parse(localStorage.getItem("usersTasks")) || {};
    userTasks[username] = [];
    localStorage.setItem("usersTasks", JSON.stringify(userTasks)); 
  };

  const handleLogin = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setCurrentUser(username);
      setIsLoggedIn(true);
      const userTasks = JSON.parse(localStorage.getItem("usersTasks")) || {};
      setTodos(userTasks[username] || []);
    } else {
      alert("Mauvais identifiants");
    }
  };

  const handleLogout = () => {
    setCurrentUser("");
    setIsLoggedIn(false);
    setTodos([]);
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
        <div className="form-wrapper">
          {!isLoggedIn && (
            <>
              <Register handleRegister={handleRegister} />
              <Login handleLogin={handleLogin} />
            </>
          )}
          {isLoggedIn && (
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
          {isLoggedIn && (
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
