'use client'

import { useState, useRef } from 'react';
import styles from '@/app/ui/textInput.module.css';

export default function TodoLocalInput() {

    function handleCompletedStatus(e: React.ChangeEvent<HTMLInputElement>) {

        setLocalTodo(prev => {
            return {
                ...prev,
                [e.target.name]: !prev.completed
            }
        })
    }

    function handleTextInput(e: React.ChangeEvent<HTMLInputElement>) {

        const { name, value } = e.target

        setLocalTodo(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

     function handleFormSubmit(e: React.SyntheticEvent) {

        e.preventDefault();

        let storedTodos = localStorage.getItem('localTodos')

        if (storedTodos) {

            let storedArr = JSON.parse(storedTodos)
            storedArr.todos.push(localTodo)
            localStorage.setItem('localTodos', JSON.stringify(storedArr))

        }
    }

    const [localTodo, setLocalTodo] = useState({ todo: '', completed: false })

    const ref = useRef<HTMLFormElement>(null)

    return (
        <div className="bg-white dark:bg-dark mt-11 xsm:py-4 py-3 rounded-md">
            <form
                ref={ref}
                onSubmit={(e) => handleFormSubmit(e)}
                className="flex">
                <div className={styles.checkbox_container}>
                    <input
                        type="checkbox"
                        name="completed"
                        id="completed"
                        checked={localTodo.completed}
                        onChange={(e) => handleCompletedStatus(e)}
                        className={`${styles.checkbox_input} peer`} />
                    <label
                        htmlFor="completed"
                        aria-label="completed"
                        className={
                            localTodo.completed
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
                <input
                    className={`${styles.textInput} dark:text-dark-text dark:bg-dark`}
                    type="text"
                    onChange={(e) => handleTextInput(e)}
                    placeholder="Create a new todo..."
                    name="todo"
                    id="todo" />
                <label htmlFor="todo" aria-label="Create a new todo"></label>
            </form>
        </div>
    )
}


