'use client'

import { getSession } from "next-auth/react"
import { useEffect, useState } from 'react'
import Todo from '@/app/components/Todo'

async function fetchSession() {
    const session = await getSession()
    return session;
}

export default function LatestTodos() {

    const session = fetchSession()
    const [sessionId, setSessionId] = useState('')
    const [todos, setTodos] = useState([{ "todo": "hi", "_id": "sdfsdfd", "completed": true }])

    session
        .then(res => res ? setSessionId(res.user.id) : null)
        .catch((error) => console.log(error))

    useEffect(() => {

        if (sessionId !== '') {

            fetch(`http://localhost:3000/api/todos/${sessionId}`)
                .then(res => res.json())
                .then(data => setTodos(data.todos))
                .catch(err => console.log(err))

        }}, [sessionId])



    return (
        <ul>
            {todos.map((todo, index) => {
                console.log("TODO",todo)
                return <Todo 
                    todo={todo.todo} 
                    id={todo._id} 
                    completed={todo.completed} 
                    key={index} 
                />
            })}
        </ul>
    )
}

