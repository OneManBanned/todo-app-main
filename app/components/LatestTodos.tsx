'use client'

import { useState, useEffect } from 'react';
import Todo from '../components/Todo'
import FilterFieldset from './FilterFieldset';

export default function LatestTodos({ databaseTodos, sessionId }: DatabaseProps) {

    const [userTodos, setUserTodos] = useState([])
    const [filter, setFilter] = useState("all")

    useEffect(() => {
        if (databaseTodos) {
            setUserTodos(databaseTodos.todos)
        }
    }, [databaseTodos])

    useEffect(() => {
        let arr = databaseTodos ? databaseTodos.todos : []
        setUserTodos(filterTodos(filter, arr))
    }, [filter])

    return (
        <div className="mt-6">
            {userTodos.length
                ? <ul> {userTodos.map((todo: UserTodos, index: number) => {
                        return <Todo 
                            sessionId={sessionId}
                            todo={todo.todo} todoId={todo._id} completed={todo.completed}
                            key={index} /> })}
                  </ul>
                : <p>Enter a todo to start</p>
            }
            <FilterFieldset setFilter={setFilter} />
        </div>
    )
}

function filterTodos(filter: string, todoArr: UserTodos[]): any {

    switch (filter) {
        case 'all': {
            return todoArr;
        }
        case 'active': {
            return todoArr.filter(todo => !todo.completed)
        }
        case 'done': {
            return todoArr.filter(todo => todo.completed)
        }
    }
}

interface Todos { todos: [] }

interface DatabaseProps {
    databaseTodos: Todos | undefined;
    sessionId: string | undefined;
}

interface UserTodos {
    _id: string;
    todo: string;
    completed: boolean;
}

