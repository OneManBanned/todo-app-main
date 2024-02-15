'use client'

import styles from '@/app/ui/textInput.module.css';
import Image from 'next/image'
import  { deleteTodo, updateCompletedStatus }  from '@/app/lib/todo_actions';

interface TodoProps {
    sessionId: string;
    todo: string;
    todoId: string;
    completed: boolean;
}

export default function Todo(props: TodoProps) {

    const {sessionId, todo, todoId, completed} = props
    const deleteTodoWithId = deleteTodo.bind(null, [sessionId, todoId])
    const updateCompletedStatusWithId = updateCompletedStatus.bind(null,  [completed, todoId])


    return (
        <li>
                <div className={styles.checkbox_container}>
                    <input
                        type="checkbox"
                        name={`completed-${todoId}`}
                        id={`completed-${todoId}`}
                        defaultChecked={completed}
                        onClick={() => updateCompletedStatusWithId({})}
                        className={`${styles.checkbox_input} peer`} />
                    <label
                        htmlFor={`completed-${todoId}`}
                        aria-label="completed"
                        className={
                            completed
                                ? `${styles.checked} w-6 h-6 rounded-full to-gradient-two bg-check-mark border-2 border-none from-gradient-one`
                                : `${styles.checkbox_label} peer-focus:bg-gradient-to-br peer-focus:border-none peer-focus:from-gradient-one 
                            peer-focus:after:w-5 peer-focus:to-gradient-two peer-focus:after:h-5 after:hover:dark:bg-dark 
                            dark:border-dark-border peer-focus:after:bg-white peer-focus:after:absolute peer-focus:after:dark:bg-dark 
                            peer-focus:after:bg-white peer-focus:after:inset-0 peer-focus:after:m-auto peer-focus:after:rounded-full` }>
                </label>
            </div>
            {todo}
            <button onClick={() => deleteTodoWithId({})}>
                <Image src="images/icon-cross.svg" width={25} height={25} alt="" />
            </button>
        </li>
    )
}
