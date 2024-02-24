'use client' 

import { useState, useEffect } from 'react';
import Todo from '@/app/components/Todo'

export default function LatestTodos({databaseTodos, sessionId}) {

    const [userTodos, setUserTodos] = useState<[]>([])
    const [filter, setFilter] = useState("all")

    useEffect(() => {
        if (databaseTodos) setUserTodos(databaseTodos)
    }, [databaseTodos])


    return (
        <div className="mt-6">
        <ul>
            {filterTodos(filter, userTodos).map((todo, index) => {
                return <Todo 
                    sessionId={sessionId}
                    todo={todo.todo} 
                    todoId={todo._id} 
                    completed={todo.completed} 
                    key={index} />
                })}
        </ul>
            <div>
                <fieldset>
                    <div>
                        <input type="radio" id="all" onClick={(e) => setFilter(e.target.value)} name="todosFilter" value="all" defaultChecked />
                        <label htmlFor="all">All</label>
                    </div>
                    <div>
                        <input type="radio" id="active" onClick={(e) => setFilter(e.target.value)} name="todosFilter" value="active" />
                        <label htmlFor="active">Active</label>
                    </div>
                    <div>
                        <input type="radio" id="done" onClick={(e) => setFilter(e.target.value)} name="todosFilter" value="done" />
                        <label htmlFor="done">Completed</label>
                    </div>
                </fieldset>
            </div> 
        </div>
    )
}

function filterTodos(filter, todoArr) {

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
