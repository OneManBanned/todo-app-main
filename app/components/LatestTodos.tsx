'use client'

import { useState, useEffect } from 'react';
import Todo from '../components/Todo'
import FilterFieldset from './FilterFieldset';
import { deleteCompletedUserTodos } from '../lib/todo_actions';

export default function LatestTodos({ databaseTodos, sessionId }: DatabaseProps) {


    // userIsSignedIn ? databaseTodos : localTodos
    const [userTodos, setUserTodos] = useState([])

    // filter todos by "all" | "active" | "done" 
    const [filter, setFilter] = useState("all")

    const deleteCompletedTodos: any = deleteCompletedUserTodos.bind(null, [sessionId])

    useEffect(() => {

        if (databaseTodos) {
            setUserTodos(filterTodos(filter, databaseTodos.todos))
        }

    }, [filter, databaseTodos])

    useEffect(() => {

        if (!databaseTodos) {

            let localTodos: any = localStorage.getItem("localTodos")

            if (localTodos == null) {

                localStorage.setItem("localTodos", '{"todos":[]}')
                localTodos = localStorage.getItem("localTodos")

                if (localTodos) {
                    localTodos = JSON.parse(localTodos)
                    setUserTodos(filterTodos(filter, localTodos.todos))
                }

            } else {

                localTodos = JSON.parse(localTodos)
                setUserTodos(filterTodos(filter, localTodos.todos))
      
        }
    }


    }, [filter] )


    if (!userTodos.length) return <p>Enter a todo</p>

    return (
        <>
            <div className="mt-6">
                <ul> {userTodos.map((todo: UserTodos, index: number) => {
                    return <Todo
                        sessionId={sessionId}
                        todo={todo.todo} todoId={todo._id} completed={todo.completed}
                        key={index} />
                })}
                </ul>
            </div>
            <div className="flex mid:flex-nowrap flex-wrap">
                <p className='mid:order-first rounded-l-md mid:rounded-bl-md mid: rounded-tl-none mb-6 mid:m-0 bg-white dark:bg-dark shrink
                   font-normal text-sm xsm:text-base mt-auto flex text-[#9394a5] items-center dark:text-dark-border py-4 ps-4'>
                    {userTodos.length == 1
                        ? `${userTodos.length} item left`
                        : `${userTodos.length} items left`}
                </p>
                <FilterFieldset
                    filter={filter}
                    setFilter={setFilter} />
                <button
                    onClick={() => deleteCompletedTodos({})}
                    className='mid:order-last rounded-r-md mid:rounded-br-md mid: rounded-tr-none mid:m-0 mb-6 bg-white dark:bg-dark grow text-right 
                    mid:grow-0 shrink font-normal xsm:text-base text-sm text-[#9394a5] dark:text-dark-border py-4 pe-4'>
                    Clear Completed
                </button>
            </div>
        </>

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

interface Todos { todos: UserTodos[] }

interface DatabaseProps {
    databaseTodos: Todos | undefined;
    sessionId: string | undefined;
}

interface UserTodos {
    _id: string;
    todo: string;
    completed: boolean;
}

