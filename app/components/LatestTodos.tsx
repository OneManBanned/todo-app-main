'use client'

import { useState, useEffect } from 'react';
import { UserTodos, Todos } from "../lib/types";
import { fetchLocalStorageTodos } from '../ui/fetchLocalStorageTodos';
import TodoDatabaseInput from './TodoDatabaseInput';
import TodoLocalInput from './TodoLocalInput';
import Todo from '../components/Todo'
import DeleteAllBtn from './DeleteAllBtn';
import FilterFieldset from './FilterFieldset';

export default function LatestTodos({ databaseTodos, sessionId }: DatabaseProps) {

    // userIsSignedIn ? databaseTodos : localTodos
    const [userTodos, setUserTodos] = useState<UserTodos[]>([])

    // filter todos by "all" | "active" | "done" 
    const [filter, setFilter] = useState("all")

    useEffect(() => {
        databaseTodos
            ? setUserTodos(filterTodos(filter, databaseTodos.todos))
            : setUserTodos(filterTodos(filter, fetchLocalStorageTodos().todos))
    }, [filter, databaseTodos])

    return (
        <>
            {sessionId ? <TodoDatabaseInput /> : <TodoLocalInput setUserTodos={setUserTodos} />}

            <div>
                {userTodos.length
                    ? <div className="mt-6">
                        <ul> {userTodos.map((todo: UserTodos, index: number) => {
                            return <Todo sessionId={sessionId} setUserTodos={setUserTodos}
                                todoId={todo._id} todo={todo.todo} completed={todo.completed} key={index} />
                        })}
                        </ul>
                    </div>
                    : <p className="mt-6">Enter a Todo</p>}
                <div className="flex mid:flex-nowrap flex-wrap">
                    <p className='mid:order-first rounded-l-md mid:rounded-bl-md mid: rounded-tl-none mb-6 mid:m-0 bg-white dark:bg-dark shrink
                   font-normal text-sm xsm:text-base mt-auto flex text-[#9394a5] items-center dark:text-dark-border py-4 ps-4'>
                        {userTodos.length == 1
                            ? `${userTodos.length} item left`
                            : `${userTodos.length} items left`}
                    </p>
                    <FilterFieldset filter={filter} setFilter={setFilter} />
                    <DeleteAllBtn sessionId={sessionId} setUserTodos={setUserTodos}/>
                </div>
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

interface DatabaseProps {
    databaseTodos: Todos | undefined;
    sessionId: string | undefined;
}

