'use client'

import { useState, useEffect } from 'react';
import Todo from '../components/Todo'
import FilterFieldset from './FilterFieldset';

export default function LatestTodos({ databaseTodos, sessionId }: DatabaseProps) {

    const [userTodos, setUserTodos] = useState([])
    const [filter, setFilter] = useState("all")

    useEffect(() => {
        let arr = databaseTodos ? databaseTodos.todos : []
        setUserTodos(filterTodos(filter, arr))
    }, [filter, databaseTodos])

    return (
        <>
            <div className="mt-6">
                {userTodos.length
                    ? <ul> {userTodos.map((todo: UserTodos, index: number) => {
                        return <Todo
                            sessionId={sessionId}
                            todo={todo.todo} todoId={todo._id} completed={todo.completed}
                            key={index} />
                    })}
                    </ul>
                    : <p>Enter a todo to start</p>
                }
            </div>
            <div className="flex mid:flex-nowrap flex-wrap">
                <p className='mid:order-first rounded-bl-md mb-6 mid:m-0 bg-white dark:bg-dark shrink
                   font-normal text-sm xsm:text-base mt-auto flex text-[#9394a5] items-center dark:text-dark-border py-4 ps-4'>
                    {userTodos.length == 1
                        ? `${userTodos.length} item left`
                        : `${userTodos.length} items left`}
                </p>
                <FilterFieldset
                    filter={filter}
                    setFilter={setFilter} />
                <button
                    onClick={() => console.log('click')}
                    className='mid:order-last rounded-br-md mid:m-0 mb-6 bg-white dark:bg-dark grow text-right 
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

