'use client'

import { useState, useRef } from 'react';
import styles from '@/app/ui/textInput.module.css';
import { createTodo } from '@/app/lib/todo_actions';

export default function TodoInput() {

    const [isChecked, setIsChecked] = useState(false)

    const ref = useRef<HTMLFormElement>(null)

    return (
        <div className="bg-white dark:bg-dark mt-11 xsm:py-4 py-3 rounded-md">
            <form ref={ref} action={async (formData) => {
                await createTodo(formData)
                ref.current?.reset()
            } } className="flex">
                <div className={styles.checkbox_container}>
                    <input
                        type="checkbox"
                        name="completed"
                        id="completed"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        className={`${styles.checkbox_input} peer`} />
                    <label
                        htmlFor="completed"
                        aria-label="completed"
                        className={
                            isChecked
                                ? `${styles.checked} w-6 h-6 rounded-full to-gradient-two bg-check-mark border-2 border-none from-gradient-one`
                                : `${styles.checkbox_label} peer-focus:bg-gradient-to-br peer-focus:border-none peer-focus:from-gradient-one 
                            peer-focus:after:w-5 peer-focus:to-gradient-two peer-focus:after:h-5 after:hover:dark:bg-dark 
                            dark:border-dark-border peer-focus:after:bg-white peer-focus:after:absolute peer-focus:after:dark:bg-dark 
                            peer-focus:after:bg-white peer-focus:after:inset-0 peer-focus:after:m-auto peer-focus:after:rounded-full` }></label>

                </div>
                <input
                    className={`${styles.textInput} dark:text-dark-text dark:bg-dark`}
                    type="text" placeholder="Create a new todo..."
                    name="todo"
                    id="todo" />
                <label htmlFor="todo" aria-label="Create a new todo"></label>
            </form>
        </div>
    )
}
