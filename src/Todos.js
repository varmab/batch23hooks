import React, { useState } from 'react';

function Todos(){
    var [todos,setTodos]=useState([]);
    var [todo,setTodo]=useState('');

    var onTodoChange=(e)=>{
        setTodo(e.target.value)
    }

    var addTodo=()=>{
        setTodos([
            ...todos,
            todo
        ])

        setTodo('');
    }

    var removeTodo=(todo)=>{
        setTodos(todos.filter((currentTodo)=>{
            return todo!=currentTodo;
        }))
    }

    return(
        <div>
            <h1>Todos</h1>
            <input type="text" value={todo} onChange={onTodoChange} name="todo"/>
            <button onClick={addTodo}>Add Todo</button>
            <ul>
            {
                todos.map((todo,index)=>{
                    return <li key={index}>{todo} <button onClick={()=>removeTodo(todo)}>Remove</button></li>
                })
            }
            </ul>
        </div>
    )
}

export default Todos;