import { SetStateAction, Dispatch} from "react"
import { UserTodos } from "../lib/types";
import { createLocalTodo, handleCompletedStatus, handleTextInput } from "../lib/localCRUDfuncs";
import { useState, useRef } from 'react';
import styles from '@/app/ui/textInput.module.css';

export default function TodoLocalInput({ setUserTodos }:
    { setUserTodos: Dispatch<SetStateAction<UserTodos[]>> }) {

    const initialValue = { _id: '', todo: '', completed: false };

    const [newTodo, setNewTodo] = useState(initialValue)

    const ref = useRef<HTMLFormElement>(null)

    return (
        <div className="bg-white dark:bg-dark mt-11 xsm:py-4 py-3 rounded-md">
            <form ref={ref} className="flex"
                onSubmit={(e) => { 
                    createLocalTodo(e, setUserTodos, newTodo);
                    setNewTodo(initialValue);
                    ref.current?.reset() }} >
                <div className={styles.checkbox_container}>
                    <input type="checkbox" name="completed" id="completed" checked={newTodo.completed} 
                        onChange={(e) => handleCompletedStatus(e, setNewTodo)}
                        className={`${styles.checkbox_input} peer`} />
                    <label htmlFor="completed" aria-label="completed"
                        className={
                            newTodo.completed
                                ? `${styles.checked} xsm:w-6 xsm:h-6 w-5 h-5 rounded-full to-gradient-two 
                                    bg-check-mark border-2 border-none from-gradient-one`
                                : `${styles.checkbox_label} peer-focus:bg-gradient-to-br peer-focus:border-none
                                    peer-focus:from-gradient-one peer-focus:after:w-5 peer-focus:to-gradient-two 
                                    peer-focus:after:h-5 after:hover:dark:bg-dark dark:border-dark-border 
                                    peer-focus:after:bg-white peer-focus:after:absolute peer-focus:after:dark:bg-dark 
                                    peer-focus:after:bg-white peer-focus:after:inset-0 peer-focus:after:m-auto
                                    peer-focus:after:rounded-full` }>
                    </label>
                </div>
                <input type="text" name="todo" id="todo"
                    className={`${styles.textInput} dark:text-dark-text dark:bg-dark`}
                    onChange={(e) => handleTextInput(e, setNewTodo)}
                    placeholder="Create a new todo..."
                    required
                />
                <label htmlFor="todo" aria-label="Create a new todo"></label>
            </form>
        </div>
    )
}
