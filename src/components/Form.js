import React, {useEffect} from "react";
import {v4 as uuidv4} from "uuid";


const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => { // destructuring props

    const updateTodo = (title, id, completed) => { // updateTodo allows to update a todo
        const newTodo = todos.map((todo) => { // update the todos list
            return todo.id === id ? {title, id, completed} : todo // check if the todo to update is the todo to update
        });
        setTodos(newTodo); // update the todos list
        setEditTodo("");
    };

    useEffect(() => { // useEffect allows to update the input value when the editTodo changes
        if(editTodo) { // check if the todo to edit exists
            setInput(editTodo.title); // update the input value
        } else { // if the todo to edit doesn't exist
            setInput(""); // reset the input value
        }
    }, [setInput, editTodo]);   

    const onInputChange = (event) => { // onInputChange allows to update the input value
        setInput(event.target.value); // update the input value
    };

    const onFormSubmit = (event) => { // onFormSubmit allows to submit the form
        event.preventDefault(); // prevent the default behavior of the form
        if(!editTodo) {
            setTodos([ // update the todos list
                ...todos, {id: uuidv4(), title: input, completed: false} // add a new todo to the todos list
            ]); 
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed); // update the todo to edit
        };
    };

    return ( // return the form
        <form onSubmit={onFormSubmit}>
            <input
                type="text" 
                placeholder="Entrez une tâche" 
                className="task-input" 
                value={input } 
                required
                onChange={onInputChange}/>
            <button className="button-add" type="submit">
                {editTodo ? "OK" : "ADD"}
            </button>
        </form>
    );
};

export default Form;