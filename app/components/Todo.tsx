'use client'

import {useState} from 'react'
import styles from '@/app/ui/textInput.module.css';
import Image from 'next/image'

function deleteTodo() { }
function updateCompletedStatus() {}

interface TodoProps {
    todo: string;
    id: string;
    completed: boolean;
}

export default function Todo(props: TodoProps) {

    const {todo, id, completed} = props
    const [isChecked, setIsChecked] = useState(completed)

    return (
        <li>
            <form action={updateCompletedStatus} className="flex">
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
            </form>

            {todo}
            <button onClick={deleteTodo}>
                <Image src="images/icon-cross.svg" width={25} height={25} alt="" />
            </button>
        </li>
    )
}
