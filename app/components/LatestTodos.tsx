"use client"

import { useState, useEffect, useRef } from 'react';
import { UserTodos, Todos } from "../lib/types";
import { fetchLocalStorageTodos } from '../ui/fetchLocalStorageTodos';
import TodoDatabaseInput from './TodoDatabaseInput';
import TodoLocalInput from './TodoLocalInput';
import Todo from '../components/Todo'
import DeleteAllBtn from './DeleteAllBtn';
import FilterFieldset from './FilterFieldset';
import TodosLeft from './TodosLeft';

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

            <div className="xsm:shadow-xl"> {userTodos.length
                ? <div className="mt-6 shadow-2xl xsm:shadow-none">
                    <ul> {userTodos.map((todo: UserTodos, index: number) => {
                        return <Todo key={index} sessionId={sessionId} setUserTodos={setUserTodos}
                                data={todo} />
                    })}</ul>
                </div>
                : <p className="bg-white dark:bg-dark xsm:py-4 py-3 flex first-of-type:rounded-t-md border-b-2 border-white-border 
            dark:border-dark-border cursor-pointer mt-6 text-white-text flex justify-center dark:text-dark-text dark:bg-dark">
                    Enter a Todo</p>}
                <div className="flex mid:flex-nowrap flex-wrap">
                    <TodosLeft userTodos={userTodos} />
                    <FilterFieldset filter={filter} setFilter={setFilter} />
                    <DeleteAllBtn sessionId={sessionId} setUserTodos={setUserTodos} />
                </div>
            </div>
        </>
    )
}


function filterTodos(filter: string, todoArr: UserTodos[]): any {

    switch (filter) {
        case 'all': return todoArr;
        case 'active': return todoArr.filter(todo => !todo.completed)
        case 'done': return todoArr.filter(todo => todo.completed)
        default: return todoArr
    }
}

type DatabaseProps = {
    databaseTodos: Todos | undefined;
    sessionId: string | undefined;
}

