import React from "react";

const TodosList = ({todos, setTodos, setEditTodo}) => { // get the todos, the function to set the todos and the function to set the todo to edit

    const handleComplete = (todo) => { // handleComplete allows to complete a todo
        setTodos(todos.map((item) => { // update the todos list
            if (item.id === todo.id) { // check if the todo to complete is the todo to update
                return {...item, completed: !item.completed};
            }
            return item;
        }));
    };

    const handleEdit = ({id}) => { // handleEdit allows to edit a todo
        const findTodo = todos.find((todo) => todo.id === id);  // find the todo to edit    
        setEditTodo(findTodo);
    };

    const handleDelete = ({id}) => { // handleDelete allows to delete a todo
        setTodos(todos.filter((todo) => todo.id !== id)); // update the todos list
    };  

    if (!Array.isArray(todos)) { // check if the todos list is an array
        return <div>No task at the moment</div>
    }

    return ( // return the todos list
        <div>
            {todos.map((todo) => ( // map the todos list
                <li className="list-item" key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className={`list ${todo.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button 
                            className="button-complete task-button"
                            onClick={() => handleComplete(todo)}
                        >
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button 
                            className="button-edit task-button"
                            onClick={() => handleEdit(todo)}
                        >
                            <i className="fa fa-edit"></i>
                        </button>
                        <button 
                            className="button-delete task-button" 
                            onClick={() => handleDelete(todo)}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>  
                </li>
            ))}
        </div>
    );
};

export default TodosList;
