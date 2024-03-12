import { SetStateAction, useState } from "react"
import { UserTodos } from "../lib/types";
import { deleteLocalTodo } from "../lib/localCRUDfuncs"
import Image from 'next/image'
import TodoCheckbox from "./TodoCheckbox";
import { deleteTodo } from '../lib/todo_actions';

export default function Todo({ setUserTodos, sessionId, todo, todoId, completed }: TodoProps) {

    const [isHover, setIsHover] = useState(false)
    const [isFocus, setIsFocus] = useState(false)

    const deleteTodoWithId: any = deleteTodo.bind(null, [sessionId, todoId])

    return (
        <li className="bg-white dark:bg-dark xsm:py-4 py-3 flex first-of-type:rounded-t-md border-b-2 border-white-border 
            dark:border-dark-border cursor-pointer"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <TodoCheckbox todoId={todoId} completed={completed} setUserTodos={setUserTodos} sessionId={sessionId} />
            <p className={
                completed
                    ? "w-5/6 me-3 font-normal text-sm xsm:text-xl line-through text-white-border dark:text-dark-border mt-auto truncate"
                    : `w-5/6 me-3 font-normal text-sm xsm:text-xl text-white-text dark:text-dark-text dark:bg-dark flex truncate`
            }>{todo}</p>

            <button className="w-6 h-6 rounded-full mr-4 flex items-center"
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onClick={() => sessionId
                    ? deleteTodoWithId({})
                    : deleteLocalTodo(setUserTodos, todoId)}>
                {isHover || isFocus
                    ? <div className="relative overflow-hidden w-3 h-3 xsm:w-5 xsm:h-5">
                        <Image src="images/icon-cross.svg" alt="" fill /></div>
                    : null
                }
            </button>
        </li>
    )
}

interface TodoProps {
    setUserTodos: React.Dispatch<SetStateAction<UserTodos[]>>;
    sessionId: string | undefined;
    todo: string;
    todoId: string;
    completed: boolean;
}
