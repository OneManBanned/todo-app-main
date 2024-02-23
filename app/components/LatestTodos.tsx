'use client' 

import { useState } from 'react';
import Todo from '@/app/components/Todo'

export default function LatestTodos(props) {

    const [todos, setTodos] = useState([{ "todo": "hi", "_id": "sdfsdfd", "completed": true }])


    function useTodos(databaseTodos, clientTodos) {
        if (databaseTodos) {
            return databaseTodos;
        } 
        return clientTodos;
        
    }


    return (
        <div className="mt-6">
        <ul>
            {useTodos(props.todos.todos, todos).map((todo, index) => {
                return <Todo 
                    sessionId={props.sessionId}
                    todo={todo.todo} 
                    todoId={todo._id} 
                    completed={todo.completed} 
                    key={index} 
                />
            })}
        </ul>
        </div>
    )
}

